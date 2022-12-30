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
import '../../styles/competences.css'
function Competences() {
  return (
    <section className="containerCompetences">
      <h3 className="titleCompetences"> Mes compétences </h3>
      <div className="competences">
        <div className="containerTechnologies">
          <h4 className="titleTechnologies">Technologies</h4>
          <div className="html">
            <img src={Html} alt="logo Html" className="sizeLogo"></img>
            <span className="littleMargin">Html </span>
            <div className="barre"></div>
            80%
          </div>
          <div className="css">
            <img src={Css} alt="logo Css" className="sizeLogo"></img>
            <span className="littleMargin">Css </span>
            <div className="barre"></div>
            65%
          </div>
          <div className="javascript">
            <img
              src={Javascript}
              alt="logo Javascript"
              className="sizeLogo"
            ></img>
            <span className="littleMargin">Javascript </span>
            <div className="barre"></div>
            60%
          </div>
          <div className="sass">
            <img src={Sass} alt="logo Sass" className="sizeLogo"></img>
            <span className="littleMargin">Sass</span>
            <div className="barre"></div>
            90%
          </div>
          <div className="react">
            <img src={React} alt="logo React" className="sizeLogo"></img>
            <span className="littleMargin"> React </span>
            <div className="barre"></div>
            90%
          </div>
          <div className="nodejs">
            <img src={NodeJs} alt="logo NodeJs" className="sizeLogo node"></img>
            <span className="littleMargin">Node.js </span>
            <div className="barre"></div>
            60%
          </div>
        </div>

        <div className="containerAutres">
          <h4 className="titleAutres">Logiciel autres</h4>
          <div className="photoshop">
            <img
              src={Photoshop}
              alt="logo Photoshop"
              className="sizeLogo"
            ></img>
            <span className="littleMargin">Photoshop</span>
            <div className="barre"></div>
            60%
          </div>
          <div className="postman">
            <img
              src={Postman}
              alt="logo Postman"
              className="sizeLogo postmanLogo"
            ></img>
            <span className="littleMargin">Postman </span>
            <div className="barre"></div>
            80%
          </div>
          <div className="figma">
            <img src={Figma} alt="logo Figma" className="sizeLogo"></img>
            <span className="littleMargin"> Figma </span>
            <div className="barre"></div>
            90%
          </div>
          <div className="insomnia">
            <img src={Insomnia} alt="logo Insomnia" className="sizeLogo"></img>
            <span className="littleMargin">Insomnia </span>
            <div className="barre"></div>
            80%
          </div>
          <div className="mongoDB">
            <img
              src={Mongodb}
              alt="logo MongoDb"
              className="sizeLogo mongodb"
            ></img>
            <span className="littleMargin">MongoDB</span>
            <div className="barre"></div>
            80%
          </div>
          <div className="github">
            <img
              src={Github}
              alt="logo Github"
              className="sizeLogo githubLogo"
            ></img>
            <span className="littleMargin">Github </span>
            <div className="barre"></div>
            90%
          </div>
        </div>
      </div>
    </section>
  )
}

export default Competences
