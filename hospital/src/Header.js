import React,{ useRef,useEffect} from 'react'
import './App.css';
import { FaArrowUp } from "react-icons/fa";
import { Img } from "react-image";
import logo from "./images/logo.png";
import { Link } from 'react-router-dom';
import About from './About';
import Services from './Services';
import Doctors from './Doctors';
import Contacts from './Contacts';
import Scrolling from './Scrolling';
import Footer from './Footer';
const Header = () => {
  const ref = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const handleClick =()=>{
  ref.current.scrollIntoView({behavior:'smooth'});
  }
  const services = () =>{
    ref1.current.scrollIntoView({behavior:'smooth'});
  }
  const about =() =>{
    ref2.current.scrollIntoView({behavior:'smooth'});
  }
  const doctors =() =>{
    ref3.current.scrollIntoView({behavior:'smooth'});
  }
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
    <div className="">
        <div className="headerbackground">
            <div className="Header"><Img src={logo} alt="logo" style={{width:"99px",height:"100px",margin:"0px 0px 0px 10px"}}/><h1>NSM HOSPITAL</h1></div>
        <div className="list">
        <ul>
        <Link to="/Login"><li>LOGOUT</li></Link>
        <Link to="" onClick={handleClick}><li>CONTACTS</li></Link>
        <Link to="" onClick={services}><li>SERVICES</li></Link>
        <Link to="" onClick={doctors}><li>DOCTORS</li></Link>
        <Link to="/Doctorbook"><li>BOOK APPOINTMENT</li></Link>
        <Link to="" onClick={about}><li>ABOUT</li></Link>
        <Link to="/Home"><li>HOME</li></Link>
      </ul></div></div>
      <Scrolling />
            <About  ref={ref2}/>
            <Doctors ref={ref3}/>
            <Services ref={ref1} />
      <Contacts ref={ref}/>
      <Footer />
        <FaArrowUp 
        onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}
        style={{
          position: 'fixed',
          fontSize:'30px',
          bottom: '40px',
          right: '40px',
        }}
        >
      </FaArrowUp>
      </div>
  )
}

export default Header