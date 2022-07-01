import React from 'react'
import './Footer.css'
import {BsWhatsapp} from 'react-icons/bs'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillTwitterCircle} from 'react-icons/ai'


const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Boluwatife Victor</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#Testimonials'>Reviews</a></li>
        <li><a href='#contacts'>Contacts</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://whatsapp.com'><BsWhatsapp/></a>
        <a href='https://Linkedin.com'><AiFillLinkedin/></a>
        <a href='https://twitter.com'><AiFillTwitterCircle/></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy;BirdboyBolu's Portfolio. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer