import React from 'react';

import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NavBar = () => {
  return (
    <Navbar sticky="top" expand="lg" className="navbar">
      <Navbar.Brand className="navbar--brand" to='/'><NavLink to="/"><b className="navbar--brand_hover">HOLIDAZE.</b></NavLink></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggle" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="m-auto text-center">
          <NavLink className='container__Nav--link nav-link' to='/'>Home</NavLink>
          <NavLink className='container__Nav--link nav-link' to='/contact'>Contact</NavLink>
          <NavLink className='container__Nav--link nav-link' to='/establishments'>Establishments</NavLink>
        </Nav>
        <Nav className="m-auto text-center">
          <NavLink className='container__Nav--link nav-link' to='/login'>Login</NavLink>
          </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar;