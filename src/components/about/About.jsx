import React from 'react'
import "./about.css"
import ME from '../../assets/newprofile.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt='About Image' />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">

            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Education</h5>
              <small>B.E. in Computer Engineering, Pulchowk Campus</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Interest</h5>
              <small>Literature  Cricket</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>5+ completed</small>
            </article>


          </div>
           <p>
            Hello!I am Vishal Pokhare. I am currently studying Bachelors in Computer Engineering.
           </p>
           <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>

  )
}

export default About