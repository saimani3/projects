import React,{ useRef,useEffect} from 'react'
import './App.css';
import { Img } from "react-image";
import { FaArrowUp } from "react-icons/fa";
import logo from "./images/logo.png";
import { Link } from 'react-router-dom';
import About from './About';
import Services from './Services';
import Contacts from './Contacts';
import Scrolling from './Scrolling';
import Footer from './Footer';
import NavDropdown from 'react-bootstrap/NavDropdown';
const Header = () => {
  const ref = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const handleClick =()=>{
  ref.current.scrollIntoView({behavior:'smooth'});
  }
  const services = () =>{
    ref1.current.scrollIntoView({behavior:'smooth'});
  }
  const about =() =>{
    ref2.current.scrollIntoView({behavior:'smooth'});
  }
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
    <div className="">
        <div className="headerbackground">
        <div className="Header"><Img src={logo} alt="logo" style={{width:"99px",height:"100px",margin:"0px 0px 0px 30px"}}/><h1>NSM HOSPITAL</h1></div>
            <ul>
            <li><NavDropdown title="LOGIN" id="basic-nav-dropdown">
              <NavDropdown.Item href="/Login" id='ulo'>User Login</NavDropdown.Item>
              <NavDropdown.Item href="/Admin" id='ulo'>Admin Login</NavDropdown.Item>
            </NavDropdown></li>
            <Link to="/Register"><li>REGISTER</li></Link>
            <Link href="" onClick={handleClick}><li>CONTACTS</li></Link>
            <Link href="" onClick={services}><li>SERVICES</li></Link>
            <Link href="" onClick={about}><li>ABOUT</li></Link>
            <Link to="/"><li>HOME</li></Link>
            </ul>
          </div>
      <Scrolling />
            <About  ref={ref2}/>
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
};

export default Header