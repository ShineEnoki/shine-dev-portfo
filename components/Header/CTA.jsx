import React from 'react';
import Link from 'next/link';


const CTA = () => {
  return (
    <div className='cta'>
      <Link href='/assets/my-cv-v3.pdf'className='bg-variant rounded-lg p-4 hover:bg-transparent hover:border hover:border-black'>
        Download CV
      </Link>

      <Link href="/contact" className='btn btn-primary'>Contact Me</Link>
    </div>
  )
}

export default CTA