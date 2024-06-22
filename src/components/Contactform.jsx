import React from 'react';

const Contactform = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, message } = event.target.elements;

    const mailtoLink = `mailto:dilipram0018@gmail.com?subject=Message%20from%20${encodeURIComponent(
      name.value || 'Unknown'
    )}&body=${encodeURIComponent(
      `Email: ${email.value}%0A%0AMessage:%0A${message.value}`
    )}`;

    window.open(mailtoLink, '_blank');
  };

  return (
    <div data-aos="zoom-out-down">
      <form onSubmit={handleSubmit}>
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input type="text" name="name" id="name" placeholder="Name" required />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input type="email" name="email" id="email" placeholder="Email" required />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea name="message" id="message" placeholder="Message" required></textarea>
        </div>
        <input className="hover btn" type="submit" value="Submit"  style={{
          marginBottom:"20px"
        }} />
      </form>
    </div>
  );
};

export default Contactform;

