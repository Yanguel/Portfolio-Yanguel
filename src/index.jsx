import React from 'react'
import ReactDOM from 'react-dom/client'
import Accueil from './pages/accueil'
import QuiSuisJe from './components/quisuisje'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Accueil />
    <QuiSuisJe />
  </React.StrictMode>
)
