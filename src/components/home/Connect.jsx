import React, { useState } from 'react'
import styles from '../styles/home/Connect.module.css'

const Connect = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contactNumber: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    const { firstName, lastName, email, contactNumber, message } = formData;

    // Construct the WhatsApp message
    const whatsappMessage = `
      First Name: ${firstName}
      Last Name: ${lastName}
      Email: ${email}
      Contact Number: ${contactNumber}
      Message: ${message}
    `;

    
    const whatsappNumber = '923144087039'; 

    
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <>
      <div className='screen'>
        <div className={styles.contactContainer}>
          <div className={styles.heading}>
            <h2>Let's Contact!</h2>
          </div>
          <div className={styles.form}>
            <div className={styles.inputgroup}>
              <div className={styles.inputs}>
                <label htmlFor='firstName'>First Name</label>
                <input
                  type='text'
                  name='firstName'
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.inputs}>
                <label className={styles.lastname} htmlFor='lastName'>
                  Last Name
                </label>
                <input
                  type='text'
                  name='lastName'
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className={styles.inputgroup}>
              <div className={styles.inputs}>
                <label htmlFor='email'>Your Email</label>
                <input
                  type='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.inputs}>
                <label htmlFor='contactNumber'>Contact Number</label>
                <input
                  type='number'
                  name='contactNumber'
                  value={formData.contactNumber}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className={styles.inputs}>
              <label htmlFor='message'>Comment or Message</label>
              <textarea
                name='message'
                id='message'
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
          <div className={styles.submitbtn}>
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Connect;
