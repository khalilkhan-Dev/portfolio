import React from 'react'
import './Skill.css'
import {FaCaretRight } from "react-icons/fa";
import html from '../Images/html.png'
import CSS2 from '../Images/CSS2.png'
import javascript from '../Images/javascript.png'
import react from '../Images/react.png'
import java from '../Images/java.png'
import bootstrap from '../Images/bootstrap.png'
import redux from '../Images/redux.webp'
import sassy from '../Images/sassy.png'
import github from '../Images/github2.png'
import wordpress from '../Images/wordpress.png'







const SkillEducation = () => {
  return (
    <>
    <div className="container" id='skills&edu' style={{marginTop:"150px"}}>
{/* ------------------------------------Qualification----------- */}
      <div className="row" >
        <h1 className='experience'>Qualification</h1>
        <div className="qualification col-md-4">
          <h3>Matric</h3>
        <p style={{marginRight:'0%'}}><FaCaretRight/>I Completed my Matriculation from The Educators school Rahim yar khan , punjab , pakistan. </p>
        <p>Passing Year (2014-2016)</p>
        </div>
        <div className="qualification col-md-4">
        <h3>Intermediate</h3>
        <p style={{marginRight:'5%'}}><FaCaretRight/>I Complete my Intermediate (Fsc pre eng.) from The Superior Group of colleges Rahim yar khan , Punjab , Pakistan. </p>
        <p>Passing Year (2016-2018)</p>
        </div>
        <div className="qualification col-md-4">
        <h3>Graduation</h3>
        <p style={{marginRight:'5%'}}><FaCaretRight/>I Completed my Bachelor's Degree in Software Engineering from The Khawaja Fareed University of Engineering and Information Technology(KFUEIT). </p>
        <p>Passing Year (2018-2022)</p>
        </div>

      </div>
      {/* -------------------------------Experience-------- */}
      <div className="row mt-5">
        <h1 className='experience mb-5'>Skills & Experience</h1>
        <p>I have experienced my web development journey with differnet Software Houses .
           I gain too much knowledge and experience from them.
           Currently I have 1+ years of Experience in the field of development and with the passage of time i am learning new technologies.
             </p>
             <h3 >Here's some of my experiences</h3>
             <p ><FaCaretRight/> 1+ years of experience in Front end development </p>
             <p ><FaCaretRight/> 6 months of experience in React js</p>
             <p ><FaCaretRight/> 3 months of experience as a laravel developer </p>
             {/* ----------------------------Internships------ */}
             <h3 >Internships</h3>
             <p ><FaCaretRight/> 3 Months of internship in Frontend development from House of code RYK, Punjab,pakistan. </p>
             <p ><FaCaretRight/> 3 Months of internship in laravel from House of code RYK, Punjab,pakistan. </p>
             <p ><FaCaretRight/> 3 Months of internship in React js from Hello world Technologies RYK, Punjab,pakistan. </p>

             <h3 style={{marginTop:"50px"}} >Here's Some of technologies that i have been working with and experiencing them.</h3>

{/* -----------------------------------------language-icons--------- */}
        <div className="row">
          <div className="col-md-12" style={{display:"flex", flexWrap:"wrap", marginTop:"5%"}}>

            <div className="exp-icons">
            <div className="Icons">
            <img className='html' src={html} alt="" />
            <p>HTML 5</p>
            <p>Grip: 90%</p>
            <div style={{backgroundColor:"white",width:"90%", marginLeft:"5%", marginBottom:"10px", borderRadius:"5px"}}>
              <div style={{background:"red",color:"white", width:"90%" ,height:"13px" , textAlign:"right", fontSize:"10px", borderRadius:"5px"}}>90%</div>
            </div>
            </div>
            </div>

            <div className="exp-icons">
            <div className="Icons">
            <img className='html' src={CSS2} alt="" />
            <p>CSS 3</p>
            <p>Grip: 80%</p>
            <div style={{backgroundColor:"white",width:"90%", marginLeft:"5%", marginBottom:"10px", borderRadius:"5px"}}>
              <div style={{background:"lightSkyBlue",color:"black", width:"80%" ,height:"13px" , textAlign:"right", fontSize:"10px", borderRadius:"5px"}}>80%</div>
            </div>            
            </div>
            </div>

            <div className="exp-icons">
            <div className="Icons">
            <img className='html' src={sassy} alt="" />
            <p>Saas</p>
            <p>Grip: 80%</p>
            <div style={{backgroundColor:"white",width:"90%", marginLeft:"5%", marginBottom:"10px", borderRadius:"5px"}}>
              <div style={{background:"pink",color:"black", width:"80%" ,height:"13px" , textAlign:"right", fontSize:"10px", borderRadius:"5px"}}>80%</div>
            </div>            
            </div>
            </div>
            
           
            <div className="exp-icons">
            <div className="Icons">
            <img className='html' src={bootstrap} alt="" />
            <p>BootStrap 5</p>
            <p>Grip: 85%</p>
            <div style={{backgroundColor:"white",width:"90%", marginLeft:"5%", marginBottom:"10px", borderRadius:"5px"}}>
              <div style={{background:"rgb(76, 76, 158)",color:"white", width:"85%" ,height:"13px" ,textAlign:"right", fontSize:"10px", borderRadius:"5px"}}>85%</div>
            </div>
            </div>
            </div>


            <div className="exp-icons">
            <div className="Icons">
            <img className='html' src={wordpress} alt="" />
            <p>Wordpress</p>
            <p>Grip: 75%</p>
            <div style={{backgroundColor:"white",width:"90%", marginLeft:"5%", marginBottom:"10px", borderRadius:"5px"}}>
            <div style={{background:"lightSkyBlue",color:"black", width:"90%" ,height:"13px" ,textAlign:"right", fontSize:"10px", borderRadius:"5px"}}>90%</div>
            </div>
            </div>
            </div>

            <div className="exp-icons">
            <div className="Icons">
            <img className='html' src={javascript} alt="" />
            <p>Java Script(ES6+)</p>
            <p>Grip: 65%</p>
            <div style={{backgroundColor:"white",width:"90%", marginLeft:"5%", marginBottom:"10px", borderRadius:"5px"}}>
              <div style={{background:"yellow",color:"black", width:"65%" ,height:"13px" , textAlign:"right", fontSize:"10px",borderRadius:"5px"}}>65%</div>
            </div>
            </div>
            </div>

            <div className="exp-icons">
            <div className="Icons">
            <img className='html' src={react} alt="" style={{backgroundColor:"black", borderRadius:"50px"}} />
            <p>React Js</p>
            <p>Grip: 70%</p>
            <div style={{backgroundColor:"white",width:"90%", marginLeft:"5%", marginBottom:"10px", borderRadius:"5px"}}>
              <div style={{background:"black",color:"white", width:"70%" ,height:"13px" ,textAlign:"right", fontSize:"10px", borderRadius:"5px"}}>70%</div>
            </div>
            </div>
            </div>

            <div className="exp-icons">
            <div className="Icons">
            <img className='html' src={redux} alt="" style={{borderRadius:"50px"}} />
            <p>Redux Toolkit</p>
            <p>Grip: 80%</p>
            <div style={{backgroundColor:"white",width:"90%", marginLeft:"5%", marginBottom:"10px", borderRadius:"5px"}}>
              <div style={{background:"black",color:"white", width:"80%" ,height:"13px" ,textAlign:"right", fontSize:"10px", borderRadius:"5px"}}>80%</div>
            </div>
            </div>
            </div>  

            <div className="exp-icons">
            <div className="Icons">
            <img className='html' src={java} alt="" />
            <p>JAVA (oop)</p>
            <p>Grip: 85%</p>
            <div style={{backgroundColor:"white",width:"90%", marginLeft:"5%", marginBottom:"10px", borderRadius:"5px"}}>
              <div style={{background:"black",color:"white", width:"85%" ,height:"13px" ,textAlign:"right", fontSize:"10px", borderRadius:"5px"}}>85%</div>
            </div>
            </div>
            </div>

            <div className="exp-icons">
            <div className="Icons">
            <img className='html' src={github} alt="" />
            <p>Git & Github</p>
            <p>Grip: 90%</p>
            <div style={{backgroundColor:"white",width:"90%", marginLeft:"5%", marginBottom:"10px", borderRadius:"5px"}}>
              <div style={{background:"rgb(61, 58, 54)",color:"white", width:"90%" ,height:"13px" ,textAlign:"right", fontSize:"10px", borderRadius:"5px"}}>90%</div>
            </div>
            </div>
            </div>

            

                   
          </div>
        </div>
        
      </div>
    </div>
    </>
  )
}

export default SkillEducation