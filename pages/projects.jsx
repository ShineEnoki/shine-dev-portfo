import Nav from '@/components/Nav';
import React from 'react';

import Image from 'next/image';



//importing assets
import myLoli from '../public/assets/my-loli.png';
import BookShop from '../public/assets/hope-book-shop.png'
import kkStore from '../public/assets/kk-store.png'
import personPortfolio from '../public/assets/personal-portfolio.png';
import project4 from '../public/assets/portfolio4.jpg';

const projects = [
    {
        id: 1,
        name: 'My-Loli',
        src: myLoli,
        description: "What you have to do? What's on your mind? Loli, Your personal assistant is here for you.Let's me save your memory",
        githubLink: "https://github.com/ShineEnoki/my-loli-source-code",
        demoLink: 'https://my-loli.vercel.app/',
    },
    {
        id: 2,
        name: 'Hope Book Shop',
        src: BookShop,
        description: "Books are the plane, and the train, and the road. They are the destination, and the journey. They are home.Here is the hope",
        githubLink: "https://github.com/ShineEnoki/react-book-shop-app",
        demoLink: 'https://my-loli.vercel.app/',
    },
    {
        id: 3,
        name: 'Kaung Khant Store',
        src: kkStore,
        description: "Avoid crowd for covid 19. Shop on your home.Take care your help and We will take care the rest.",
        githubLink: 'https://github.com/ShineEnoki/KK-store-ecommerce',
        demoLink: 'https://kk-store-ecommerce.vercel.app/',
    },
    {
        id: 5,
        name: 'Personal Portfolio',
        src: personPortfolio,
        description: 'Have something to discuss! You are welcome from my portfolio, my gust',
        githubLink: 'https://github.com/ShineEnoki/shine-dev-portfo',
        demoLink: 'https://shine-dev-portfo.vercel.app/',
    }

]

const Project = ({ project }) => {
    const { name, src, description, githubLink, demoLink } = project;
    return (
        <article className='portfolio__item bg-variant flex flex-col lg:flex-row gap-4 items-center group px-2 py-2'>
            <div className="portfolio__item-image  h-full  lg:w-[45%] ">
                <Image
                    src={src}
                    className=' rounded-md group-hover:scale-110 group-hover:rounded-xl max-w-[500px] h-auto '
                    width={400}
                    height={250}
                    layout='responsive'
                    alt=""
                />
            </div>
            <div className=' flex-1 h-full px-6 py-2'>
                <div className='flex flex-col gap-2 justify-between'>
                    <div className='flex flex-col gap-4'>
                        <h3 className='text-bold text-2xl'> {name} </h3>
                        <p className='portfolio__item-description text-sm'>{description} </p>
                    </div>

                    <div className='flex gap-2'>
                        {
                            githubLink
                                ? <a href={githubLink} className='btn' target='_blank' rel="noreferrer">Github</a>
                                : <button href="/" 
                                disable className='btn font-semibold'> Source Unavailable</button>
                        }

                        

                        <a href={demoLink} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                    </div>
                </div>

            </div>


        </article >
    )
}

const Projects = () => {
    return (
        <section id='portfolio' className=''>
            <Nav />
            <h5>My Work</h5>
            <h2>Portfolio</h2>

            <div className="container flex flex-col gap-4 ">
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

export default Projects;