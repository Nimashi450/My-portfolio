import React from 'react'
import './portfolio.css'
import ME1 from '../../assets/project1.jpg'
import ME2 from '../../assets/project2.jpg'
import ME3 from '../../assets/project3.jpg'
import ME4 from '../../assets/project4.jpg'
import ME5 from '../../assets/project5.jpg'

const portfolio = () => {
  return (
    <section id='portfolio'>
      
    <h5>My Recent Works</h5> 
    <h2>Projects</h2> 

    <div className='container portfolio__container'>
      <article className='portfolio__item'>
        <div className='portfolio__itemm-image'>
          <img src={ME1} alt="" />
        </div>
        <h3>My first project</h3>
        <div className='portfolio__item-cta'>
          <a href="https://github.com" className='btn' target="_blank">Github</a>
          {/* You should change this one */}
          <a href="https://dribbble.com/#" className = 'btn btn-primary' target = "_blank">Live Demo</a>
          </div>
      </article>

      <article className='portfolio__item'>
        <div className='portfolio__itemm-image'>
          <img src={ME2} alt="" />
        </div>
        <h3>My first project</h3>
        <div className='portfolio__item-cta'>
          <a href="https://github.com" className='btn' target="_blank">Github</a>
          {/* You should change this one */}
          <a href="https://dribbble.com/#" className = 'btn btn-primary' target = "_blank">Live Demo</a>
          </div>
      </article>

      <article className='portfolio__item'>
        <div className='portfolio__itemm-image'>
          <img src={ME3} alt="" />
        </div>
        <h3>My first project</h3>
        <div className='portfolio__item-cta'>
          <a href="https://github.com" className='btn' target="_blank">Github</a>
          {/* You should change this one */}
          <a href="https://dribbble.com/#" className = 'btn btn-primary' target = "_blank">Live Demo</a>
          </div>
      </article>

      <article className='portfolio__item'>
        <div className='portfolio__itemm-image'>
          <img src={ME4} alt="" />
        </div>
        <h3>My first project</h3>
        <div className='portfolio__item-cta'>
          <a href="https://github.com" className='btn' target="_blank">Github</a>
          {/* You should change this one */}
          <a href="https://dribbble.com/#" className = 'btn btn-primary' target = "_blank">Live Demo</a>
          </div>
      </article>

      <article className='portfolio__item'>
        <div className='portfolio__itemm-image'>
          <img src={ME5} alt="" />
        </div>
        <h3>My first project</h3>
        <div className='portfolio__item-cta'>
          <a href="https://github.com" className='btn' target="_blank">Github</a>
          {/* You should change this one */}
          <a href="https://dribbble.com/#" className = 'btn btn-primary' target = "_blank">Live Demo</a>
          </div>
      </article>
    </div>

    
    </section>
  )
}

export default portfolio