import { FaFacebookF, FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import React, {useRef} from 'react'
// import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('Y')
    }
    return (
        <div className="contact hero">
            <h2>Contact</h2>
            <div className="socials">
                <a href="https://github.com/ataisi-nathan" target="_blank" className="card">
                    <h4>GitHub</h4>
                    <div className="icon">
                        <FaGithub className="contact-icon"/>
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/ataisi-nathan" target="_blank" className="card">
                    <h4>LinkedIn</h4>
                    <div className="icon">
                        <FaLinkedinIn />
                    </div>
                </a>
                <a href="https://x.com/nathan_ataisi" target="_blank" className="card">
                    <h4>X</h4>
                    <div className="icon">
                        <FaXTwitter />
                    </div>
                </a>
                <a href="https://www.facebook.com/ataisi.nathan.2025" target="_blank" className="card">
                    <h4>Facebook</h4>
                    <div className="icon">
                        <FaFacebookF />
                    </div>
                </a>
            </div>
            <div className="contact-container">
                <form ref={form} onSubmit={sendEmail}>
                    <div className="form-input">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" placeholder="Full-name" id="name" />
                    </div>
                    <div className="form-input">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" placeholder="example@email.com" id="email" />
                    </div>
                    <div className="form-input">
                        <label htmlFor="message">Message</label><br />
                        <textarea name="message" placeholder="Write your message" id="" cols={30} rows={10}></textarea>
                    </div>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;