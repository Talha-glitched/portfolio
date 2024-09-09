import React from 'react'
import styles from "./Navbar.module.css";
import { useState } from 'react';
import { getImageUrl } from '../utils';
import menuicon from "../assets/nav/menuIcon.png";
import closeicon from "../assets/nav/closeIcon.png";
const Navbar = () => {
  const [menuOpen, setmenuOpen] = useState(false);
  return (
    <nav className={styles.Navbar}>
      <a className={styles.title} href="/">Portfolio</a>
      <div className={styles.menu}>
        <img className={styles.menuBTN} src={menuOpen ? closeicon : menuicon} alt="Menu Icon"
          onClick={() => setmenuOpen(!menuOpen)} />
        <ul className={`${styles.menuitem} ${menuOpen &&styles.menuOpen}`}
        onClick={()=>setmenuOpen(false)}>

          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
