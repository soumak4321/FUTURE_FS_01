import React from 'react';

function Contact() {
  return (
    <div className="page">
      <h2>Contact Me</h2>
      <form action="https://formspree.io/f/your_form_id" method="POST">
        <input type="text" name="name" placeholder="Your name" required />
        <input type="email" name="_replyto" placeholder="Your email" required />
        <textarea name="message" placeholder="Your message..." required />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;
