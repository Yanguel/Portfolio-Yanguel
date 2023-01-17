import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/header'
import QuiSuisJe from './components/quisuisje'
import Competences from './components/competences'
import Realisations from './components/realisations'
import Contact from './components/contact'
import Footer from './components/footer'
import './styles/css/racine.css'
import './styles/css/normalize.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Header />
    <QuiSuisJe />
    <Competences />
    <Realisations />
    <Contact />
    <Footer />
  </React.StrictMode>
)
