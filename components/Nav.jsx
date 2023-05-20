import React from 'react';

//icons
import { AiOutlineHome, AiOutlineMessage } from 'react-icons/ai';
import { FaProjectDiagram } from 'react-icons/fa'
import {  RiCustomerService2Line } from 'react-icons/ri'
import { GrStackOverflow } from 'react-icons/gr'
import Link from 'next/link';
import { useRouter } from 'next/router';



const Nav = () => {
    const router = useRouter();
    return (
        <nav>
            <Link href='/' 
                className={`${router.pathname === '/' ? 'active' : null}`} 
            >
                <AiOutlineHome />
            </Link>
            <Link 
                href='/projects' 
                className={`${router.pathname === '/projects' ? 'active' : null}`}
            >
                <FaProjectDiagram />
            </Link>
            <Link 
                href='/techs'    
                className={`${router.pathname === '/techs' ? 'active' : null}`}
            >
                <GrStackOverflow />
            </Link>
            <Link 
                href='/services' 
                className={`${router.pathname === '/services' ? 'active' : null}`}>
                <RiCustomerService2Line />
            </Link>
            <Link 
                href='/contact' 
                className={`${router.pathname === '/contact' ? 'active' : null}`}
            >
                <AiOutlineMessage />
            </Link>
        </nav>
    )
}

export default Nav;