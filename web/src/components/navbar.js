import React from 'react'
import { NavLink } from 'react-router-dom'
import wemunityLogoDark from '../assets/wemunity-icon-dark.svg'
import wemunityLogoLight from '../assets/wemunity-icon-light.svg'
import menuBarsLight from '../assets/menu-bars-light.svg'
import menuBarsDark from '../assets/menu-bars-dark.svg'

export default function NavBar(props) {
   const theme = props.theme === "dark" ? "dark" : "light"
   return (
      <div className={`navbar ${theme}`}>
         {/* <img
            src={props.theme === "dark" ? menuBarsLight : menuBarsDark }
            alt="Menu Bars"
         /> */}
         <NavLink to={"/"} className="navbar__logo navbar__link">
            <img
               src={props.theme === "dark" ? wemunityLogoLight : wemunityLogoDark}
               alt="WeMunity Logo"
            />
            <h2 className={`navbar__link ${theme}`}>Wemunity project</h2>
         </NavLink>
         <nav className="navbar__links">
            <NavLink to={"/about"} className={`navbar__link ${props.location.pathname === "/about" && "bold"} ${theme}`}>About</NavLink>
            <NavLink to={"/press"} className={`navbar__link ${props.location.pathname === "/press" && "bold"} ${theme}`}>Press</NavLink>
            <NavLink to={"/partners"} className={`navbar__link  ${props.location.pathname === "/partners" && "bold"} ${theme}`}>Partners and Support</NavLink>
            <NavLink to={"/story"} className={`navbar__link ${props.location.pathname === "/story" && "bold"} ${theme}`}>The Story</NavLink>
            <NavLink to={"/platform"} className={`navbar__link ${props.location.pathname === "/platform" && "bold"} ${theme}`}>The Platform</NavLink>
         </nav>
      </div>
   )
}
