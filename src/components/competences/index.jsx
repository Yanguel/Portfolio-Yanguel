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
import '../../styles/css/competences.css'
import Bootstrap from '../../assets/bootstrap.png'
import ProgressBar from 'react-animated-progress-bar'
// import SlideOutIn from '../slideOutIn'

import { useRef } from 'react'
import useSlideInOut from '../slideRightIn'

function Competences() {
  const elementRef = useRef(null)
  useSlideInOut(elementRef)

  const myRef = document.querySelector('#containuerCompetences')
  return (
    <section id="containerCompetences">
      {/* Lié à l'animation slide */}
      <div ref={elementRef} className="slide-in-out titleCompetences">
        <h2> Mes Compétences </h2>
      </div>
      {/* ---------------------*/}
      <div className="competences">
        <div className="containerLangage overFlash">
          <p className="titleLangage">Langages de programmation</p>
          <div className="totalLangage">
            <div className="html centerTotal">
              <img src={Html} alt="logo Html" className="sizeLogo"></img>
              <span className="littleMargin">Html </span>
              <ProgressBar
                width="250px"
                height="10px"
                fontColor="#E44D26"
                trackWidth="10"
                percentage="90"
                trackPathColor="grey"
                trackBorderColor="black"
                hollowBackgroundColor="black"
                defColor={{
                  fair: 'orangered',
                  good: 'yellow',
                  excellent: 'green',
                  poor: 'red',
                }}
                scrollArea={myRef}
              />
            </div>
            <div className="css centerTotal">
              <img src={Css} alt="logo Css" className="sizeLogo"></img>
              <span className="littleMargin">Css </span>
              <ProgressBar
                width="250px"
                height="10px"
                fontColor="#214BE5"
                trackWidth="10"
                percentage="90"
                trackPathColor="grey"
                trackBorderColor="black"
                hollowBackgroundColor="black"
                defColor={{
                  fair: 'orangered',
                  good: 'yellow',
                  excellent: 'green',
                  poor: 'red',
                }}
                scrollArea={myRef}
              />
            </div>
            <div className="javascript centerTotal">
              <img
                src={Javascript}
                alt="logo Javascript"
                className="sizeLogo"
              ></img>
              <span className="littleMargin">Javascript </span>
              <ProgressBar
                width="250px"
                height="10px"
                fontColor="#E5C62F"
                trackWidth="10"
                percentage="70"
                trackPathColor="grey"
                trackBorderColor="black"
                hollowBackgroundColor="black"
                defColor={{
                  fair: 'orangered',
                  good: 'yellow',
                  excellent: 'green',
                  poor: 'red',
                }}
                scrollArea={myRef}
              />
            </div>
          </div>
        </div>

        <div className="framework overFlash">
          <p className="titleFramework"> Framework</p>
          <div className="totalFrameworks">
            <div className="react centerTotal">
              <img src={React} alt="logo React" className="sizeLogo"></img>
              <span className="littleMargin"> React </span>
              <ProgressBar
                width="250px"
                height="10px"
                fontColor="#53C2E1"
                trackWidth="10"
                percentage="90"
                trackPathColor="grey"
                trackBorderColor="black"
                hollowBackgroundColor="black"
                defColor={{
                  fair: 'orangered',
                  good: 'yellow',
                  excellent: 'green',
                  poor: 'red',
                }}
                scrollArea={myRef}
              />
            </div>
            <div className="sass centerTotal">
              <img src={Sass} alt="logo Sass" className="sizeLogo"></img>
              <span className="littleMargin">Sass</span>
              <ProgressBar
                width="250px"
                height="10px"
                fontColor="#D76698"
                trackWidth="10"
                percentage="90"
                trackPathColor="grey"
                trackBorderColor="black"
                hollowBackgroundColor="black"
                defColor={{
                  fair: 'orangered',
                  good: 'yellow',
                  excellent: 'green',
                  poor: 'red',
                }}
                scrollArea={myRef}
              />
            </div>
            <div className="bootstrap centerTotal">
              <img
                src={Bootstrap}
                alt="logo Bootstrap"
                className="sizeLogo"
              ></img>
              <span className="littleMargin">Bootstrap</span>
              <ProgressBar
                width="250px"
                height="10px"
                fontColor="rgb(125 89 182)"
                trackWidth="10"
                percentage="40"
                trackPathColor="grey"
                trackBorderColor="black"
                hollowBackgroundColor="black"
                defColor={{
                  fair: 'orangered',
                  good: 'yellow',
                  excellent: 'green',
                  poor: 'red',
                }}
                scrollArea={myRef}
              />
            </div>
          </div>
        </div>
        <div className="back-end overFlash">
          <p className="titleBack-end">Logiciel Back-end</p>
          <div className="totalBack-end">
            <div className="postman centerTotal">
              <img
                src={Postman}
                alt="logo Postman"
                className="sizeLogo postmanLogo"
              ></img>
              <span className="littleMargin">Postman </span>
              <ProgressBar
                width="250px"
                height="10px"
                fontColor="#FD6C35"
                trackWidth="10"
                percentage="80"
                trackPathColor="grey"
                trackBorderColor="black"
                hollowBackgroundColor="black"
                defColor={{
                  fair: 'orangered',
                  good: 'yellow',
                  excellent: 'green',
                  poor: 'red',
                }}
                scrollArea={myRef}
              />
            </div>
            <div className="insomnia centerTotal">
              <img
                src={Insomnia}
                alt="logo Insomnia"
                className="sizeLogo"
              ></img>
              <span className="littleMargin">Insomnia </span>
              <ProgressBar
                width="250px"
                height="10px"
                fontColor="#5E00D2"
                trackWidth="10"
                percentage="80"
                trackPathColor="grey"
                trackBorderColor="black"
                hollowBackgroundColor="black"
                defColor={{
                  fair: 'orangered',
                  good: 'yellow',
                  excellent: 'green',
                  poor: 'red',
                }}
                scrollArea={myRef}
              />
            </div>
            <div className="nodejs centerTotal">
              <img
                src={NodeJs}
                alt="logo NodeJs"
                className="sizeLogo node"
              ></img>
              <span className="littleMargin">Node.js </span>
              <ProgressBar
                width="250px"
                height="10px"
                fontColor="#8AC800"
                trackWidth="10"
                percentage="70"
                trackPathColor="grey"
                trackBorderColor="black"
                hollowBackgroundColor="black"
                defColor={{
                  fair: 'orangered',
                  good: 'yellow',
                  excellent: 'green',
                  poor: 'red',
                }}
                scrollArea={myRef}
              />
            </div>
            <div className="mongoDB centerTotal">
              <img src={Mongodb} alt="logo MongoDb" className=" mongodb"></img>
              <span className="littleMargin">MongoDB</span>
              <ProgressBar
                width="250px"
                height="10px"
                fontColor="#67AC54"
                trackWidth="10"
                percentage="70"
                trackPathColor="grey"
                trackBorderColor="black"
                hollowBackgroundColor="black"
                defColor={{
                  fair: 'orangered',
                  good: 'yellow',
                  excellent: 'green',
                  poor: 'red',
                }}
                scrollArea={myRef}
              />
            </div>
          </div>
        </div>
        <div className="containerAutres overFlash">
          <p className="titleAutres">Logiciel autres</p>
          <div className="totalAutre">
            <div className="figma centerTotal">
              <img src={Figma} alt="logo Figma" className="sizeLogo"></img>
              <span className="littleMargin"> Figma </span>
              <ProgressBar
                width="250px"
                height="10px"
                fontColor="white"
                trackWidth="10"
                percentage="100"
                trackPathColor="grey"
                trackBorderColor="black"
                hollowBackgroundColor="black"
                defColor={{
                  fair: 'orangered',
                  good: 'yellow',
                  excellent: 'green',
                  poor: 'red',
                }}
                scrollArea={myRef}
              />
            </div>
            <div className="github centerTotal">
              <img
                src={Github}
                alt="logo Github"
                className="sizeLogo githubLogo"
              ></img>
              <span className="littleMargin">Github </span>
              <ProgressBar
                width="250px"
                height="10px"
                fontColor="black"
                trackWidth="10"
                percentage="90"
                trackPathColor="grey"
                trackBorderColor="black"
                hollowBackgroundColor="white"
                defColor={{
                  fair: 'orangered',
                  good: 'yellow',
                  excellent: 'green',
                  poor: 'red',
                }}
                scrollArea={myRef}
              />
            </div>
            <div className="seo centerTotal">
              <img src={SeoLogo} alt="logo seo" className="sizeLogo"></img>
              <span className="littleMargin">Marketing Seo</span>
              <ProgressBar
                width="250px"
                height="10px"
                fontColor="#9F2525"
                trackWidth="10"
                percentage="80"
                trackPathColor="grey"
                trackBorderColor="black"
                hollowBackgroundColor="black"
                defColor={{
                  fair: 'orangered',
                  good: 'yellow',
                  excellent: 'green',
                  poor: 'red',
                }}
                scrollArea={myRef}
              />
            </div>
            <div className="photoshop centerTotal">
              <img
                src={Photoshop}
                alt="logo Photoshop"
                className="sizeLogo"
              ></img>
              <span className="littleMargin">Photoshop</span>
              <ProgressBar
                width="250px"
                height="10px"
                fontColor="#23BFF1"
                trackWidth="10"
                percentage="55"
                trackPathColor="grey"
                trackBorderColor="black"
                hollowBackgroundColor="black"
                defColor={{
                  fair: 'orangered',
                  good: 'yellow',
                  excellent: 'green',
                  poor: 'red',
                }}
                scrollArea={myRef}
              />
            </div>
            <div className="wordpress centerTotal">
              <img
                src={WordPress}
                alt="logo Wordpress"
                className="sizeLogo wordPressLogo"
              ></img>
              <span className="littleMargin">Wordpress </span>
              <ProgressBar
                width="250px"
                height="10px"
                fontColor="#2A8DB1"
                trackWidth="10"
                percentage="40"
                trackPathColor="grey"
                trackBorderColor="black"
                hollowBackgroundColor="black"
                defColor={{
                  fair: 'orange',
                  good: 'yello',
                  excellent: 'green',
                  poor: 'red',
                }}
                scrollArea={myRef}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Competences
