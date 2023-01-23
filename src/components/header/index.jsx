import React from 'react'
import Profil from '../../assets/profil.jpeg'
import Loader from '../loader'
import '../../styles/css/header.css'

function Header() {
  return (
    <header>
      <Loader />
      <div className="divProfil">
        <img src={Profil} alt="profil" className="profilHeader" />
      </div>

      <nav className="navHeader">
        {' '}
        <ul className="ulHeader">
          <li>
            <a href="#quiSuisJe" className="navLi">
              {' '}
              Qui suis-je ?{' '}
            </a>
          </li>

          <li>
            <a href="#containerCompetences" className="navLi">
              {' '}
              Compétences{' '}
            </a>
          </li>
          <li>
            <a href="#realisations-Title" className="navLi">
              {' '}
              Réalisations{' '}
            </a>
          </li>
          <li>
            <a href="#contact" className="navLi">
              Contact{' '}
            </a>
          </li>
        </ul>
      </nav>
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
            <strong className="titleHeaderDev">
              {' '}
              Développeur intégrateur web.
            </strong>{' '}
            <p className="presentation">En vous souhaitant une bonne visite.</p>
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
