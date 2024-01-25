import React, { useEffect, useState } from 'react'
import {Navbar,Container,Nav} from 'react-bootstrap';
import logo from '../assets/img/logo.png';
import navIcon1 from '../assets/img/navIcon1.png';
import navIcon2 from '../assets/img/navIcon2.png';
import navIcon3 from '../assets/img/navIcon3.png';

export const NavBar = () => {
  const [activeLink,setActiveLink] = useState('home');
  const [scrolled,setScrolled] = useState(false);

useEffect(() => {
  const onScroll = () => {
    console.log('Scrolling...');
    if (window.scrollY > 50) {
      console.log('ScrollY > 50');
      setScrolled(true);
    } else {
      console.log('ScrollY <= 50');
      setScrolled(false);
    }
  };

  console.log('Adding scroll event listener...');
  window.addEventListener('scroll', onScroll);

  // Cleanup: Remove the event listener when the component unmounts
  return () => {
    console.log('Removing scroll event listener...');
    window.removeEventListener('scroll', onScroll);
  };
}, []); 


  const onUpdateActiveLink=(value)=>{
    setActiveLink(value);
  }

  return (
    <Navbar expand="lg" className={scrolled?"scrolled":""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src= {logo} alt='RJ' height="50px" width="50px"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink==='home'?'active navbar-link':'navbar-link'} onClick={()=>onUpdateActiveLink('home')}>Home</Nav.Link>
            {/* <Nav.Link href="#link"className={activeLink==='Skills'?'active navbar-link':'navbar-link'} onClick={()=>onUpdateActiveLink('Skills')}>Skills</Nav.Link> */}
            {/* <Nav.Link href="#link"className={activeLink==='Team Info'?'active navbar-link':'navbar-link'} onClick={()=>onUpdateActiveLink('Team Info')}>Team Info</Nav.Link> */}
            <Nav.Link href="#link"className={activeLink==='About'?'active navbar-link':'navbar-link'} onClick={()=>onUpdateActiveLink('About')}>About</Nav.Link>
            <Nav.Link href="#contact"className={activeLink==='Contact'?'active navbar-link':'navbar-link'} onClick={()=>onUpdateActiveLink('Contact')}>Contact</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href='https://github.com/Ridham-Jindal'><img src = {navIcon1} alt="github"/></a>
              <a href='https://www.linkedin.com/in/ridham-jindal-06283a279/'><img src = {navIcon2} alt="Linkedin"/></a>
              <a href='https://leetcode.com/Jindal-Ridham/'><img src = {navIcon3} alt="icon"/></a>
            </div>

          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

