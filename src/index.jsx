import React from 'react'
import ReactDOM from 'react-dom/client'
import Acceuil from './pages/accueil'
import Header from './components/header'
import Footer from './components/footer'
import './styles/css/racine.css'
import './styles/css/normalize.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Acceuil />} />
    </Routes>
    <Footer />
  </BrowserRouter>
)
