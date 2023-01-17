import '../../styles/css/quisuisje.css'
import CV from '../../assets/CVYanguelCornillet.pdf'
import PhotoCv from '../../assets/CVYanguelCornillet.png'
// import Slider from '../scroll'
import { useRef } from 'react'
import useSlideInOut from '../slideRightIn'

function QuiSuisJe() {
  const elementRef = useRef(null)
  useSlideInOut(elementRef)
  return (
    <section id="quiSuisJe">
      {/*<img src={Wave2} alt="" className="wave2" />*/}
      <div className="containerQuiSuisJe">
        {/* Lié à l'animation slide */}
        <div ref={elementRef} className="slide-in-out titleQuiSuisJe">
          <h1> Qui suis-je ?</h1>
        </div>
        {/* --------------------*/}
        <p className="pQuiSuisJe">
          Je m’appelle <strong>Yanguël Cornillet</strong>, je suis{' '}
          <strong>développeur Web junior </strong> et j'habite dans le
          Maine-et-Loire (49). <br />
          J'ai effectué une reconversion professionnelle dans le{' '}
          <strong>Développement Web</strong> chez OpenClassrooms pour consolider
          mes connaissances et devenir un développeur web fullstack, domaine qui
          m’intéresse depuis de nombreuses années. <br />
          Mes années d'expériences dans le commerce m'ont permis d’acquérir des
          compétences importantes telles que l’
          <strong>organisation</strong>, la
          <strong> ponctualité</strong> ainsi que des qualités relationnelles
          utile lors d'un projet en groupe comme l'
          <strong>écoute</strong> ou bien la <strong>remise en question</strong>
          . <br />
          Je suis <strong>ambitieux et enthousiaste</strong> à l'idée de mettre
          mes compétences et mon savoir-faire au service de projets
          passionnants. <br />
          Je vous invite à découvrir mes projets, qui vous donneront un aperçu
          de mon parcours et de mes compétences.
        </p>
        <a href={CV} download>
          <button className="btnCV"> télécharger mon CV </button>
        </a>
      </div>
      <div className="CV">
        <img src={PhotoCv} alt=" Visuel du CV " className="photoCv"></img>
      </div>
      <div className=" iconeFlecheQuiSuisJe slide-bottom">
        <i className="fa-solid fa-circle-arrow-down fa-xl arrow"></i>
      </div>
    </section>
  )
}

export default QuiSuisJe
