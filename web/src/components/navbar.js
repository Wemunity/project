import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import wemunityLogoDark from '../assets/wemunity-icon-dark.svg'
import wemunityLogoLight from '../assets/wemunity-icon-light.svg'
import menuBarsLight from '../assets/menu-bars-light.svg'
import menuBarsDark from '../assets/menu-bars-dark.svg'

export default function NavBar(props) {
   const [menuOpen, setMenuOpen] = useState(false)
   const theme = props.theme === "dark" ? "dark" : "light"
   return (
      <div className={`navbar ${theme}`}>
         <SideBar theme={theme} menuOpen={menuOpen} toggleMenu={() => setMenuOpen(!menuOpen)} {...props} />
         <img
            src={props.theme === "dark" ? menuBarsLight : menuBarsDark }
            className="navbar__bars"
            alt="Menu Bars"
            onClick={() => setMenuOpen(!menuOpen)}
         />
         <NavLink to={"/"} className="navbar__logo navbar__link">
            <img
               src={props.theme === "dark" ? wemunityLogoLight : wemunityLogoDark}
               alt="WeMunity Logo"
            />
            <h2 className={`navbar__link ${theme}`}>Wemunity project</h2>
         </NavLink>
         <nav className="navbar__links">
            <NavLink to={"/about"} className={`navbar__link ${props.location.pathname === "/about" ? "bold" : ""} ${props.theme}`}>About</NavLink>
            <NavLink to={"/press"} className={`navbar__link ${props.location.pathname === "/press" ? "bold" : ""} ${props.theme}`}>Press</NavLink>
            <NavLink to={"/partners"} className={`navbar__link  ${props.location.pathname === "/partners" ? "bold" : ""} ${props.theme}`}>Partners and Support</NavLink>
            <NavLink to={"/story"} className={`navbar__link ${props.location.pathname === "/story" ? "bold" : ""} ${props.theme}`}>The Story</NavLink>
            <NavLink to={"/platform"} className={`navbar__link ${props.location.pathname === "/platform" ? "bold" : ""} ${props.theme}`}>The Platform</NavLink>
         </nav>
      </div>
   )
}

function SideBar(props) {
   return (
      <React.Fragment>
         <div className={`sidebar ${props.menuOpen ? "opened" : ""} ${props.theme === "dark" ? "dark" : "light"}`}>
            <nav className="navbar__links sidebar__links">
               <NavLink to={"/about"} className={`navbar__link ${props.location.pathname === "/about" ? "bold" : ""} ${props.theme}`}>About</NavLink>
               <NavLink to={"/press"} className={`navbar__link ${props.location.pathname === "/press" ? "bold" : ""} ${props.theme}`}>Press</NavLink>
               <NavLink to={"/partners"} className={`navbar__link  ${props.location.pathname === "/partners" ? "bold" : ""} ${props.theme}`}>Partners and Support</NavLink>
               <NavLink to={"/story"} className={`navbar__link ${props.location.pathname === "/story" ? "bold" : ""} ${props.theme}`}>The Story</NavLink>
               <NavLink to={"/platform"} className={`navbar__link ${props.location.pathname === "/platform" ? "bold" : ""} ${props.theme}`}>The Platform</NavLink>
            </nav>
         </div>
         <div className={`shadow ${props.menuOpen ? "opened" : ""}`} onClick={props.toggleMenu}></div>
      </React.Fragment>
   )
}
