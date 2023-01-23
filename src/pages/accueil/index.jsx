import Competences from '../../components/competences'
import Contact from '../../components/contact'
import QuiSuisJe from '../../components/quisuisje'
import Realisations from '../../components/realisations'
function Acceuil() {
  return (
    <section id="totalHomePage">
      <QuiSuisJe />
      <Competences />
      <Realisations />
      <Contact />
    </section>
  )
}

export default Acceuil
