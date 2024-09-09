import React from 'react'
import hero from "../assets/hero/heroImage.png";
import styles from "./hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h2 className={styles.title}>Hi I am Talha</h2>
            <p className={styles.description}>I am a full stack Developer wroking in MERN stack with over 2 years of experience Read out if you'd like to learn more! </p>
            <a className={styles.contactBTN} href="mailto:m.talha2703@gmail.com"> Contact Me</a>
        </div>
        <img  className={styles.heroimg} src={hero} alt="Image of Hero" />
        <div className={styles.topblur} />
        <div className={styles.bottomblur }></div>
    </section>
  )
}

export default Hero
