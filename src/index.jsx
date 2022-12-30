import React from 'react'
import ReactDOM from 'react-dom/client'
import Accueil from './pages/accueil'
import QuiSuisJe from './components/quisuisje'
import Competences from './components/competences'
import Realisations from './components/projets'
import Contact from './components/contact'
import Scroll from './components/scroll'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Scroll />
    <Accueil />
    <QuiSuisJe />
    <Competences />
    <Realisations />
    <Contact />
  </React.StrictMode>
)
