import '../../styles/realisations.css'
import { useRef } from 'react'
import useSlideInOut from '../slideRightIn'

function Realisations() {
  const elementRef = useRef(null)
  useSlideInOut(elementRef)
  return (
    <section id="realisations-Title">
      {/*<img src={Wave2} alt="" className="wave2" />}
      {/* Lié à l'animation slide */}
      <div ref={elementRef} className="slide-in-out titleRealisations">
        <h3> Mes réalisations </h3>
      </div>
      {/*--------------------*/}
      <div className="containerRealisations">
        <div className="real1 size flip-vertical-fwd">
          <div className="card-front">{this.props.front}</div>
          <div className="card-back">{this.props.back}</div>
        </div>
        <div className="real2 size flip-vertical-fwd">
          <div className="card-front">{this.props.front}</div>
          <div className="card-back">{this.props.back}</div>
        </div>
        <div className="real3 size flip-vertical-fwd">
          <div className="card-front">{this.props.front}</div>
          <div className="card-back">{this.props.back}</div>
        </div>
        <div className="real4 size flip-vertical-fwd">
          <div className="card-front">{this.props.front}</div>
          <div className="card-back">{this.props.back}</div>
        </div>
        <div className="real5 size flip-vertical-fwd">
          <div className="card-front">{this.props.front}</div>
          <div className="card-back">{this.props.back}</div>
        </div>
        <div className="real6 size flip-vertical-fwd">
          <div className="card-front">{this.props.front}</div>
          <div className="card-back">{this.props.back}</div>
        </div>
      </div>
    </section>
  )
}
export default Realisations
