import '../../styles/realisations.css'
import SlideOutIn from '../slideOutIn'

function Realisations() {
  return (
    <section id="realisations-Title">
      <SlideOutIn
        content={<h4 className="titleRealisations"> Mes réalisations</h4>}
      />

      <div className="containerRealisations">
        <div className="real1 size flip-vertical-fwd"></div>
        <div className="real2 size flip-vertical-fwd"></div>
        <div className="real3 size flip-vertical-fwd"></div>
        <div className="real4 size flip-vertical-fwd"></div>
        <div className="real5 size flip-vertical-fwd"></div>
        <div className="real6 size flip-vertical-fwd"></div>
      </div>
    </section>
  )
}
export default Realisations
