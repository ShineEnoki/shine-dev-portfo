import React from 'react';
import { CiFacebook } from 'react-icons/ci';
import { BsGithub,BsInstagram } from 'react-icons/bs'



const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.instagram.com/shine.enoki/" target='_blank' rel="noopener noreferrer" >
            <BsInstagram />
        </a>
        <a href="https://github.com/ShineEnoki" target='_blank' rel="noopener noreferrer" >
            <BsGithub />
        </a>
        <a href="https://www.facebook.com/shine.enoki" target='_blank' rel="noopener noreferrer" >
            <CiFacebook />
        </a>
    </div>
  )
}

export default HeaderSocials