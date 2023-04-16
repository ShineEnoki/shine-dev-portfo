import React from 'react';
import Link from 'next/link';

const CTA = () => {
  return (
    <div className='cta'>
      <Link href='/assets/my-resume.pdf'>
        Download CV
      </Link>

      <a href="#contact" className='btn btn-primary'>Contact Me</a>
    </div>
  )
}

export default CTA