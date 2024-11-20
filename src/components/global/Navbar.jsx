import React, { useState } from 'react';
import styles from '../styles/global/Navbar.module.css';
import MobileNavbar from './MobileNavbar';

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const menuToggler = () => {
    setMenu(!menu);
  };

  const handleHireMeClick = () => {
    const whatsappNumber = '923144087039';
    const message = 'Hello Muhammad Afnan, I am interested in hiring you.';
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <>
      <div className={styles.navbarContainer}>
        <div className={styles.logo}>
          <a href="#hero">
          <img src='/images/logo6.jpg' alt='Logo' />
          </a>
        </div>
        <div className={styles.navbarPages}>
          <div className={styles.navPages}>
            <a href='#about'>ABOUT</a>
            <a href='#skills'>SKILLS</a>
            <a href='#services'>SERVICES</a>
            <a href='#portfolio'>PORTFOLIO</a>
            <a href='#connect'>CONTACT</a>
          </div>
          <div className={styles.hireMe}>
            <button onClick={handleHireMeClick}>HIRE ME</button>
          </div>
        </div>
        <div className={styles.menuIcon}>
          <i
            onClick={menuToggler}
            className={`fa-solid fa-bars ${menu ? styles.activeIcon : ''}`}
          ></i>
        </div>
      </div>
      {menu && <MobileNavbar menuToggler={menuToggler} />}
    </>
  );
};

export default Navbar;
