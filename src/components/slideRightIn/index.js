import '../../styles/css/slideOutIn.css'

import { useEffect } from 'react'

function useSlideInOut(ref) {
  useEffect(() => {
    function handleScroll() {
      const element = ref.current
      const elementRect = element.getBoundingClientRect()
      const elementInView =
        elementRect.top >= 0 && elementRect.bottom <= window.innerHeight

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
  }, [ref])
}

export default useSlideInOut
