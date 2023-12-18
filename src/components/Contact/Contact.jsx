import React from 'react'
import './Contact.css'
// import { Link } from 'react-router-dom';
import { FaFacebookF } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';

import { FaWhatsapp } from 'react-icons/fa';
import {FaTwitter}from 'react-icons/fa'
import {FaLinkedinIn} from 'react-icons/fa'
 




const Contact = () => {
  return (
    <>
    <div className="container" id='contact' style={{marginTop:"150px"}} >
      <div className="row">
      <h1>CONTACT</h1>
      <h4>Feel free to contact me via submitting the form or with Socials.
         I will get back to you as soon as possible.</h4>
         <div className="col-md-8"  >
          <form action='https://formspree.io/f/xrgvagkl'  method="POST" >
            <label htmlFor="name">Name</label>
            <input type="text" name='name'  className='form-name' placeholder='Enter Your Name'/><br />
            <label htmlFor="email">Email</label>
            <input type="text" name="email" className='form-email' placeholder='Enter Your Email' /><br />
            <label htmlFor="msg">Message</label>
            <textarea className='form-msg' name='message' placeholder='Enter Your Message'></textarea>
            <button className='form-btn' type='submit'>Send email</button>
          </form>
         </div>
         {/* ------------------------------------------------------- */}
         <div className="col-md-4" >
       
         <a href='https://www.facebook.com/profile.php?id=100058956985396&mibextid=ZbWKwL' target="_blank" className='contact-links' >
            <i className='icons'><FaFacebookF/>Facebook</i>
          </a>
          <a href='https://instagram.com/khalilkhan8028?igshid=ZDdkNTZiNTM=' target="_blank" className='contact-links'>
            <i className='icons'><   BsInstagram/> Instagram</i>
          </a>
          <a href='https://twitter.com/KhalilK99380562?t=us3-urewGlSYaXENaZz7Ng&s=09' target="_blank" className='contact-links' >
            <i className='icons'><  FaTwitter/> Twitter</i>
          </a>
          <a href='https://www.linkedin.com/in/khalil-khan-1024bb260' target="_blank"  className='contact-links'>
            <i className='icons'><  FaLinkedinIn/> LinkedIn</i>
          </a>
          <a href="https://wa.me/923078334001" target='_blank' className='contact-links'>
            <i className='icons'><  FaWhatsapp/> WhatsApp</i>
          </a>
          
          
     
            
          

         </div>
      </div>


    </div>
    </>
  )
}

export default Contact