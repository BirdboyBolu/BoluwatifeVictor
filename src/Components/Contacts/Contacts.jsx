import React from 'react';
import './Contacts.css';
import { MdMarkEmailUnread } from 'react-icons/md';
import { FaTwitterSquare } from 'react-icons/fa';
import { FaWhatsappSquare } from 'react-icons/fa';
import { useRef } from 'react';
import emailjs from '@emailjs/browser'

const Contacts = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_oyyhkpr',
        'template_3vbu0gl',
        form.current,
        'GHpqg3xmIyhiM1vad'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

      e.target.reset()
  };

  return (
    <section id="contacts">
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdMarkEmailUnread className="contact__option-icon" />
            <h4>Email</h4>
            <h5>ayomide27victor@gmail.com</h5>
            <a href="mailto:ayomide27victor@gmail.com" target="_blank">
              Send a mail
            </a>
          </article>
          <article className="contact__option">
            <FaTwitterSquare className="contact__option-icon" />
            <h4>Twitter</h4>
            <h5>@BirdboyBolu</h5>
            <a
              href="https://twitter.com/BirdboyBolu?t=3dkFUKopTLv-qNABWBq1PQ&s=08"
              target="_blank"
            >
              Reach me via Twitter
            </a>
          </article>
          <article className="contact__option">
            <FaWhatsappSquare className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>Boluwatife Olu-Ashake</h5>
            <a
              href="https://api.whatsapp.com/send?phone+2348189461773"
              target="_blank"
            >
              Send a Message on WhatsApp
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Hit Me Up
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contacts;
