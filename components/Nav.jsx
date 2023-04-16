import React from 'react';
import { AiOutlineHome, AiOutlineUser, AiOutlineMessage } from 'react-icons/ai';
import { BsStopwatch } from "react-icons/bs";
import { RiServiceLine } from "react-icons/ri";
import Link from 'next/link';



const Nav = () => {

    return (
        <nav>
            <Link href='/' activeClassName='active'>
                <AiOutlineHome />
            </Link>
            <Link href='/projects' activeClassName='active'>
                <AiOutlineUser />
            </Link>
            <Link href='/experience' activeClassName='active'>
                <BsStopwatch />
            </Link>
            <Link href='/services' activeClassName='active'>
                <RiServiceLine />
            </Link>
            <Link href='/contact' activeClassName='active'>
                <AiOutlineMessage />
            </Link>
        </nav>
    )
}

export default Nav;