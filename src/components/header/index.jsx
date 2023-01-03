import React from 'react'
import Profil from '../../assets/profil.jpeg'
import '../../styles/header.css'
import '../textScramble/'

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
            <a href="#containerQuiSuisJe"> Qui suis-je ? </a>
          </li>

          <li>
            <a href="#realisations-Title"> Réalisations </a>
          </li>
          <li>
            <a href="#containerCompetences"> Compétences </a>
          </li>
          <li>
            <a href="#contact">Contact </a>
          </li>
        </ul>
      </nav>
      <div className="containerTextIcone">
        <div className="containerTextHeader slit-in-horizontal">
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
          <p className="textHeader">
            {' '}
            Je suis développeur intégrateur web et je vais vous présenter dans
            ce portfolio mes réalisations ainsi que mes compétences actuels dans
            le développement web. <br />
            Je vous souhaite une bonne visite.
          </p>
        </div>
      </div>

      <div className="iconeFlecheHeader slide-bottom">
        <i className="fa-solid fa-circle-arrow-down fa-xl arrow"></i>
      </div>
    </header>
  )
}

export default Header
