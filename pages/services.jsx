import Nav from '@/components/Nav';
import React from 'react';


import { BiCheck } from "react-icons/bi"

const Services = () => {
    return (
        <section id="services">
            <Nav />
            <h5>What I Offer</h5>
            <h2>Skills</h2>

            <div className="container services__container">
                <article className="service">
                    <div className="service__head">
                        <h3>Web Development</h3>
                    </div>
                    <ul className='service__list'>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p> Strong understanding in HTML and CSS. </p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p> Experience well in Javascript and ES6 features. </p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p> Develope and maintain website front end using HTML,CSS, Bootstrap and React. </p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p> Working with apis from back end. </p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p> Basic knowledge in back end technologies such as Php, Laravel and can use NodeJS, Express.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p> good understanding in Database technologies such as MySql and MongoDB. </p>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    )
}

export default Services;