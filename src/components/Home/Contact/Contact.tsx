import React from 'react';
import emailjs from 'emailjs-com';

function AppContact() {

  function sendEmail(e : any) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_p83ieqj', e.target, 'user_5KdWH0MXyGxP2ccaRFSLm')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <form 
      className="contact-form" 
      onSubmit={sendEmail}
      style={{marginTop : 100}}
    >
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input type="text" name="name" />
      <label>Subject</label>
      <input type="text" name="subject" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
}

export default AppContact;