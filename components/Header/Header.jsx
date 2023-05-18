import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import Link from 'next/link';

const Header = () => {
  return (
    <section id='header'>
        <div className="container header__container">
            <h5>Hello I am</h5>
            <h1>Shine</h1>
            <h5 className="text-light">Front End Developer(React Developer)</h5>
            <CTA />
            <HeaderSocials />

            <Link href="/contact" className='scroll__down'>Scroll Down</Link>
        </div>
    </section>
  )
}

export default Header;