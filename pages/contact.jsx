import React, { useRef } from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import { RiMessengerLine } from 'react-icons/ri';
import { CiFacebook } from 'react-icons/ci';

import emailjs from 'emailjs-com'
import Nav from '@/components/Nav';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_xi3fnzo', 'template_o652leq', form.current, 'K69rhueBnuA9AvgS_')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();

    };

    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className='contact__option'>
                        <HiOutlineMail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5> thuriyac4@gmail.com </h5>
                        <a href="mailto:thuriyac4@gmail.com" target='_blank' rel="noreferrer">Send A Message</a>
                    </article>

                    <article className='contact__option'>
                        <RiMessengerLine className='contact__option-icon' rel="noreferrer" />
                        <h4>Messenger</h4>
                        <h5> Shine </h5>
                        <a href="https://m.me/shine.enoki" target='_blank' rel="noreferrer">Send A Message</a>
                    </article>

                    <article className='contact__option'>
                        <CiFacebook className='contact__option-icon' />
                        <h4>Facebook </h4>
                        <h5> Shine </h5>
                        <a href="https://m.facebook.com/shine.enoki" target='_blank' rel="noreferrer">Send A Message</a>
                    </article>
                </div>
                {/* END OF CONTACT OPTIONS */}

                <form ref={form} onSubmit={sendEmail} >
                    <input type="text" name='name' placeholder='Your Name' required />
                    <input type="email" name='email' placeholder='Your Email' required />
                    <textarea name="message" rows={7} placeholder='Let me know how can I help you' ></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
            <Nav />
        </section>
    )
}

export default Contact;