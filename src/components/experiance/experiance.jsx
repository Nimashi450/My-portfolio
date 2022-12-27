import React from 'react'
import './experiance.css'
import {BsPatchCheck } from 'react-icons/bs'
const experiance = () => {
  return (
    <section id='experiance'>
      <h5>What Skills I have</h5>
      <h2>My Experiance</h2>

      <div className="container experiance__container">
        <div className="experiance__frontend">
          <h3>Frontend Development</h3>
          <div className="experiance__content">
            <article className='experiance__details'>
              <BsPatchCheck className='experiance__detain-icon'/>
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Experianced</small>
            
              </div>
            </article>
            <article className='experiance__details'>
              <BsPatchCheck className='experiance__detain-icon' />
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Experianced</small>
            
              </div>
            </article>
            <article className='experiance__details'>
              <BsPatchCheck className='experiance__detain-icon' />
             <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Experianced</small>
            
             </div>
             </article>
            <article className='experiance__details'>
              <BsPatchCheck className='experiance__detain-icon' />
              <div>
              <h4>Boostrap</h4>
              <small className='text-light'>Intermediate</small>
            
              </div>
            </article>
            <article className='experiance__details'>
              <BsPatchCheck className='experiance__detain-icon'/>
              <div>
              <h4>React</h4>
              <small className='text-light'>Intermediate</small>
            
              </div>
            </article>
          </div>
        </div>

        <div className="experiance__backend">
          <h3>Backend Development</h3>
          <div className="experiance__content">
            <article className='experiance__details'>
              <BsPatchCheck className='experiance__detain-icon'/>
              <div>
                <h4>PHP</h4>
                <small className='text-light'>Experianced</small>
              </div>
            </article>
            <article className='experiance__details'>
              <BsPatchCheck className='experiance__detain-icon'/>
              <div>
              <h4>Node JS</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experiance__details'>
              <BsPatchCheck className='experiance__detain-icon'/>
              <div>
              <h4>MySQL</h4>
              <small className='text-light'>Experianced</small>
            
              </div>
            </article>
            <article className='experiance__details'>
              <BsPatchCheck className='experiance__detain-icon'/>
              <div>
              <h4>Mongodb</h4>
              <small className='text-light'>Basic</small>
            
              </div>
            </article>
            <article className='experiance__details'>
              <BsPatchCheck className='experiance__detain-icon'/>
              <div>
              <h4>Java</h4>
              <small className='text-light'>Experianced</small>
              
              </div> 
            </article>
          </div>
        </div>



      </div>


    </section>
  )
}

export default experiance