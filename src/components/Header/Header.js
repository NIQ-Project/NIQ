import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link, NavLink } from 'react-router-dom'
import logo from '../pictures/NavBarLogo.png'

const authenticatedOptions = (
  <Fragment>
    <NavLink to='/lists' className='nav-link px-5'>View Lists</NavLink>
    <NavLink to='/change-password' className='nav-link px-5'>Change Password</NavLink>
    <NavLink to='/sign-out' className='nav-link px-5'>Sign Out</NavLink>
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    <NavLink to='/sign-up' className='nav-link px-5'>Sign Up</NavLink>
    <NavLink to='/sign-in' className='nav-link px-5'>Sign In</NavLink>
  </Fragment>
)

const alwaysOptions = (
  <Fragment>
    <NavLink exact to='/' className='nav-link px-5'>Home</NavLink>
  </Fragment>
)

const Header = ({ user }) => (
  <Navbar style={{ backdropFilter: 'blur(6px)' }} className='fixed-bottom' variant='dark' expand='md'>
    <Navbar.Brand>
      <Link to='/'><img style={{ height: '5vh', marginLeft: '5px' }} src={logo}/></Link>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls='basic-navbar-nav' className='nav-icon' />
    <Navbar.Collapse id='basic-navbar-nav' className='text-center d-flex justify-content-md-end justify-content-center'>
      <Nav>
        {user && (
          <span className='navbar-text mr-2'>Welcome, {user.email}</span>
        )}
        {alwaysOptions}
        {user ? authenticatedOptions : unauthenticatedOptions}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
