import React from 'react'

function Settings({ setshown,setDrk,drk,btn}) {

  // Onclick of darkmode
  const onClicked = () => {
    document.body.classList.toggle('lm')
    btn.current.classList.toggle('active')
    drk?(setDrk(false),localStorage.setItem('drkMode',false)):(setDrk(true),localStorage.setItem('drkMode',true))
    setshown(true)
  }

  // Setting Layout
  return (
    <div className='settings'>
      <h1>Settings</h1>
      <div className="set-list">
        <p>Dark Mode</p>
        <span className='spaner'></span>
        <span ref={btn} onClick={onClicked} className="toggle-switch">
          <span className="toggle-knob"></span>
        </span>
      </div>
    </div>
  )
}

// Export Layout
export default Settings