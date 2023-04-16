import React from 'react';

import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {AiOutlineFundProjectionScreen} from 'react-icons/ai';


const About = () => {
  return (
    <section id="about">
        <h5>Get To Know</h5>
        <h2>About Me</h2>
        <div className="container about__container">
            <div className="about__me">
                <div className="about__me-image">
                    <img src="/assets/shine.jpg" alt="" />
                </div>
            </div>
            <div className="about__content">
                <div className="about__cards">
                    <article className="about__card">
                        <FaAward className='about__icon' />
                        <h5>Experience</h5>
                        <small>6 Months +</small>
                    </article>
                    <article className="about__card">
                        <FiUsers className='about__icon' />
                        <h5>Clients</h5>
                        <small> 2+ </small>
                    </article>
                    <article className="about__card">
                        <AiOutlineFundProjectionScreen className='about__icon' />
                        <h5>Projects</h5>
                        <small>5+ Real World</small>
                    </article>
                </div>
                <b></b>
                <p>
                    After completed all 9 courses in the Meta-Front-End-Developer program, I started coding <b>"Real World Projects"</b> such as Book Shop with google api,University Projects using <b>React</b> sometime <b>Full MERN stact</b>.Stil learning and coding new Teach with passions.
                </p>

                <a href="#contact" className='btn btn-primary' > Discus With Me </a>

            </div>
        </div>
    </section>
  )
}

export default About