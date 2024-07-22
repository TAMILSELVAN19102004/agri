import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      setNameError('Name is required');
      return;
    }

    if (name.length <= 3) {
      setNameError('ENTER VALID NAME');
      return;
    }

    setNameError('');
    alert('Form submitted!');
    window.location.href = 'mailto:example@example.com';
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <body className='RRR1'>
        <div className="card1">
          <div className="card-header">
            Contact 
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit} encType="text/plain">
              <div className="contact-details">
                <label htmlFor="name" className="contact-label">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="Name"
                  className="contact-value"
                  value={name}
                  onChange={handleNameChange}
                  required
                />
                {nameError && <p className="error-message">{nameError}</p>}
              </div>
              <div className="contact-details">
                <label htmlFor="email" className="contact-label">Email:</label>
                <input type="email" id="email" name="Email" className="contact-value" required />
              </div>
              <div className="contact-details">
                <label htmlFor="message" className="contact-label">Message:</label>
                <textarea id="message" name="Message" className="contact-value message" required />
              </div>
              <button className='RRR' type="submit">Submit</button>
            </form>
            <div className="social-icons">
              <a href="[Your Facebook Link]" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png" alt="Facebook" />
              </a>
              <a href="[Your Instagram Link]" target="_blank" rel="noopener noreferrer">
                <img src="https://thumbs.dreamstime.com/b/insta-new-155631943.jpg" alt="Instagram" />
              </a>
              <a href="[Your Twitter Link]" target="_blank" rel="noopener noreferrer">
                <img src="https://www.exchange4media.com/news-photo/1530128781_tWQz5Q_twitter_logo.jpg" alt="Twitter" />
              </a>
              <a href="https://www.linkedin.com/in/tamilselvan-n-b85a402a2/" target="_blank" rel="noopener noreferrer">
                <img src="https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw=w600-h300-pc0xffffff-pd" alt="LinkedIn" />
              </a>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
};

export default Contact;
