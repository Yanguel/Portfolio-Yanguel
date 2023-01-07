import React, { useEffect } from 'react'
import '../../styles/slideOutIn.css'
function SlideOutIn(props) {
  const { content } = props
  useEffect(() => {
    function handleScroll() {
      const element = document.querySelector('.slide-in-out')
      const elementRect = element.getBoundingClientRect()
      const elementInView =
        elementRect.top >= 150 && elementRect.bottom <= window.innerHeight

      if (elementInView) {
        element.classList.add('in-view')
      } else {
        element.classList.remove('in-view')
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div>
      <div className="slide-in-out"> {content} </div>
    </div>
  )
}

export default SlideOutIn

//slide-in-out
