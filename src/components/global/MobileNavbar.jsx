import React from 'react';
import styles from '../styles/global/MobileNavbar.module.css';

const MobileNavbar = ({ menuToggler }) => {
  return (
    <div className={styles.mobileNavbarContainer}>
      <div className={styles.mobileNavLinks}>
        <a href='#about' onClick={menuToggler}>ABOUT</a>
        <a href='#skills' onClick={menuToggler}>SKILLS</a>
        <a href='#services' onClick={menuToggler}>SERVICES</a>
        <a href='#portfolio' onClick={menuToggler}>PORTFOLIO</a>
        <a href='#connect' onClick={menuToggler}>CONTACT</a>
        <button onClick={menuToggler}>CLOSE MENU</button>
      </div>
    </div>
  );
};

export default MobileNavbar;
