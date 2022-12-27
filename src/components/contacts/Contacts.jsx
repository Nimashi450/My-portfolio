import React from 'react'
import './contacts.css'
import {MdMarkEmailUnread} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'


const Contacts = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rwuvwn9', 'template_wjetifl', form.current, 'jGPOgFCZV1TrzoLVR')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };

  return (
    <section id='contacts'>
      <h5>Get In Touch</h5>
      <h2>Contact me</h2>

      <div className='container contact__container'>
        <div className="contact__options">
          <article className='contact__option'>
            <MdMarkEmailUnread className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>bmnimashi@gmail.com</h5>
            <a href="mailto:bmnimashi@gamil.com" target='_blank'>Send a message</a>
          </article>

          <article className='contact__option'>
            <BsMessenger className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5></h5>
            <a href="https://m.me/nimashi.uthpala.12" target='_blank'>Send a message</a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>0778979768</h5>
            <a href="https://api.whatsapp.com/send?phone=+94778979768" target='_blank'>Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit = {sendEmail}>
          <input type="text"  name = 'name' placeholder='Your full name' required/>
          <input type="text" name='email' placeholder='Your email' required/>
          <textarea type="text" name='message' placeholder='Your message' required ></textarea>
          <button type= 'submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contacts