import React, { useState } from 'react';
import styles from './ContactStyles.module.css';
import linkedinlight from '../assets/linkedin-light.svg';
import twitterlight from '../assets/twitter-light.svg';
import gmaillogo from '../assets/gmaillogo.png';
import Contactform from './Contactform';

function Contact() {
  const [showForm, setShowForm] = useState(false);

  const handleGmailLogoClick = () => {
    setShowForm(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const message = event.target.message.value;
    const mailtoLink = `mailto:dilipram0018@gmail.com?body=${encodeURIComponent(message)}`;
    window.open(mailtoLink, '_blank');
  };

  return (
    <section data-aos="zoom-in-down" id="contact" className={styles.container}>
      <h1 className="sectionTitle" style={{ fontSize: '30px' }}>
        CONTACT
      </h1>
      <div className='social-links'
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
          margin: '20px',
          listStyle: 'none',
          gap: '30px',
        }}
      >
        <li >
          <a
            href="https://www.linkedin.com/in/dilip-ram-9741b5238/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinlight} alt="" />
          </a>
        </li>
        <li>
          <a
            href="https://x.com/im_dilip_22"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitterlight} alt="" />
          </a>
        </li>
        <li>
          <img
            src={gmaillogo}
            alt=""
            height={'44px'}
            onClick={handleGmailLogoClick}
            style={{ cursor: 'pointer' }}
          />
        </li>
      </div>
      {showForm && <Contactform onSubmit={handleSubmit} />}
    </section>
  );
}

export default Contact;
