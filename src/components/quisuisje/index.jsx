import '../../styles/quisuisje.css'
import Wave2 from '../../assets/wavegrey5.svg'
import CV from '../../assets/CVYanguelCornillet.pdf'
import SlideOutIn from '../slideOutIn'
// import Slider from '../scroll'

function QuiSuisJe() {
  /* const slideElements = document.querySelectorAll('.slide-element')

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        entry.target.classList.add('slide-element')
      }
    })
  })

  slideElements.forEach((slideElement) => {
    observer.observe(slideElement)
  }) */

  return (
    <section id="quiSuisJe">
      <img src={Wave2} alt="" className="wave2" />
      <div className="containerQuiSuisJe">
        <SlideOutIn
          content={<h2 className="titleQuiSuisJe"> Qui suis-je ? </h2>}
        />

        <p className="pQuiSuisJe">
          Je m'appelle Yanguël Cornillet, j'habite en Maine-et-loire (49).{' '}
          <br />À la suite d'une reconversion professionnelle réussie, j'ai pu
          devenir Développeur web junior avec un diplome RNCP niveau 5.
        </p>
        <a href={CV} download>
          <button className="btnCV"> télécharger mon CV </button>
        </a>
      </div>
    </section>
  )
}

export default QuiSuisJe
