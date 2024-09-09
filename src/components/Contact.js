import React from "react";

import styles from "./Contact.module.css";

import email from "../assets/contact/emailIcon.png";
import linked from "../assets/contact/linkedinIcon.png";
import git from "../assets/contact/githubIcon.png";
export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={email} alt="Email icon" />
          <a href="mailto:myemail@email.com">m.talha2703@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={linked}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/myname">linkedin.com/myname</a>
        </li>
        <li className={styles.link}>
          <img src={git} alt="Github icon" />
          <a href="https://www.github.com/myname">github.com/Talha-glitched</a>
        </li>
      </ul>
    </footer>
  );
};
