import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiTwitter} from 'react-icons/fi'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/vishal-pokharel-87a250246/' target="_blank">< BsLinkedin/></a>
        <a href='https://github.com/VishalPokharel' target="_blank">< FaGithub/></a>
        <a href='https://twitter.com/VishalPokharel1' target="_blank"><FiTwitter/></a>
    </div>
  )
}

export default HeaderSocials