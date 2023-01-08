import '../../styles/contact.css'
import Linkedin from '../../assets/linkedinLogo.png'
import Github from '../../assets/github1.png'
import { useRef } from 'react'
import useSlideInOut from '../slideRightIn'
import Wave2 from '../../assets/wavegrey5.svg'
function Contact() {
  const elementRef = useRef(null)
  useSlideInOut(elementRef)
  return (
    <section id="contact">
      {/*<img src={Wave2} alt="" className="wave2" />*/}
      <div className="containerContact">
        <div className="textAndEmail">
          {/* Lié à l'animation slide */}
          <div ref={elementRef} className="slide-in-out titleContact">
            <h4> Me contacter</h4>
          </div>
          {/* --------------- */}
          <p className="pContact">
            {' '}
            Ci dessous vous trouverez mon Email personnel afin de me joindre
            ainsi que mon Linkedin et mon GitHub.
          </p>
          <p>
            <i className="fa-regular fa-envelope fa-xl fa-beat"></i>
          </p>
          <a href="mailto:yanguelcornillet@yahoo.com">
            <button className="btnEmail">Yanguelcornillet@yahoo.com</button>
          </a>
          <p className="trouvezMoi">Trouvez moi sur :</p>
        </div>

        <div className="socialMedia">
          <a href="https://www.linkedin.com/in/yanguel-cornillet-8a55281b5/">
            <div className="linkedin">
              <img
                src={Linkedin}
                alt="Logo Linkedin"
                className="logoLinkedin"
              ></img>
              <span>Linkedin</span>
            </div>
          </a>
          <a href="https://github.com/Yanguel">
            <div className="githubContact">
              <img src={Github} alt="Logo Github" className="logoGithub"></img>
              <span>Github</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
