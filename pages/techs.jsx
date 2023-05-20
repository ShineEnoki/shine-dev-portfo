import Nav from '@/components/Nav';
import React from 'react';

//icons
import { AiOutlineHtml5 } from 'react-icons/ai';
import { TbBrandCss3, TbBrandJavascript } from 'react-icons/tb'
import { FaReact, FaBootstrap } from 'react-icons/fa';
import { SiTailwindcss, SiMui, SiNextdotjs } from 'react-icons/si'

import { BsPatchCheckFill } from 'react-icons/bs';

const frontendTechs = [
    {
        name: "HTML",
        Icon: AiOutlineHtml5,
        iconColor: "#E34F26",
        description: 'A markup language used to create web pages and applications.'
    },
    {
        name: "CSS",
        Icon: TbBrandCss3,
        iconColor: '#1d05f5',
        description: 'To style web pages.'
    },
    {
        name: "JavaScript",
        Icon: TbBrandJavascript,
        iconColor: "#F7DF1E" ,
        description: 'A programming language used for creating interactive web applications.'
    },
    {
        name: "React",
        Icon: FaReact,
        iconColor:  "#61DAFB",
        description: 'A JavaScript library used for building user interfaces.'
    },
    {
        name: "Bootstrap",
        Icon: FaBootstrap,
        iconColor: '#6c07fa',
        description: 'A popular framework used for creating responsive and mobile-first websites.'
    },
    {
        name: "Tailwind CSS",
        Icon: SiTailwindcss,
        iconColor: '#06B6D4',
        description: 'A utility-first CSS framework that provides a set of pre-designed CSS classes to make building responsive user interfaces faster and easier.'
    },
    {
        name: "MaterialUI",
        Icon: SiMui,
        iconColor: '#DB4437',
        description: 'A popular React component library that provides pre-designed components making it easier to build attractive and consistent user interfaces.'
    },
    {
        name: "NextJS",
        Icon: SiNextdotjs,
        iconColor: ' #ffffff',
        description: 'A popular open-source React-based framework used for building server-side rendered (SSR) and static web applications.'
    },

]

const TechArticle = ({tech}) => {
    const { name, Icon, iconColor, description } = tech;
    console.log(iconColor)
    return (
        <article className='bg-variant hover:bg-transparent hover:border-2 hover:border-red-500 rounded-lg flex flex-col gap-3 p-3 group'>
            <div className='flex flex-row items-center gap-2 '>
               
                <Icon 
                    style={{color: iconColor}}
                    className={`mt-[10px] w-10 h-10 group-hover:scale-[130%] transition duration-500 `} />
                <h2 className='text-[25px] font-chivo-mono'> {name} </h2>

            </div>
            <div>
                <p className='text-[18px] sm:text-sm'> {description} </p>
            </div>
        </article>
    )
}

const Techs = () => {
    return (
        <section id="experience">
            <Nav />
            <h5>Technologies I use</h5>
            <h2 className='font-semibold'>TECHS</h2>

            <div className="container ">
                <div className=" p-5 rounded-3xl transition hover:bg-transparent">
                    <h3 className='text-center color-primary text-xl mb-5'>Frontend Development Tech</h3>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                        
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

export default Techs