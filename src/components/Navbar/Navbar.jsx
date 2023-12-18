import React from 'react'
import './Navbar.css'
import { FaUserAlt } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { GiSkills } from 'react-icons/gi';
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import  logo1 from '../Images/png/logo1.png'

const Navbar = () => {
  return (
    <>

<div className='conatainer-fluid top-navbar' >
<div className="row">
 <div className="col-md-2">
   <p className='logo'><a href='#home'><img className='logo-img' src={logo1} alt="" /></a></p>
 </div>

<div className="col-md-10">
<div className="navbar-links">
<div className="links">  <a className="nav-link active" aria-current="page" href='#home' >Home</a>
</div>

<div className="links"><a className="nav-link active" aria-current="page" href='#about'>About</a>
</div>

<div className="links">  <a className="nav-link active" aria-current="page" href="#skills&edu">Skills and Education</a>
</div>

<div className="links"><a className="nav-link active" aria-current="page" href="#project">Projects</a>
</div>

<div className="links"> <a className="nav-link active" aria-current="page" href="#contact"  >Contact</a>
</div>

</div>   
</div>        
</div>
</div>



{/* bottom navbarrr */}
<nav className='container-fluid bottom-navbar'>
<div className='second-nav' >
  <div className="nav-icons"><a className='link'  href='#home'><FaHome/><p>Home</p></a></div>
  <div className="nav-icons"><a className='link'  href='#about'><FaUserAlt/><p>About</p></a></div>
  <div className="nav-icons"><a className='link'  href='#skills&edu'><GiSkills/><p>Experience</p></a></div>
  <div className="nav-icons"><a className='link'  href='#project'><AiOutlineFundProjectionScreen/><p>Projects</p></a></div>
  <div className="nav-icons"><a className='link'  href='#contact'><FaPhone/><p>Contacts</p></a></div>
</div>
</nav>

    </>
  )
}

export default Navbar


