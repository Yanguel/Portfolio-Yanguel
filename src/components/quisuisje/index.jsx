import React from 'react'
import '../../styles/quisuisje.css'
import CV from '../../assets/CVYanguelCornillet.pdf'
function QuiSuisJe() {
  return (
    <section id="containerQuiSuisJe">
      <h2 className="titleQuiSuisJe"> Qui suis-je ? </h2>
      <p>
        Je m'appelle Yanguël Cornillet, j'habite en Maine-et-loire (49). <br />À
        la suite d'une reconversion professionnelle réussie, j'ai pu devenir
        Développeur web junior avec un diplome RNCP niveau 5.
      </p>
      <p>
        Dans la suite de ce portfolio vous allez découvrire mes réalisations
        ainsi que mes compétences dans le développement web.
      </p>
      <a href={CV} download>
        <button className="btnCV"> télécharger mon CV </button>
      </a>
    </section>
  )
}

export default QuiSuisJe
