import React from 'react'
import styles from '../styles/home/HeroSection.module.css'
import { Typewriter } from 'react-simple-typewriter'
import { Link } from 'react-router-dom'

const HeroSection = () => {

  
  return (
    <>
      <div className='screen'>
        <div className={styles.heroSecionContainer}>
          <div className={styles.leftSection}>
            <div className={styles.inner}>
              <span className={styles.welcome}>WELCOME TO MY WORLD</span>
              <h1>
                Hi, I'm{' '}
                <span style={{ color: '#FF014F' }}>
                  Afnan
                  <br />
                </span>{' '}
                <span>a </span>
                <span style={{ color: 'white', fontWeight: 'bold' }}>
                  <Typewriter
                    words={['Developer.', 'Professional Coder.']}
                    loop={400}
                    typeSpeed={20}
                    deleteSpeed={20}
                    delaySpeed={1500}
                  />
                </span>
              </h1>
            </div>
            <div className={styles.findME}>
              <span>Find With me</span>
              <div className={styles.findIcon}>
                <a 
                  href='https://www.linkedin.com/in/muhammad-afnan-944989212/' 
                  target='_blank' 
                  // rel='noopener noreferrer'
                >
                  <i className='fa-brands fa-linkedin-in'></i>
                </a>
                <a 
                  href='https://github.com/Afnan-11' 
                  target='_blank' 
                  // rel='noopener noreferrer'
                >
                  <i className='fa-brands fa-github'></i>
                </a>
                <a 
                  href='https://www.facebook.com/profile.php?id=100053538712220' 
                  target='_blank' 
                  // rel='noopener noreferrer'
                >
                  <i className='fa-brands fa-facebook'></i>
                </a>
              </div>
            </div>
          </div>
          <div className={styles.rightSection}>
            <img src='/images/banner.PNG' alt='Hero Banner' />
          </div>
        </div>
      </div>
      <hr className={styles.lineColor} />
    </>
  )
}

export default HeroSection
