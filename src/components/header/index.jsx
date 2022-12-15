import React from 'react'
import '../../styles/header.css'

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
        <div>
          <h1 className="titleHeader">
            Bonjour, <br />
            <span className="textHeader">
              {' '}
              Je m'appelle <stong className="name">
                Cornillet Yanguel
              </stong>, <br />
              Je suis développeur intégrateur web et je vais te présenter dans
              ce portfolio mes réalisations ainsi que mes compétences dans le
              développement web. <br />
              Je vous souhaite une bonne visite.
            </span>
          </h1>
        </div>
        <div className="iconeFlecheHeader slide-bottom">
          <i class="fa-solid fa-circle-arrow-down fa-xl arrow"></i>
        </div>
      </div>
    </header>
  )
}

export default Header
