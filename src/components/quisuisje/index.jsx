import '../../styles/quisuisje.css'
import Wave2 from '../../assets/wavegrey5.svg'
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
          Je m'appelle Yanguël Cornillet, j'habite en Maine-et-loire (49).{' '}
          <br />À la suite d'une reconversion professionnelle réussie, j'ai pu
          devenir Développeur web junior avec un diplome RNCP niveau 5.
        </p>
        <a href={CV} download>
          <button className="btnCV"> télécharger mon CV </button>
        </a>
      </div>
      <div className="CV">
        <img src={PhotoCv} alt=" Visuel du CV " className="photoCv"></img>
      </div>
    </section>
  )
}

export default QuiSuisJe
