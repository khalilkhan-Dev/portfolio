import React from 'react'
import { Link } from 'react-router-dom'
import {FaLinkedin} from 'react-icons/fa'
import { FaInstagramSquare } from 'react-icons/fa';
import {FaTwitter}from 'react-icons/fa'
import { FaFacebookSquare } from 'react-icons/fa';
import { FaUserAlt } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { FaMailBulk } from 'react-icons/fa';





import './Footer.css'

const Footer = () => {
  return (
    <>
    <div className="footer_main" style={{marginTop:'150px'}}>
      <div className="container-fluid">
        <div className="row">
         
          <div className="footer_section2 col-md-4 ">
            <h2>Links</h2>
            <ul className='footer_social'>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills&edu">Experience</a></li>
            <li><a href="#contact">Contact us</a></li>
         </ul>
          </div>

          <div className="footer_section2 col-md-4 ">
            <h2>Keep Connected</h2>
            <ul className='footer_social'>

              <li><a href='https://www.facebook.com/profile.php?id=100058956985396&mibextid=ZbWKwL' target="_blank" ><FaFacebookSquare className='footericons' />Connect through Facebook</a> </li>
              <li><a href='https://instagram.com/khalilkhan8028?igshid=ZDdkNTZiNTM=' target="_blank"><FaInstagramSquare className='footericons'  />DM us on Instagram</a></li>
              <li> <a href='https://www.linkedin.com/in/khalil-khan-1024bb260' target="_blank" >< FaLinkedin className='footericons' />Visit Linkedin</a>  </li>
              <li><a href='https://twitter.com/KhalilK99380562?t=us3-urewGlSYaXENaZz7Ng&s=09' target="_blank"><FaTwitter className='footericons' />Connect through twitter</a></li>
            </ul>
          </div>

          <div className="footer_section3 col-md-4 ">
            <h2>Contact Information</h2>
            <ul className='footer_social'>
              <li><FaUserAlt className='footericons' /> khalil khan</li>
              <li><FaHome className='footericons' /> Thalli road , Rahim yar khan, Pakistan</li>
              <li><FaPhone className='footericons' />+923078334001</li>
              <li><FaMailBulk className='footericons' />khalilkhankk3272711@gmail.com</li>
            </ul>
          </div>

        </div>
        
      </div>
      
    </div>
    <div className="copyrightrow" bg success >Design and built by the khalil ur rehman khan , Rahim yar khan , Punjab Pakistan. </div>

    </>
  )
}

export default  Footer