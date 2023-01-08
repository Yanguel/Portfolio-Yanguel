import React, { useState } from 'react'
import '../../styles/btnLight.css'
const App = () => {
  const [isDarkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode)
  }

  return (
    <div className={`app ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
      <p>The background is now {isDarkMode ? 'dark' : 'light'}</p>
    </div>
  )
}

export default App
