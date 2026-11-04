// All site content lives here — edit this file to update the website.

const GH = 'https://github.com/MUSA-Zhanchao'
const PAGES = 'https://musa-zhanchao.github.io'

export const profile = {
  name: 'Zhanchao Yang',
  title: 'Urban Planner · Spatial Data Scientist',
  affiliation:
    'Master of City Planning & Master of Urban Spatial Analytics, Weitzman School of Design, University of Pennsylvania',
  summary:
    'I study how transportation systems and land use shape access to opportunity, and how spatial statistics and GeoAI can give planners and policymakers better evidence. My work spans transit accessibility, travel behavior, pedestrian infrastructure, and policy analytics.',
  interests: [
    'Public Policy',
    'Spatial Statistics',
    'Transportation Planning',
    'Land Use',
    'GeoAI & Computer Vision',
  ],
  email: 'zhanchao@upenn.edu',
  github: GH,
}

export const research = [
  {
    role: 'Graduate Research Assistant',
    org: 'Weitzman School of Design, University of Pennsylvania',
    supervisor: 'Dr. Erick Guerra',
    supervisorUrl: 'https://www.design.upenn.edu/people/erick-guerra',
    description:
      'Transportation research on high-capacity transit and travel behavior in Latin American cities, including metro investment and mode shift. Work-in-progress details are not shared publicly — please reach out if you are interested in collaborating.',
  },
]

// category keys are used by the filter bar
export const categories = [
  { key: 'all', label: 'All' },
  { key: 'transport', label: 'Transportation' },
  { key: 'stats', label: 'Spatial Statistics' },
  { key: 'geoai', label: 'GeoAI' },
  { key: 'policy', label: 'Policy & Engagement' },
]

export const projects = [
  {
    title: 'Streetscape Analysis Using AI',
    subtitle: 'MUSA Smart Cities Practicum · Spring 2026',
    description:
      'A scalable pipeline that maps crosswalks, crossing distances, stop signs, and streetlights at Philadelphia intersections from street-view and aerial imagery — a low-cost way to fill a persistent data gap in pedestrian safety and walkability assessment.',
    tags: ['Computer Vision', 'Deep Learning', 'Walkability', 'Python'],
    category: ['geoai', 'transport'],
    featured: true,
    collaborators: 'with Zicheng Xiang · Advisors: Dr. Xiaojiang Li & Dr. Erick Guerra',
    link: `${PAGES}/practicum-web-app/`,
    repo: `${GH}/musa-practicum`,
  },
  {
    title: "Inside Mexico City's High-Capacity Transit",
    subtitle: 'Interactive story map',
    description:
      'A scrollytelling map of the Metro and Metrobús networks — their history, recent upgrades, rider experience, and how they shape flows of people and places across the metropolitan area.',
    tags: ['Story Map', 'JavaScript', 'Transit', 'Mexico City'],
    category: ['transport'],
    featured: true,
    link: `${PAGES}/mexico-city-metro-storymap/`,
    repo: `${GH}/mexico-city-metro-storymap`,
  },
  {
    title: 'Philadelphia Transit Index Dashboard',
    subtitle: 'Interactive dashboard',
    description:
      'A tract-level transit accessibility index that helps housing seekers and tenants answer “where can I live that fits my transit needs?”, with a breakdown of subway, bus, and regional rail access.',
    tags: ['Accessibility', 'Mapbox', 'Dashboard'],
    category: ['transport', 'policy'],
    featured: true,
    link: 'https://zyang91.github.io/transit-index-dashboard/',
    repo: `${GH}/transit-index-dashboard`,
  },
  {
    title: 'Satellite & Population Embeddings',
    subtitle: 'Penn GIS Day lightning talk · Nov 2025',
    description:
      'Are Google’s satellite (Earth) and population (PDFM) embeddings powerful GeoAI tools or overrated? Demos on land-use classification and house-price estimation, plus a critical look at interpretability and bias.',
    tags: ['Embeddings', 'GeoAI', 'Tutorial'],
    category: ['geoai'],
    featured: true,
    link: `${PAGES}/Google-Embedding-tutorial/`,
    repo: `${GH}/Google-Embedding-tutorial`,
  },
  {
    title: 'Anchor Institution Engagement Tool',
    subtitle: 'MUSA 6110 JavaScript',
    description:
      'A map-based feedback tool for Penn and University City: community members report issues and suggestions at specific places; facilities managers filter and prioritize submissions.',
    tags: ['Public Engagement', 'Web Map', 'JavaScript'],
    category: ['policy'],
    link: `${PAGES}/engagement-tools-js/`,
    repo: `${GH}/engagement-tools-js`,
  },
  {
    title: 'Public Policy Analytics Showcase',
    subtitle: 'MUSA 5080',
    description:
      'Applied policy analytics in R — spatial data analysis, predictive modeling, and equity-aware evaluation for public-sector decisions.',
    tags: ['R', 'R Markdown', 'Policy Analytics'],
    category: ['policy', 'stats'],
    link: `${PAGES}/MUSA5080showcase/`,
    repo: `${GH}/PPA_assignment`,
  },
  {
    title: 'Spatial Statistics Showcase',
    subtitle: 'MUSA 5000 · team project',
    description:
      'Collection of spatial statistics assignments completed with Haoyu Zhu & Kavana Raju.',
    tags: ['Regression', 'Spatial Statistics'],
    category: ['stats'],
    link: `${PAGES}/MUSA5000_Showcase/`,
    repo: `${GH}/MUSA5000_Showcase`,
  },
  {
    title: 'OLS Regression & Cross-Validation',
    subtitle: 'MUSA 5000 · Assignment 1',
    description: 'Ordinary least squares modeling of neighborhood outcomes with cross-validated performance.',
    tags: ['OLS', 'Cross-Validation'],
    category: ['stats'],
    link: `${PAGES}/MUSA5000-OLS/`,
    repo: `${GH}/MUSA5000-OLS`,
  },
  {
    title: 'Spatial Lag, Error & GWR Models',
    subtitle: 'MUSA 5000 · Assignment 2',
    description: 'Testing for spatial autocorrelation and comparing spatial lag, spatial error, and geographically weighted regression.',
    tags: ['Spatial Autocorrelation', 'GWR'],
    category: ['stats'],
    link: `${PAGES}/MUSA5000-spatial-correlation/`,
    repo: `${GH}/MUSA5000-spatial-correlation`,
  },
  {
    title: 'Logistic Regression',
    subtitle: 'MUSA 5000 · Assignment 3',
    description: 'Binary outcome modeling with ROC curves, sensitivity/specificity, misclassification rates, and AIC model selection.',
    tags: ['Logistic Regression', 'ROC'],
    category: ['stats'],
    link: `${PAGES}/MUSA5000-Logistic-Regression/`,
    repo: `${GH}/MUSA5000-Logistic-Regression`,
  },
  {
    title: 'Point Pattern Analysis',
    subtitle: 'MUSA 5000 · Assignment 4',
    description: 'Nearest-neighbor and clustering analysis of point events.',
    tags: ['Point Patterns', 'Nearest Neighbor'],
    category: ['stats'],
    link: `${PAGES}/MUSA5000-Point-Pattern-Analysis/`,
    repo: `${GH}/MUSA5000-Point-Pattern-Analysis`,
  },
  {
    title: 'K-Means Clustering',
    subtitle: 'MUSA 5000 · Assignment 5',
    description: 'Unsupervised classification of neighborhoods with k-means.',
    tags: ['K-Means', 'Clustering'],
    category: ['stats'],
    link: `${PAGES}/MUSA5000-K-Means-Clustering/`,
    repo: `${GH}/MUSA5000-K-Means-Clustering`,
  },
  {
    title: 'Text Analysis',
    subtitle: 'MUSA 5000 · Assignment 6',
    description: 'Text mining and sentiment analysis applied to urban questions.',
    tags: ['NLP', 'Text Mining'],
    category: ['stats'],
    link: 'https://zyang91.github.io/MUSA5000-text-analysis/',
    repo: `${GH}/MUSA5000-text-analysis`,
  },
  {
    title: 'Bivariate Map Exercise',
    subtitle: 'MUSA communication',
    description: 'Cartographic design exercise visualizing two variables at once with a bivariate color scheme.',
    tags: ['Cartography', 'Data Viz'],
    category: ['policy'],
    link: `${PAGES}/bivariate-map-excercise/`,
    repo: `${GH}/bivariate-map-excercise`,
  },
  {
    title: 'AI for Urban Sustainability',
    subtitle: 'MUSA 6950',
    description: 'Assignments and experiments applying machine learning to urban sustainability problems.',
    tags: ['Machine Learning', 'Sustainability'],
    category: ['geoai'],
    repo: `${GH}/ai-sustainbility-assignment`,
  },
]

export const teaching = [
  {
    title: 'OpenStreetMap, Street Networks & Accessibility with Pandana',
    venue: 'Guest lecture · MUSA 5500 Geospatial Data Science in Python (Week 8)',
    date: 'Oct 2026',
    note: 'Instructor: Dr. Xiaojiang Li. OSMnx routing, Pandana network accessibility, and transit accessibility with r5r.',
    link: `${GH}/OSM-lecture`,
  },
  {
    title: 'Satellite and Population Embeddings: Powerful GeoAI Tools or Overrated?',
    venue: 'Lightning talk · Penn GIS Day',
    date: 'Nov 2025',
    note: 'Live demo of PDFM and Google Earth embeddings for land-use classification and housing price estimation.',
    link: `${PAGES}/Google-Embedding-tutorial/`,
  },
]

export const coursework = [
  { code: 'MUSA 5000', name: 'Spatial Statistics' },
  { code: 'MUSA 5080', name: 'Public Policy Analytics' },
  { code: 'MUSA 5500', name: 'Geospatial Data Science in Python' },
  { code: 'MUSA 6110', name: 'JavaScript Programming for Planners & Designers' },
  { code: 'MUSA 6950', name: 'AI for Urban Sustainability' },
  { code: 'MUSA 8010', name: 'MUSA / Smart Cities Practicum' },
]
