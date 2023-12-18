import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

const NewNavbar = () => {
  return (
    <>
    <div className='main' >
        <div className="row">
         <div className=" col-md-4">
          <p className='logo'>logo</p>
         </div>
         <div className="nav-link col-md-8" >
          <nav className='nav'>
            <Link className="link">Home</Link>
            <Link className="link">About</Link>
            <Link className="link">Contact</Link>
            <Link className="link">Home</Link>
            <Link className="link">About</Link>
            <Link className="link">Contact</Link>
          </nav>
               
        
         </div>
      
      </div>
    </div>




    {/* ------------------bottom navbar------ */}
    <div className="main">
      <div className="row">
        <div className="col-md-12">
          <nav className='bottom-nav'>
            <Link className="bottom-link">Home</Link>
            <Link className="bottom-link">About</Link>
            <Link className="bottom-link">Projects</Link>
            <Link className="bottom-link">Skill</Link>
            <Link className="bottom-link">contact</Link>
            <Link className="bottom-link">etc</Link>
          </nav>
        </div>
      </div>
    </div>
     </>
  )
}

export default NewNavbar