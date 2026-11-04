import { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { feature } from 'topojson-client'
import world from 'world-atlas/countries-110m.json'
import { cities } from '../data/content.js'

// Unwrap rings that cross the antimeridian (Fiji, Russia…) so Leaflet doesn't
// draw a horizontal stripe across the whole map.
function unwrapRing(ring) {
  let shift = 0
  return ring.map(([lng, lat], i) => {
    if (i > 0) {
      const prev = ring[i - 1][0]
      if (lng - prev > 180) shift -= 360
      else if (prev - lng > 180) shift += 360
    }
    return [lng + shift, lat]
  })
}
const countries = feature(world, world.objects.countries)
countries.features.forEach(({ geometry: g }) => {
  if (!g) return
  if (g.type === 'Polygon') g.coordinates = g.coordinates.map(unwrapRing)
  else if (g.type === 'MultiPolygon') g.coordinates = g.coordinates.map((poly) => poly.map(unwrapRing))
})

// Curved arc between two [lat, lng] points (quadratic Bézier), drawn like a transit line.
function arc(a, b, bend = 0.25, steps = 48) {
  const [lat1, lng1] = a
  const [lat2, lng2] = b
  const mid = [(lat1 + lat2) / 2, (lng1 + lng2) / 2]
  const ctrl = [mid[0] + (lng2 - lng1) * bend, mid[1] - (lat2 - lat1) * bend]
  const pts = []
  for (let i = 0; i <= steps; i++) {
    const t = i / steps
    const u = 1 - t
    pts.push([
      u * u * lat1 + 2 * u * t * ctrl[0] + t * t * lat2,
      u * u * lng1 + 2 * u * t * ctrl[1] + t * t * lng2,
    ])
  }
  return pts
}

function graticule(step = 20) {
  const lines = []
  for (let lng = -180; lng <= 180; lng += step) lines.push([[-85, lng], [85, lng]])
  for (let lat = -80; lat <= 80; lat += step) lines.push([[lat, -180], [lat, 180]])
  return lines
}

/**
 * Full-bleed Leaflet world map with featured-city markers.
 * `active` is the selected city id; the map flies there when it changes.
 * `offset` (0–1) shifts the focus point right so text on the left stays clear.
 */
export default function WorldMap({ active, onSelect, offset = 0 }) {
  const el = useRef(null)
  const mapRef = useRef(null)
  const markersRef = useRef({})
  const onSelectRef = useRef(onSelect)

  useEffect(() => {
    onSelectRef.current = onSelect
  }, [onSelect])

  // Create the map once.
  useEffect(() => {
    const map = L.map(el.current, {
      zoomControl: false,
      attributionControl: false,
      scrollWheelZoom: false,
      dragging: !L.Browser.mobile,
      tap: false,
      worldCopyJump: true,
      minZoom: 2,
      maxZoom: 7,
      zoomSnap: 0.25,
      maxBounds: [[-75, -400], [85, 400]],
    })
    mapRef.current = map

    L.polyline(graticule(), { className: 'graticule', interactive: false }).addTo(map)
    L.geoJSON(countries, { className: 'land', interactive: false }).addTo(map)

    for (let i = 0; i < cities.length - 1; i++) {
      L.polyline(arc(cities[i].coords, cities[i + 1].coords), {
        className: 'route',
        interactive: false,
      }).addTo(map)
    }

    cities.forEach((c) => {
      const icon = L.divIcon({
        className: 'city-marker',
        html: `<span class="pulse"></span><span class="dot"></span><span class="label">${c.name}</span>`,
        iconSize: [18, 18],
        iconAnchor: [9, 9],
      })
      const m = L.marker(c.coords, { icon, keyboard: true, title: c.name })
        .addTo(map)
        .on('click', () => onSelectRef.current?.(c.id))
      markersRef.current[c.id] = m
    })

    map.setView([24, -78], 2.75, { animate: false })
    const ro = new ResizeObserver(() => map.invalidateSize())
    ro.observe(el.current)

    return () => {
      ro.disconnect()
      map.remove()
      mapRef.current = null
      markersRef.current = {}
    }
  }, [])

  // Fly to the active city (or the overview when none is selected).
  useEffect(() => {
    const map = mapRef.current
    if (!map) return
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    const city = cities.find((c) => c.id === active)
    const zoom = city ? 3.6 : 2.75
    const target = city ? city.coords : [24, -78]
    // shift the target so the point of interest lands right of (and above) centre,
    // clear of the intro text on the left and the city panel at the bottom right
    const size = map.getSize()
    const px = map.project(target, zoom).subtract([size.x * offset, offset ? -size.y * 0.16 : 0])
    const center = map.unproject(px, zoom)
    if (reduce) map.setView(center, zoom, { animate: false })
    else map.flyTo(center, zoom, { duration: 2.2, easeLinearity: 0.2 })

    Object.entries(markersRef.current).forEach(([id, m]) => {
      m.getElement()?.classList.toggle('active', id === active)
    })
  }, [active, offset])

  return <div ref={el} className="world-map" aria-label="Map of featured cities" role="region" />
}
