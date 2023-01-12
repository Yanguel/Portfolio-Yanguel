import '../../styles/realisations.css'
import { useRef } from 'react'
import useSlideInOut from '../slideRightIn'
import '../../styles/rotateCard.css'
import GitHub from '../../assets/github.png'
function Realisations() {
  const elementRef = useRef(null)
  useSlideInOut(elementRef)
  return (
    <section id="realisations-Title">
      {/*<img src={Wave2} alt="" className="wave2" />}
      {/* Lié à l'animation slide */}
      <div ref={elementRef} className="slide-in-out titleRealisations">
        <h3> Mes réalisations </h3>
      </div>
      {/*--------------------*/}
      <div className="containerRealisations overFlash">
        <div class="card">
          <div class="card-inner">
            <div class="card-front before centerImg sizeDiv">
              <div class="card-content">
                <h2>Oty's Barber</h2>
                <p>Site vitrine</p>
                <p>REACT, HTML, CSS, JS </p>
              </div>
            </div>
            <div class="card-back sizeDiv margin">
              <div class="card-top">
                <div class="card-image"></div>
              </div>
              <div class="card-content-back">
                <p>
                  - Création du design. <br />
                  - Mise en place du pattern de couleur. <br />- Récupération
                  local de photo.
                </p>
                <a
                  href="https://github.com/Yanguel/Otys-Barber"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={GitHub} alt="Github" className="githubLogo"></img>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-inner">
            <div class="card-front2 before centerImg sizeDiv">
              <div class="card-content2">
                <h2>Kasa</h2>
                <p>Application web de location immobilière</p>
                <p>React, API, HTML, CSS, JS</p>
              </div>
            </div>
            <div class="card-back2 sizeDiv margin">
              <div class="card-top">
                <div class="card-image2"></div>
              </div>
              <div class="card-content-back">
                <p>
                  - Intégration d'une maquette Figma <br />
                  - Utilisation d'un format JSON comme base de donnée <br />-
                  Création d'animation (Carousel / Accordion ...)
                </p>
                <a
                  href="https://github.com/Yanguel/Projet_7_Kasa_Location"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={GitHub} alt="Github" className="githubLogo"></img>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-inner">
            <div class="card-front3 before centerImg sizeDiv">
              <div class="card-content3">
                <h2>Piiquante</h2>
                <p>Application d'avis gastronomiques</p>
                <p>MongoDB, NodeJS, HTML, CSS, JS</p>
              </div>
            </div>
            <div class="card-back3 sizeDiv margin">
              <div class="card-top">
                <div class="card-image3"></div>
              </div>
              <div class="card-content-back">
                <p>
                  - Création d'une Api <br />
                  - Création d'un Front-end <br />
                  - Création de compte et suppression <br />- Mise en place de
                  sécurité de connection.
                </p>
                <a
                  href="https://github.com/Yanguel/Projet_6_Cornillet_Yanguel"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={GitHub} alt="Github" className="githubLogo"></img>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-inner">
            <div class="card-front4 before centerImg sizeDiv ">
              <div class="card-content4">
                <h2>Kanap</h2>
                <p>Site E-Commerce</p>
                <p>NodeJS, HTML, CSS, JS</p>
              </div>
            </div>
            <div class="card-back4 sizeDiv margin">
              <div class="card-top">
                <div class="card-image4"></div>
              </div>
              <div class="card-content-back">
                <p>
                  - Intégration d'une page E-commerce. <br />
                  - Récupération d'éléments venant d'une API <br />- Création
                  d'un panier avec calcul total et suppression. <br />-
                  Utilisation du localStorage
                </p>
                <a
                  href="https://github.com/Yanguel/Kanap-livrable5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={GitHub} alt="Github" className="githubLogo"></img>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-inner">
            <div class="card-front5 before centerImg sizeDiv">
              <div class="card-content5">
                <h2>Ohmyfood</h2>
                <p>Site de commande de menu au restaurant.</p>
                <p>HTML, CSS, SASS</p>
              </div>
            </div>
            <div class="card-back5 sizeDiv margin">
              <div class="card-top">
                <div class="card-image5"></div>
              </div>
              <div class="card-content-back">
                <p>
                  - Intégration d'une page web <br />
                  - Création de plusieurs animation <br />- Utilisation de Sass{' '}
                </p>
                <a
                  href="https://github.com/Yanguel/Ohmyfood-Projet-3GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={GitHub} alt="Github" className="githubLogo"></img>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-inner">
            <div class="card-front6 before centerImg sizeDiv ">
              <div class="card-content6 ">
                <h2>Panthère</h2>
                <p>Agence de web design</p>
                <p>HTML, CSS, JS</p>
              </div>
            </div>
            <div class="card-back6  sizeDiv margin">
              <div class="card-top">
                <div class="card-image6"></div>
              </div>
              <div class="card-content-back">
                <p>
                  - Optimisation d'un site web existant <br />
                  - Amélioration de l'accessibilité (Couleurs/ Déplacement
                  clavier) <br />- Amélioration du SEO
                </p>
                <a
                  href="https://github.com/Yanguel/Projet-4-Site-La-Panthere-modifier"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={GitHub} alt="Github" className="githubLogo"></img>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Realisations
