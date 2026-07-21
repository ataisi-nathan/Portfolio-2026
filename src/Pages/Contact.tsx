import { FaFacebookF, FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { type FormEvent, useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import Alert from "../components/alert";

const Contact = () => {
    const form = useRef<HTMLFormElement | null>(null);
    const [isSent, setIsSent] = useState<string>("");

    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!form.current) {
            return;
        }

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then((_result) => {
        // Resets the form after successful submission
            form.current?.reset();

            setIsSent("Message sent successfully!");
            <div className="alert-container">
                <Alert message={isSent} type="success" />
            </div>
        },
        (_error) => {
            setIsSent("Message not sent, please try again.");
            <Alert message={isSent} type="error" />
        });
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