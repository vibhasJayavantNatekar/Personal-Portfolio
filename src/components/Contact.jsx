import React from 'react'
import './Contact.css'
import FindMe from './FindMe'

const Contact = () => {
    return (
        <>

            <div id='contact' className="section-wrapper contact-wrapper">
                <h1 className='section-heading'> <span className="name">Contact</span></h1>
                <p>Let's Build Something  <span className="name"> together</span></p>
                <h1 className='section-heading' >Get in Touch</h1>
                <p>Email : natekarvibhas@gmail.com</p>
                <p>Phone : +91 9503250265</p>

                <div className="section-container">
                    <form action="">
                        <input type="text" placeholder='Your name ' name='name' />
                        <input type="email" placeholder='Your email ' name='email' />
                        <input type="text" placeholder='Enter Message ' name='message' className='msgbox' />
                        <input type="submit" value="Send Message" className='send_btn' />


                    </form>
                </div>

                <FindMe />



            </div>

        </>
    )
}

export default Contact