import React from 'react';
import Image from 'next/image';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';

const About = () => {
    return (
        <section id="about">
            <h2>About Me</h2>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image relative">
                        <Image
                            priority
                            src="/assets/shine.jpg"
                            fill
                            alt="Shine"
                        />
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
                        I specialize in React and have a proven track
                        record of delivering clean, user-friendly interfaces that drive
                        engagement and achieve results. With a strong collaborative spirit and
                        a passion for innovation,
                    </p>
                    <p>
                        I bring a creative approach to every
                        project I work on, and am always looking for new challenges to push
                        my skills further.
                    </p>
                    
                    <p> Hope to create <b> libraries and frameworks </b>  that solve developers problems and difficulties </p>

                    <a href="#contact" className='btn btn-primary' > Discus With Me </a>

                </div>
            </div>
        </section>
    )
}

export default About