import React from 'react'

const DarkModeToggle = ({isDark,handleToggle}) => {
  // TODO: Implement dark mode toggle logic

  return (
    <button onClick = {handleToggle}>{isDark? "Toggle Light Mode" : "Toggle Dark Mode"}</button>
  )
}

export default DarkModeToggle
