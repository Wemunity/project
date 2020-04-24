import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import wemunityLogoDark from '../assets/wemunity-icon-dark.svg'
import wemunityLogoLight from '../assets/wemunity-icon-light.svg'
// import facebookLight from '../assets/facebook-light.svg'
import facebookDark from '../assets/facebook-dark.svg'
// import instagramLight from '../assets/instagram-light.svg'
import instagramDark from '../assets/instagram-dark.svg'
// import linkedinLight from '../assets/linkedin-light.svg'
import linkedinDark from '../assets/linkedin-dark.svg'

import facebookLight from '../assets/facebook.svg';
import instagramLight from '../assets/instagram.svg';
import linkedinLight from '../assets/linkedin.svg';

export default function NavBar(props) {
   const [menuOpen, setMenuOpen] = useState(false)
   const theme = props.theme === "dark" ? "dark" : "light"
   return (
      <div className={`navbar ${theme}`}>
         <SideBar theme={theme} menuOpen={menuOpen} toggleMenu={() => setMenuOpen(!menuOpen)} {...props} />
         <div className={`navbar__bars ${menuOpen ? "make-x" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
            <span className={`${theme === "dark" ? "light" : "dark"}`}></span>
            <span className={`${theme === "dark" ? "light" : "dark"}`}></span>
            <span className={`${theme === "dark" ? "light" : "dark"}`}></span>
         </div>
         <NavLink to={"/"} className="navbar__logo navbar__link">
            <img
               src={props.theme === "dark" ? wemunityLogoLight : wemunityLogoDark}
               alt="WeMunity Logo"
            />
            <h2 className={`navbar__link ${theme}`}>Wemunity project</h2>
         </NavLink>
         <nav className="navbar__links">
          <NavLink to={"/story"} className={`navbar__link ${props.location.pathname === "/story" ? "bold" : ""} ${props.theme}`}>The Story</NavLink>
          <NavLink to={"/platform"} className={`navbar__link ${props.location.pathname === "/platform" ? "bold" : ""} ${props.theme}`}>The Platform</NavLink>
          <NavLink to={"/roadmap"} className={`navbar__link ${props.location.pathname === "/roadmap" ? "bold" : ""} ${props.theme}`}>The Roadmap</NavLink>
          <NavLink to={"/partners"} className={`navbar__link  ${props.location.pathname === "/partners" ? "bold" : ""} ${props.theme}`}>Supporters and Partners</NavLink>
          <NavLink to={"/press"} className={`navbar__link ${props.location.pathname === "/press" ? "bold" : ""} ${props.theme}`}>Press</NavLink>
         </nav>
      </div>
   )
}

function SideBar(props) {
   if (props.menuOpen) {
      document.body.style.position = "fixed"
   } else {
      document.body.style.position = "initial"
   }
   return (
      <div className={`sidebar ${props.menuOpen ? "opened" : ""} ${props.theme === "dark" ? "dark" : "light"}`}>
         <nav className="navbar__links sidebar__links">
          <NavLink to={"/story"} className={`navbar__link ${props.location.pathname === "/story" ? "bold" : ""} ${props.theme}`}>The Story</NavLink>
          <NavLink to={"/platform"} className={`navbar__link ${props.location.pathname === "/platform" ? "bold" : ""} ${props.theme}`}>The Platform</NavLink>
          <NavLink to={"/roadmap"} className={`navbar__link ${props.location.pathname === "/roadmap" ? "bold" : ""} ${props.theme}`}>The Roadmap</NavLink>
          <NavLink to={"/partners"} className={`navbar__link  ${props.location.pathname === "/partners" ? "bold" : ""} ${props.theme}`}>Supporters and Partners</NavLink>
          <NavLink to={"/press"} className={`navbar__link ${props.location.pathname === "/press" ? "bold" : ""} ${props.theme}`}>Press</NavLink>
         </nav>
         <div className="sidebar__social">
            <div>
               <a href="https://www.facebook.com/wemunity">
                  <img src={props.theme === "dark" ? facebookLight : facebookDark} alt="facebook"/>
               </a>
               <a href="https://www.instagram.com/wemunity/">
                  <img src={props.theme === "dark" ? instagramLight : instagramDark} alt="instagram"/>
               </a>
               <a href="https://www.linkedin.com/company/wemunity/">
                  <img src={props.theme === "dark" ? linkedinLight : linkedinDark} alt="linkedin"/>
               </a>
            </div>
            <h5>contact@wemunity.org</h5>
         </div>
      </div>
   )
}
