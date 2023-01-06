import React from 'react'
import '../../styles/quisuisje.css'
import Wave2 from '../../assets/wavegrey5.svg'
import CV from '../../assets/CVYanguelCornillet.pdf'
function QuiSuisJe() {
  return (
    <section id="quiSuisJe">
      <img src={Wave2} alt="" className="wave2" />
      <div className="containerQuiSuisJe">
        <h2 className="titleQuiSuisJe"> Qui suis-je ? </h2>
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
