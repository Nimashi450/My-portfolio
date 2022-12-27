import React from 'react'
import './about.css'
import ME from '../../assets/lap.jpg'
import {FaAward} from 'react-icons/fa'
import {SiCodeproject} from 'react-icons/si'


const about = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__container">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experiance</h5>
              <small>4 years academics </small>
            </article>

            {/* <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experiance</h5>
              <small>6 months working experiance on industry + 4 years acadamics </small>
            </article> */}

            <article className='about__card'>
              <SiCodeproject className='about__icon'/>
              <h5>Projects</h5>
              <small></small>
            </article>

            <p></p>

            <a href="#contacts" className='btn btn-primary'>Let'sTalk</a>

          </div>
        </div>
      </div>
    </section>
  )
}

export default about