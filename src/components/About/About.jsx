import React from 'react'
import './About.css'
// import about1 from '../Images/about1.jpg'
import home3 from '../Images/home3.png'
import {FaCaretRight } from "react-icons/fa";
import resume from '../Images/resume.pdf'

const About = () => {
  return (
    <>
      <div className="container" id='about' style={{marginTop:"150px"}}>
        <h1 style={{ margin:"0% 0 25px 15px", fontWeight:"bold"}}>About Me</h1>
        <div className="row" style={{margin:"0px"}}>
        
        <div className="col-md-4"  >
         <img className='aboutimg2' src={home3} alt="" />
         </div>
          <div className="col-md-8"   >
            <div className="aboutme" style={{margin:"0", }}>
            <h3 style={{margin:"0", fontFamily: "Lucida Sans"}} >About Myslef</h3>
            <p  style={{fontFamily:"Lucida Bright"}}>Hello my name is Khalil-Ur-Rehman located in Pakistan , I studied Bachelor's Degree in software
               engineering from khawaja Fareed University , Rahim yar khan, punjab. I specialize in Web
                development field and my passion is all about building elegent and professional user interfaces
                 and websites.My communication skills are great and more than that , I have knowledge of all 
                 software related fields As i studied about many technologies related to software development 
                  during my degree and also gain knowledge of specially web development field by working with 
                  different software houses .I spend my free time by experiencing and learning new technologies related to my field and career . I am interested in the entire frontend development spectrum and working on ambitious
                   projects with positive people.  </p>
                   <h5>Here are a few technologies i have been working with recently:</h5>
             <div className='about-skiled' style={{width:"100%", }}>
               <p style={{marginRight:'5%'}}><FaCaretRight />HTML5</p>
               <p style={{marginRight:'8%'}}><FaCaretRight/>CSS3</p>
               <p style={{marginRight:'8%'}}><FaCaretRight/>Saas</p>
               <p style={{marginRight:'8%'}}><FaCaretRight/>Javascript(ES6+)</p>
               <p style={{marginRight:'8%'}}><FaCaretRight/>Bootstrap 5</p>
               <p style={{marginRight:'8%'}}><FaCaretRight/>React js</p>
               <p style={{marginRight:'8%'}}><FaCaretRight/>Redux</p>
               <p style={{marginRight:'8%'}}><FaCaretRight/>Firebase</p>
               <p style={{marginRight:'8%'}}><FaCaretRight/>Git & Github</p>
             </div>
            </div>
            <a className='about-btn1' href={resume} download="resume" >Download CV</a>
          </div>
          

        </div>

        
         
          
          <div className="row">
            <div className="col-md-12">
          
            </div>
          </div>

      </div>

    
    </>


  )
}

export default About




