import React from 'react'
import logo from '../Images/HeaderLeft (1).png'

export default function NavigationBar() {
  return (
    <div>
        <nav class="navbar mt-2" style={{backgroundColor: "black"}}>
        <div class="container">
            <a class="navbar-brand" href="#" >
            <img src={logo} alt="" width="90" height="34" />
            </a>
        </div>
        </nav>
    </div>
  )
}
