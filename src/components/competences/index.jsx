import Html from '../../assets/html.png'
import Css from '../../assets/css.png'
import Figma from '../../assets/figma.png'
import Github from '../../assets/github.png'
import Insomnia from '../../assets/insomnia.png'
import Javascript from '../../assets/js.png'
import Mongodb from '../../assets/mongoDB.png'
import NodeJs from '../../assets/nodeJs.png'
import Postman from '../../assets/postman.png'
import React from '../../assets/react.png'
import Sass from '../../assets/sass.png'
import Photoshop from '../../assets/photoshop.png'
import WordPress from '../../assets/WordpressLogo.png'
import SeoLogo from '../../assets/seoLogo.png'
import '../../styles/competences.css'
import Bootstrap from '../../assets/bootstrap.png'
// import SlideOutIn from '../slideOutIn'

import { useRef } from 'react'
import useSlideInOut from '../slideRightIn'

function Competences() {
  const elementRef = useRef(null)
  useSlideInOut(elementRef)

  return (
    <section id="containerCompetences">
      {/*<img src={Wave2} alt="" className="wave2" />}
      {/* Lié à l'animation slide */}
      <div ref={elementRef} className="slide-in-out titleCompetences">
        <h2> Mes Compétences </h2>
      </div>
      {/* ---------------------*/}
      <div className="competences">
        <div className="langageAndFrameworks">
          <div className="containerLangage">
            <p className="titleLangage">Langages de programmation</p>
            <div className="totalLangage">
              <div className="html centerTotal">
                <img src={Html} alt="logo Html" className="sizeLogo"></img>
                <span className="littleMargin">Html </span>

                <p>80 %</p>
              </div>
              <div className="css centerTotal">
                <img src={Css} alt="logo Css" className="sizeLogo"></img>
                <span className="littleMargin">Css </span>

                <p>65%</p>
              </div>
              <div className="javascript centerTotal">
                <img
                  src={Javascript}
                  alt="logo Javascript"
                  className="sizeLogo"
                ></img>
                <span className="littleMargin">Javascript </span>

                <p>60%</p>
              </div>
            </div>
          </div>
          <div className="framework">
            <p className="titleFramework"> Framework</p>
            <div className="totalFrameworks">
              <div className="react centerTotal">
                <img src={React} alt="logo React" className="sizeLogo"></img>
                <span className="littleMargin"> React </span>

                <p>90%</p>
              </div>
              <div className="sass centerTotal">
                <img src={Sass} alt="logo Sass" className="sizeLogo"></img>
                <span className="littleMargin">Sass</span>

                <p>90%</p>
              </div>
              <div className="bootstrap centerTotal">
                <img
                  src={Bootstrap}
                  alt="logo Bootstrap"
                  className="sizeLogo"
                ></img>
                <span className="littleMargin">Bootstrap</span>

                <p>60%</p>
              </div>
            </div>
          </div>
        </div>
        <div className="containerAutres">
          <p className="titleAutres">Logiciel autres</p>
          <div className="totalAutre">
            <div className="nodejs centerTotal">
              <img
                src={NodeJs}
                alt="logo NodeJs"
                className="sizeLogo node"
              ></img>
              <span className="littleMargin">Node.js </span>

              <p>60%</p>
            </div>
            <div className="photoshop centerTotal">
              <img
                src={Photoshop}
                alt="logo Photoshop"
                className="sizeLogo"
              ></img>
              <span className="littleMargin">Photoshop</span>

              <p>60%</p>
            </div>
            <div className="postman centerTotal">
              <img
                src={Postman}
                alt="logo Postman"
                className="sizeLogo postmanLogo"
              ></img>
              <span className="littleMargin">Postman </span>
              <p>80%</p>
            </div>
            <div className="figma centerTotal">
              <img src={Figma} alt="logo Figma" className="sizeLogo"></img>
              <span className="littleMargin"> Figma </span>
              <p>90%</p>
            </div>
            <div className="insomnia centerTotal">
              <img
                src={Insomnia}
                alt="logo Insomnia"
                className="sizeLogo"
              ></img>
              <span className="littleMargin">Insomnia </span>

              <p>80%</p>
            </div>
            <div className="mongoDB centerTotal">
              <img
                src={Mongodb}
                alt="logo MongoDb"
                className="sizeLogo mongodb"
              ></img>
              <span className="littleMargin">MongoDB</span>

              <p>80%</p>
            </div>
            <div className="github centerTotal">
              <img
                src={Github}
                alt="logo Github"
                className="sizeLogo githubLogo"
              ></img>
              <span className="littleMargin">Github </span>

              <p>90%</p>
            </div>
            <div className="seo centerTotal">
              <img src={SeoLogo} alt="logo seo" className="sizeLogo"></img>
              <span className="littleMargin">Marketing Seo</span>

              <p>80%</p>
            </div>
            <div className="wordpress centerTotal">
              <img
                src={WordPress}
                alt="logo Wordpress"
                className="sizeLogo wordPressLogo"
              ></img>
              <span className="littleMargin">Wordpress </span>
              <p>60%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Competences
