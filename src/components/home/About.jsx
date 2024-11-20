import React, { useEffect, useRef, useState } from 'react';
import styles from '../styles/home/About.module.css';

const About = () => {
  const [inView, setInView] = useState({ image: false, content: false });
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  // Intersection Observer Logic
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === imageRef.current && entry.isIntersecting) {
            setInView((prev) => ({ ...prev, image: true }));
          }
          if (entry.target === contentRef.current && entry.isIntersecting) {
            setInView((prev) => ({ ...prev, content: true }));
          }
        });
      },
      {
        threshold: 0.1, // Trigger when at least 10% of the element is visible
      }
    );

    if (imageRef.current) observer.observe(imageRef.current);
    if (contentRef.current) observer.observe(contentRef.current);

    return () => {
      if (imageRef.current) observer.unobserve(imageRef.current);
      if (contentRef.current) observer.unobserve(contentRef.current);
    };
  }, []);

  return (
    <>
      <div className="screen">
        <div className={styles.aboutContainer}>
          {/* Apply animation to the image */}
          <div
            ref={imageRef}
            className={`${styles.aboutImage} ${
              inView.image ? styles.animateFadeInBottom : ''
            }`}
          >
            <img src="/images/aboutImage4.jpg" alt="About Muhammad Afnan" />
          </div>
          {/* Apply animation to the content */}
          <div
            ref={contentRef}
            className={`${styles.aboutContent} ${
              inView.content ? styles.animateFadeInBottom : ''
            }`}
          >
            <div className={styles.heading}>
              <h2>
                Who is{' '}
                <span className={styles.companyColor}>Muhammad Afnan</span>
              </h2>
            </div>
            <div className={styles.para}>
              <p>
                Every great project begins with a spark of curiosity and a refusal to settle for the ordinary. Muhammad Afnan is the embodiment of that spirit—someone who doesn’t just code, but reimagines what’s possible. From a young passion for technology to leading innovative digital solutions, Afnan’s journey is defined by a relentless pursuit of knowledge and a drive to make an impact.
              </p>
              <p>
                With an instinct for turning challenges into opportunities, he’s not just building applications—he’s shaping the future of digital experiences. As the founder of AFNANCODER, Afnan blends expertise in full-stack development with a visionary approach to business, where every project is an exploration of what can be achieved when creativity and technology unite.
              </p>
            </div>
            <div className={styles.CV}>
              <a href="/muhammad afnan.pdf" download>
                <button>DOWNLOAD CV</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr className={styles.lineColor} />
    </>
  );
};

export default About;
