import React from 'react'
import './Projects.css'
import about1 from '../Images/about1.jpg'
import moviflix from '../Images/moviflix.PNG'
import services from '../Images/IT-services.PNG'
import leatherfaux from '../Images/leatherfaux.PNG'
import sportblog from '../Images/sportblog.PNG'
import protiengrind from '../Images/protiengrind.PNG'

const Projects = () => {
  return (
    <>
    <div className="container" id='project' style={{marginTop:"150px"}}>
      <h1 style={{ marginBottom:"25px"}}>My Recent Projects</h1>

      <div className="row" >
      <div className="col-md-4" >
        <div className="cards">
        <img className='card-img' src={moviflix} alt="" />
        <p>This is Netflix clone website in react js in which i use API's for data and Firebase as a backend.</p>

        <a href="https://khalilnetflix.netlify.app/" target='_blank'><button className='card-btn1'  >Demo</button></a>
        <a href="https://github.com/khalilkhan-Dev/Netflix-Clone" target='_blank'><button className='card-btn2' >Code</button></a>
        
        </div>
        </div>

        <div className="col-md-4" >
        <div className="cards">
        <img className='card-img' src={services} alt="" />
        <p>This is IT-services providing website in Bootstrap and AOS librabry for animation.</p>
              <a href="https://khalilkhan-dev.github.io/IT-Services/" target='-blank'><button className='card-btn1'  >Demo</button></a>
              <a href="https://github.com/khalilkhan-Dev/IT-Services" target='-blank'><button className='card-btn2' >Code</button></a>
        </div>
        </div>

        <div className="col-md-4" >
        <div className="cards">
        <img className='card-img' src={leatherfaux} alt="" />
        <p>Leatherfaux is an e-commerce website which i created using wordpress with customization</p>
              <button className='card-btn1'  >Demo</button>
              <button className='card-btn2' >Code</button>
        </div>
        </div>

      </div>

      {/* ------------row2----------- */}

      <div className="row2 row" >
      <div className="col-md-4" >
        <div className="cards">
        <img className='card-img' src={sportblog} alt="" />
        <p>SportsBlog is an blogging site which i created using wordpress for uploading sports blogs</p>
              <button className='card-btn1'  >Demo</button>
              <button className='card-btn2' >Code</button>
        </div>
        </div>

        <div className="col-md-4" >
        <div className="cards">
        <img className='card-img' src={protiengrind} alt="" />
        <p>Protiengrind in an e-commerce store for selling protien powders which i built using html,css,js </p>
              <button className='card-btn1'  >Demo</button>
              <button className='card-btn2' >Code</button>
        </div>
        </div>

        <div className="col-md-4" >
        <div className="cards">
        <img className='card-img' src={about1} alt="" />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At odio mollitia saepe, adipisci velit explicabo?</p>
              <button className='card-btn1'  >Demo</button>
              <button className='card-btn2' >Code</button>
        </div>
        </div>

      </div>

    </div>
    </>
  )
}

export default Projects