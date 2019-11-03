import React, {Component} from 'react'
import { Link, NavLink, withRouter} from 'react-router-dom'
import {Navbar, Nav, NavItem } from 'react-bootstrap'
const Header = () => {
  
  return(
    <Navbar collapseOnSelect bg="light" expand="lg">
      <Nav.Link as={Link} eventKey="1" to='/' className="navbar-brand">Vowels Counter</Nav.Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <div className="mr-auto">
          <Nav.Link eventKey="2" as={Link} to="/history">History</Nav.Link>
        </div>
      </Navbar.Collapse>
    </Navbar>
  )
  
}

export default Header