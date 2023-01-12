import React from 'react'
import Profil from '../../assets/profil.jpeg'
import '../../styles/header.css'
import App from '../btnLight'
import '../../styles/btnLight.css'
function Header() {
  return (
    <header>
      <div className="divProfil">
        <img src={Profil} alt="profil" className="profilHeader" />
      </div>

      <nav className="navHeader">
        {' '}
        <ul className="ulHeader">
          <li>
            <a href="#containerQuiSuisJe " className="navLi">
              {' '}
              Qui suis-je ?{' '}
            </a>
          </li>

          <li>
            <a href="#realisations-Title" className="navLi">
              {' '}
              Réalisations{' '}
            </a>
          </li>
          <li>
            <a href="#containerCompetences" className="navLi">
              {' '}
              Compétences{' '}
            </a>
          </li>
          <li>
            <a href="#contact" className="navLi">
              Contact{' '}
            </a>
          </li>
        </ul>
      </nav>
      <App />
      <div className="containerTextIcone">
        <div className="containerTextHeader">
          <div className="containerTitleHeader">
            <p className="bonjour">Bonjour,</p>
            <section className="animation">
              <div className="first">
                <div>Madame</div>
              </div>
              <div className="second">
                <div>Monsieur</div>
              </div>
              <div className="third">
                <div>Madame</div>
              </div>
            </section>
          </div>
          <div className="textHeader">
            {' '}
            Je suis développeur intégrateur web et je vais vous présenter dans
            ce portfolio : <br />
            <ul className="presentation">
              <li>• Mes réalisations jusqu'à présent. </li>
              <li>• Mes compétences actuelles dans le développement web.</li>
            </ul>
            Je vous souhaite une bonne visite.
          </div>
        </div>
      </div>

      <div className="iconeFlecheHeader slide-bottom">
        <i className="fa-solid fa-circle-arrow-down fa-xl arrow"></i>
      </div>
    </header>
  )
}

export default Header
