import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {FiTwitter} from 'react-icons/fi'


const footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>NIMASHI</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#About">About</a></li>
        <li><a href="#experiance">Experiance</a></li>
        <li><a href="#portfolio">Projects</a></li>
        <li><a href="#contacts">Contacts</a></li>
      </ul>

      <div className="footer__social">
        <a href='https://facebook.com'><BsFacebook/></a>
        <a href='https://instagram.com'><BsInstagram/></a>
        <a href='https://twitter.com'><FiTwitter/></a>
      </div>

      <div className='footer__copyright'>
        <small> &copy; All rights reserved.</small>
      </div>

    </footer>
  )
}

export default footer