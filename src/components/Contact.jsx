
import { useRef } from 'react';
import './Contact.css'
import FindMe from './FindMe'
import emailjs from 'emailjs-com'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_wnr4xrh",
                "template_jqti0xa",
                form.current,
                "yhTfekKKuZQp8J1SZ"
            )
            .then(
                () => {
                    alert("Message Sent Successfully!");
                },
                (error) => {
                    alert("Failed to send message.");
                }
            );
    };
    return (
        <>

            <div id='contact' className="section-wrapper contact-wrapper">
                <h1 className='section-heading'> <span className="name">Contact</span></h1>
                <p>Let's Build Something  <span className="name"> together</span></p>
                <h1 className='section-heading' >Get in Touch</h1>
                <p>Email : natekarvibhas@gmail.com</p>
                <p>Phone : +91 9503250265</p>

                <div className="section-container">
                    <form action="" ref={form} onSubmit={sendEmail}>
                        <input type="text" placeholder='Your name ' name='name' />
                        <input type="email" placeholder='Your email ' name='email' />
                        <textarea
                            placeholder="Enter Message"
                            name="message"
                            className="msgbox"
                            rows="5"
                        ></textarea>
                        <input type="submit" value="Send Message" className='send_btn' />


                    </form>
                </div>

                <FindMe />



            </div>

        </>
    )
}

export default Contact