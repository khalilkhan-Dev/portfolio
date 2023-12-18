import React from 'react'
import './Home.css'
// import { Link } from 'react-router-dom'
// import about1 from '../Images/about1.jpg'
import {FaLinkedinIn} from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs';
import {FaTwitter}from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa';
import logo1 from '../Images/png/logo1.png'
import home2 from '../Images/home2.png'
import resume from '../Images/resume.pdf'


const Home = () => {

  return (
    <>
    
          
    <div className="container"  id='home' >
      <p className='Home-logo'><img className='home-logo-img' src={logo1} alt="" /></p>
      <div className="home-row row">
      <div className="col-md-4">
          <img className='home-img' src={home2} alt="" />
        </div>
        <div className="col-md-8" >

          <h1>Hello my name is khalil khan , <br /> I am a Software Engineer <br /> and a Frontend Developer.</h1>
          <p> I specialize in Web development field and my passion is all about building elegent and professional user interfaces
                 and websites.I have knowledge of all 
                 software related fields As i studied about many technologies related to software development 
                  during my degree and also gain knowledge of specially web development field by working with 
                  different software houses .</p>

            <ul className='home-social' >
              <li className='icon-border'><a href='https://www.facebook.com/profile.php?id=100058956985396&mibextid=ZbWKwL' target={'_blank'} rel="noreferrer" ><FaFacebookF className='home-icons'  /></a> </li>
              <li><a href='https://instagram.com/khalilkhan8028?igshid=ZDdkNTZiNTM='><BsInstagram className='home-icons'  target={'_blank'} rel="noreferrer"  /></a></li>
              <li> <a href='https://www.linkedin.com/in/khalil-khan-1024bb260' ><FaLinkedinIn className='home-icons'  target={'_blank'} rel="noreferrer" /></a>  </li>
              <li><a href='https://twitter.com/KhalilK99380562?t=us3-urewGlSYaXENaZz7Ng&s=09'><FaTwitter className='home-icons'  target={'_blank'} rel="noreferrer" /></a></li>
            </ul>
            <a href='#contact' className='home-btn1' style={{marginRight:"10px"}}> Say Hello</a>
            <a href={resume} download="Resume"  className='home-btn1'>My Resume</a>
        </div>
     
      </div>
    </div>
    {/* end */}
    

    </>
  )
}

export default Home