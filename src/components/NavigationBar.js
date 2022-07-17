import React from 'react'
import logo from '../Images/HeaderLeft (1).png'
import { Link } from "react-router-dom";

export default function NavigationBar() {
  return (
    <div>
        <nav class="navbar mt-2" style={{backgroundColor: "black"}}>
        <div class="container">
            <Link class="navbar-brand" to="/" >
            <img src={logo} alt="loading" width="90" height="34" />
            </Link>
        </div>
        </nav>
    </div>
  )
}
