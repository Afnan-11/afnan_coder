import React from 'react'
import styles from '../styles/home/Services.module.css'
const Services = () => {
  return (
    <>
      <div className='screen'>
        <div className={styles.servicesContainer}>
          <div className={styles.heading}>
            <span>Features</span>
            <h2>Our Services</h2>
          </div>
          <div className={styles.services}>
            <div className={styles.serviceCard}>
              <div className={styles.serviceCardHover}>
                <div className={styles.serviceImage}>
                  <img src='/images/coding.png' alt='' />
                </div>
                <div className={styles.content}>
                  <h4 className={styles.title}>Custom Website Development</h4>
                  <p className={styles.desc}>
                    Unlock the full potential of your business with a
                    custom-built website that’s more than just a digital
                    presence. We create cutting-edge, responsive designs
                    tailored to captivate your audience, drive engagement, and
                    deliver results. With us, your website becomes a powerful
                    tool for growth and success.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceCardHover}>
                <div className={styles.serviceImage}>
                  <img src='/images/svg.png' alt='' />
                </div>
                <div className={styles.content}>
                  <h4 className={styles.title}>Mobile APP Development </h4>
                  <p className={styles.desc}>
                    Revolutionize how you connect with your audience through
                    intuitive and feature-rich mobile apps. We deliver apps that
                    combine sleek design, seamless functionality, and scalable
                    performance from concept to launch. Whether for iOS,
                    Android, or both, we turn your vision into an appealing app.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceCardHover}>
                <div className={styles.serviceImage}>
                  <img src='/images/develop.png' alt='' />
                </div>
                <div className={styles.content}>
                  <h4 className={styles.title}>WordPress Development </h4>
                  <p className={styles.desc}>
                    Empower your brand with a WordPress website that’s
                    functional, stunning, and effortless to manage. Our
                    expertise in custom themes, plugins, and SEO-friendly
                    structures ensures your website not only looks incredible
                    but performs flawlessly. Experience the perfect blend of
                    creativity and efficiency with our WordPress solutions.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceCardHover}>
                <div className={styles.serviceImage}>
                  <img src='/images/bar-chart.png' alt='' />
                </div>
                <div className={styles.content}>
                  <h4 className={styles.title}>SEO</h4>
                  <p className={styles.desc}>
                    Dominate search rankings and attract quality leads with our
                    result-driven SEO strategies. We don’t just focus on clicks;
                    we prioritize conversions by enhancing your visibility,
                    optimizing your site, and connecting you with your target
                    audience. Let’s take your online presence to the next level.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceCardHover}>
                <div className={styles.serviceImage}>
                  <img src='/images/script.png' alt='' />
                </div>
                <div className={styles.content}>
                  <h4 className={styles.title}>Content Creation</h4>
                  <p className={styles.desc}>
                    Your brand deserves content that captivates, converts, and
                    commands attention. We craft powerful stories that resonate
                    with your audience, driving engagement and fueling action.
                    From persuasive sales copy to dynamic blog posts and
                    captivating visuals, we deliver content that amplifies your
                    brand’s voice and turns readers into loyal advocates.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceCardHover}>
                <div className={styles.serviceImage}>
                  <img src='/images/social-media-marketing.png' alt='' />
                </div>
                <div className={styles.content}>
                  <h4 className={styles.title}>Digital Marketing</h4>
                  <p className={styles.desc}>
                    Unleash the true power of your brand with high-impact
                    digital marketing strategies that drive tangible results.
                    From social media domination to precision-targeted PPC
                    campaigns and conversion-driven email marketing, we craft
                    campaigns that elevate your brand’s presence and fuel
                    explosive growth. Together, we'll turn clicks into customers
                    and prospects into loyal brand ambassadors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className={styles.lineColor} />
    </>
  )
}

export default Services
