import Nav from '@/components/Nav';
import React from 'react';
import { BiCheck } from "react-icons/bi";

const frontEndSkills = [
    {
        id: 1,
        details: "HTML/CSS (including experience with CSS preprocessors such as (Sass/SCSS)"
    },
    {
        id: 2,
        details: "Strong understanding of JavaScript (including ES6+ syntax and working knowledge of functional programming concepts)"
    },
    {
        id: 3,
        details: "Proficient in React (including experience with React concepts, React Hooks, and Context API)"
    },
    {
        id: 4,
        details: "Experience with modern frontend frameworks and libraries (such as Bootstrap, Material-UI, or Tailwind CSS)"
    },
    {
        id: 5,
        details: "Understanding of web development concepts and terminology (such as HTTP, APIs, DOM, etc.)"
    },
    {
        id: 6,
        details: "Strong knowledage in REST api and Backend process.",
    }
]

const personalSkills = [
    {
        id: 1,
        details: "Problem solving"
    },
    {
        id: 2,
        details: "Critical Thinking"
    },
    {
        id: 3,
        details: "Time Management"
    },
]

const Skill = ({ skill }) => {
    return (
        <li className='flex gap-1'>
            <p className='mt-3 text-[20px]'>
                *
            </p>
            <p className='px-3 py-2'>
                {skill}
            </p>
        </li>
    )
}

const Services = () => {
    return (
        <section id="services">
            <Nav />
            <h1 className='text-center'>Skills</h1>

            <div className='flex flex-col gap-4'>
                <div className="container services__container text-white max-w-[900px] " >
                    <article className="service">
                        <div className="service__head">
                            <h3>FrontEnd Development</h3>
                        </div>
                        <ul className='flex flex-col gap-2 px-3 py-2'>
                            {frontEndSkills.map((skill) => {
                                return (
                                    <Skill key={skill.id} skill={skill.details} />
                                )
                            })}
                        </ul>
                    </article>
                </div>

                <div className="container services__container text-white max-w-[900px]" >
                    <article className="service">
                        <div className="service__head">
                            <h3>Personal Skills</h3>
                        </div>
                        <ul className='flex flex-col gap-2 px-3 py-2'>
                            {personalSkills.map((skill) => {
                                return (
                                    <Skill key={skill.id} skill={skill.details} />
                                )
                            })}
                        </ul>
                    </article>
                </div>
            </div>


        </section>
    )
}

export default Services;