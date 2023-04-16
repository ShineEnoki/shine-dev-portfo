import Nav from '@/components/Nav';
import React from 'react';



const Portfolio = () => {
  return (
    <section id='portfolio'>
        <Nav />
        <h5>My Work</h5>
        <h2>Portfolio</h2>
        
        <div className="container portfolio__container">
            <article className='portfolio__item'>
                <div className="portfolio__item-image">
                    <img src='assets/hope-book-shop.png' alt="" />
                </div>
                <h3>Hope Book Shop</h3>
                <p className='portfolio__item-description'>This is the React book shop app with google book api.</p>
                <a href="https://github.com/ShineEnoki/react-book-shop-app" className='btn' target='_blank' rel="noreferrer">Github</a>
                <a href="https://shineenoki.github.io/react-book-shop-app/" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
            </article>

            <article className='portfolio__item'>
                <div className="portfolio__item-image">
                    <img src='assets/portfolio2.jpg' alt="" />
                </div>
                <h3>Instagram clone with functionality</h3>
                <a href="https//githublink" className='btn'>Github</a>
                <a href="https//githublink" className='btn btn-primary' target='_blank'>Live Demo</a>
            </article>

            <article className='portfolio__item'>
                <div className="portfolio__item-image">
                    <img src='assets/portfolio3.jpg' alt="" />
                </div>
                <h3>This is a portfolio item title</h3>
                <a href="https//githublink" className='btn'>Github</a>
                <a href="https//githublink" className='btn btn-primary' target='_blank'>Live Demo</a>
            </article>

            <article className='portfolio__item'>
                <div className="portfolio__item-image">
                    <img src='assets/portfolio4.jpg' alt="" />
                </div>
                <h3>This is a portfolio item title</h3>
                <a href="https//githublink" className='btn'>Github</a>
                <a href="https//githublink" className='btn btn-primary' target='_blank'>Live Demo</a>
            </article>
        </div>
    </section>
  )
}

export default Portfolio;