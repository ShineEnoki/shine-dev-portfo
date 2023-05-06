import Nav from '@/components/Nav';
import React from 'react';

import Image from 'next/image';

//importing assets
import myLoli from '../public/assets/my-loli.png';
import BookShop from '../public/assets/hope-book-shop.png'
import project2 from '../public/assets/portfolio2.jpg';
import project3 from '../public/assets/portfolio3.jpg';
import project4 from '../public/assets/portfolio4.jpg';

const projects = [
    {
        id: 1,
        name: 'My-Loli',
        src: myLoli,
        description: "What you have to do? What's on your mind? Loli, Your personal assistant is here for you.Let's me save your memory",
        githubLink: "https://github.com/ShineEnoki/my-loli-source-code",
        demoLink: 'https://my-loli.vercel.app/'
    },
    {
        id: 2,
        name: 'Hope Book Shop',
        src: BookShop,
        description: "Books are the plane, and the train, and the road. They are the destination, and the journey. They are home.Here is the hope",
        githubLink: "https://github.com/ShineEnoki/react-book-shop-app",
        demoLink: 'https://my-loli.vercel.app/'
    },

]

const Project = ({ project }) => {
    const { name, src, description, githubLink, demoLink } = project
    return (
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <Image src={src} alt="" />
            </div>
            <h3> {name} </h3>
            <p className='portfolio__item-description'> {description} </p>
            <div className='flex gap-1'>
                <a href={githubLink} className='btn' target='_blank' rel="noreferrer">Github</a>
                <a href={demoLink} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
            </div>

        </article>
    )
}

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <Nav />
            <h5>My Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {
                    projects.map((project) => {
                        return (
                            <Project project={project} key={project.id} />
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Portfolio;