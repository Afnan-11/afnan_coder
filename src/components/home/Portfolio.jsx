import React from 'react'
import styles from '../styles/home/Portfolio.module.css'
const Portfolio = () => {
  return (
    <>
      <div className='screen'>
        <div className={styles.portfolioContainer}>
          <div className={styles.heading}>
            <span>Visit my portfolio and keep your feedback</span>
            <h2>My Portfolio</h2>
          </div>
          <div className={styles.portfolioSection}>
            <a href='https://www.alnafeygroup.com/' target='_blank'>
              <div className={styles.portfolioCard}>
                <div className={styles.portfolioImage}>
                  <img src='/images/alnafy.PNG' alt='' />
                </div>
                <div className={styles.body}>
                  <h4>Al Nafey Group - Design For Real Estate Website</h4>
                </div>
              </div>
            </a>
            <a href='https://celadon-blini-858d52.netlify.app/' target='_blank'>
              <div className={styles.portfolioCard}>
                <div className={styles.portfolioImage}>
                  <img src='/images/Khaadi.PNG' alt='' />
                </div>
                <div className={styles.body}>
                  <h4>Khaadi - Design For E commerce Website</h4>
                </div>
              </div>
            </a>
            <a href='https://www.swisshavenfarmhouses.com/' target='_blank'>
              <div className={styles.portfolioCard}>
                <div className={styles.portfolioImage}>
                  <img src='/images/swisshavan.PNG' alt='' />
                </div>
                <div className={styles.body}>
                  <h4>Swiss Haven Farmhouse - Design For Farmhouse Website</h4>
                </div>
              </div>
            </a>
            <a href='https://fegogioielli.com/' target='_blank'>
              <div className={styles.portfolioCard}>
                <div className={styles.portfolioImage}>
                  <img src='/images/feg.PNG' alt='' />
                </div>
                <div className={styles.body}>
                  <h4>Fego Gioielli - Design For Jewelry designer Website</h4>
                </div>
              </div>
            </a>
            <a href='https://larc.pk/' target='_blank'>
              <div className={styles.portfolioCard}>
                <div className={styles.portfolioImage}>
                  <img src='/images/londonAesthetics.PNG' alt='' />
                </div>
                <div className={styles.body}>
                  <h4>London Aesthetics - Design For Health Care Website</h4>
                </div>
              </div>
            </a>
            <a href='https://www.indigo141.com/' target='_blank'>
              <div className={styles.portfolioCard}>
                <div className={styles.portfolioImage}>
                  <img src='/images/indigo 141.PNG' alt='' />
                </div>
                <div className={styles.body}>
                  <h4>Indigo 141 - Design For Property Website</h4>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <hr className={styles.lineColor}/>
    </>
  )
}

export default Portfolio
