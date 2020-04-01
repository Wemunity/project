import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import wemunityLogoDark from '../assets/wemunity-icon-dark.svg'
import wemunityLogoLight from '../assets/wemunity-icon-light.svg'

export default function NavBar(props) {
  return (
   <div className={`navbar ${props.location.pathname !== "/" ? "light" : "dark"}`}>
      <NavLink to={"/"} className="navbar__logo navbar__link">
         <img
            src={wemunityLogoLight}
            alt="WeMunity Logo"
         />
         <h2 className="navbar__link">Wemunity project</h2>
      </NavLink>
      <nav className="navbar__links">
         <NavLink to={"/about"} className="navbar__link">About</NavLink>
         <NavLink to={"/press"} className="navbar__link">Press</NavLink>
         <NavLink to={"/partners"} className="navbar__link">Partners and Support</NavLink>
         <NavLink to={"/story"} className="navbar__link">The Story</NavLink>
         <NavLink to={"/platform"} className="navbar__link">The Platform</NavLink>
      </nav>
   </div>
 )
}
