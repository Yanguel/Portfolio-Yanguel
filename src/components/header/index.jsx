import React from 'react'
import '../../styles/header.css'
import '../textScramble/'

function Header() {
  return (
    <header>
      <nav className="navHeader">
        {' '}
        <ul className="ulHeader">
          <li> Qui suis-je ? </li>
          <li> Réalisations </li>
          <li> Compétences </li>
          <li> Contact </li>
        </ul>
      </nav>
      <div className="containerTextIcone">
        <div className="containerTextHeader">
          <div className="containerTitleHeader">
            <p className="bonjour">Bonjour, </p>
            <section className="animation">
              <div className="first">
                <div>Madame</div>
              </div>
              <div className="second">
                <div>Monsieur</div>
              </div>
            </section>
          </div>
          <p className="textHeader typing-text">
            {' '}
            Je m'appelle Yanguel, <br />
            Je suis développeur intégrateur web et je vais vous présenter dans
            ce portfolio mes réalisations ainsi que mes compétences dans le
            développement web. <br />
            Je vous souhaite une bonne visite.
          </p>
        </div>

        <div className="iconeFlecheHeader slide-bottom">
          <i className="fa-solid fa-circle-arrow-down fa-xl arrow"></i>
        </div>
      </div>
    </header>
  )
}

export default Header
