import React, { useState } from 'react';
import './contact.css';

export default function Contact () {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  
  function handleButtonClick() {
    setIsFormSubmitted(!isFormSubmitted);
    setLoading(!loading);
  }

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Custom validation for each field
    const input = e.target;
    if (input.name === "name") {
      // Check if name is empty
      if (input.value.trim() === "") {
        input.setCustomValidity("Please enter your name.");
      } else {
        input.setCustomValidity("");
      }
    }

    if (input.name === "email") {
      // Check if email is valid
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (input.value.trim() === "") {
        input.setCustomValidity("Please enter your email.");
      } else if (!emailPattern.test(input.value)) {
        input.setCustomValidity("Please enter a valid email address.");
      } else {
        input.setCustomValidity("");
      }
    }

    if (input.name === "message") {
      // Check if message is empty
      if (input.value.trim() === "") {
        input.setCustomValidity("Please enter your message.");
      } else {
        input.setCustomValidity("");
      }
    }
  };

  return (
    <>
      <h2 className="contact__header">Reach out to me</h2>

      <div className="contact__detail">
        <div className="detail__card">
          <i class="fa fa-envelope" aria-hidden="true"></i>
          <a href="mailto:ooluwatemilorun@gmail.com" className="p__text"> ooluwatemilorun@gmail.com</a>
        </div>
        <div className="detail__card">
          <i class="fa fa-phone" aria-hidden="true"></i>
          <a href="tel:+2349034536267" className="p__text"> +2349034536267</a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <form className="contact__form">
          <div className="form__field">
            <input
              className="p__text"
              type="text"
              placeholder="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChangeInput}
              required
            />
          </div>
          <div className="form__field">
            <input
              className="p__text"
              type="email"
              placeholder="Your Email"
              name="email"
              value={formData.email}
              onChange={handleChangeInput}
              required
            />
          </div>
          <div>
            <textarea
              className="p__text"
              placeholder="Your Message"
              name="message"
              value={formData.message}
              onChange={handleChangeInput}
              required
            />
          </div>
          <button type="submit" className="p__text" onClick={() => handleButtonClick()}>
            {!loading ? 'Send Message' : 'Sending...'}
          </button>
        </form>
      ) : (
          <h3 className="contact__feedback"><i class="fa fa-handshake-o" aria-hidden="true"></i> Thank you for getting in touch!</h3>
      )}
    </>
  );
};

