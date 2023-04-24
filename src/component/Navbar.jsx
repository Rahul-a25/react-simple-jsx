import React from 'react'
import './navbar.css'
const Navbar = () => {
  return (
    <div className='main'>
         <div className="left">
            <h2>Koding Made Simple</h2>
         </div>
         <div className="right">
            <ul>
                <li className='navchange'>Bootstrap</li>
                <li className='same'>Themes</li>
                <li className='same'>Blog</li>
            </ul>
         </div>
    </div>
  )
}

export default Navbar
