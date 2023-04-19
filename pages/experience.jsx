import Nav from '@/components/Nav';
import React from 'react';

import { BsPatchCheckFill } from 'react-icons/bs';

const frontendTechs = [
    {
        name: "HTML",
        description: 'A markup language used to create web pages and applications'
    },
    {
        name: "CSS",
        description: 'To style web pages'
    },
    {
        name: "JavaScript",
        description: 'A programming language used for creating interactive web applications'
    },
    {
        name: "React",
        description: 'A JavaScript library used for building user interfaces'
    },
    {
        name: "Bootstrap",
        description: 'A popular framework used for creating responsive and mobile-first websites'
    },
    {
        name: "Tailwind CSS",
        description: 'A utility-first CSS framework that provides a set of pre-designed CSS classes to make building responsive user interfaces faster and easier'
    },
    {
        name: "MaterialUI",
        description: 'A popular React component library that provides pre-designed components making it easier to build attractive and consistent user interfaces'
    },
    {
        name: "NextJS",
        description: 'a popular open-source React-based framework used for building server-side rendered (SSR) and static web applications'
    },

]

const TechArticle = ({tech}) => {
    return (
        <article className='rounded-lg flex gap-3 p-3'>
            <div>
                <BsPatchCheckFill className='color-primary mt-[6px] w-5 h-5' />
            </div>
            <div>
                <h4> {tech.name} </h4>
                <small> {tech.description} </small>
            </div>
        </article>
    )
}

const Experience = () => {
    return (
        <section id="experience">
            <Nav />
            <h5>What skills I have</h5>
            <h2>My Experience</h2>

            <div className="container ">
                <div className="bg-variant p-5 rounded-3xl transition hover:bg-transparent">
                    <h3 className='text-center color-primary text-xl mb-5'>Frontend Development Tech</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        
                        {
                            frontendTechs.map( tech => 
                                <TechArticle tech={tech} key={tech.name} />
                            )
                        }

                    </div>
                </div>
                {/* END OF FRONT END */}

            </div>
        </section>
    )
}

export default Experience