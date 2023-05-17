import React from 'react';
import { AiOutlineHome, AiOutlineUser, AiOutlineMessage } from 'react-icons/ai';
import { BsStopwatch } from "react-icons/bs";
import { RiServiceLine } from "react-icons/ri";
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
                <AiOutlineUser />
            </Link>
            <Link 
                href='/techs'    
                className={`${router.pathname === '/techs' ? 'active' : null}`}
            >
                <BsStopwatch />
            </Link>
            <Link 
                href='/services' 
                className={`${router.pathname === '/services' ? 'active' : null}`}>
                <RiServiceLine />
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