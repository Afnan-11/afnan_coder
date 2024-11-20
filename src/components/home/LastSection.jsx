import React from 'react'
import styles from '../styles/home/LastSection.module.css'
const LastSection = () => {
  return (
    <>
      <div className='screen'>
        <div className={styles.lastsectionContainer}>
          <div className={styles.title}>
            <h4>Muhammad Afnan</h4>
            <p className={styles.fullstack}>Full Stack JavaScript Engineer</p>
            <p className={styles.desc}>
              I am available for freelance work. Connect with me via and call in
              to my account.
            </p>
          </div>
          <div className={styles.findContact}>
            <div className={styles.phoneNumber}>
              <span className={styles.fullstack}>Phone:</span>
              <p className={styles.num}>+92 314 408 7039</p>
            </div>
            <div className={styles.email}>
              <span className={styles.fullstack}>Email:</span>
              <p className={styles.num}>talktoafnanali@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LastSection
