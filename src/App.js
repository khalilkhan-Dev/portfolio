import './App.css';
import About from "./components/About/About";
import Home from "./components//Home/Home";
import Contact from "./components/Contact/Contact";
import SkillEducation from './components/SkillEducation/SkillEducation'
import Project from './components/Projects/Projects'
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
    <Navbar/> 
    <Home/>
    <About/>
    <SkillEducation/>
    <Project/>
    <Contact/>  
    <Footer/>   
    </>
  );
}

export default App;
