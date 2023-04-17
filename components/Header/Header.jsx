import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <section id='header'>
        <div className="container header__container">
            <h5>Hello I`&apos;`m</h5>
            <h1>Shine</h1>
            <h5 className="text-light">Front End Developer(React Developer)</h5>
            <CTA />
            <HeaderSocials />

            <a href="#contact" className='scroll__down'>Scroll Down</a>
        </div>
    </section>
  )
}

export default Header