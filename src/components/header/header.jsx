import React from 'react'
import './header.css'
import CTA from './cta'
import ME from '../../assets/me.jpg'
import Headersocials from './headersocials'

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>hello I'm</h5>
        <h1>Nimashi Uthpala</h1>
        <h5 className="text-light">Computer Engineering Undergraduate </h5>
        <CTA />
        <Headersocials />
        

        <div className='me'>
          <img src={ME} alt = "me"/>
        </div>

        <a href = '#contacts' className='scroll__down'>Scroll down</a>

      </div>
    </header>
  )
}

export default header