import React from 'react';
import { Nav, Navbar, Form, FormControl,Button ,NavDropdown} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch,Link } from "react-router-dom";
import styled from 'styled-components';
import Search from './Search';
const Styles = styled.div`
  .navbar { background-color: #282d32; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: white;
    &:hover { color: dark; }
  }
  .nav-item{
    padding-left:10px;
    padding-right:10px;
    hover:#282d32;
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .navbar-collapse collapse { 
    border-color: lightgreen; 
} 
  .dropdown-item{
    color:black;
    hover:#282d32;
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;


function Header() {
    return (
      <div>
        <Styles>
    <Navbar expand="lg" >
      <Navbar.Brand href="/">Blogspot</Navbar.Brand>
      <Nav.Item><Link to="/gadgets">Gadgets</Link></Nav.Item> 
          <Nav.Item><Link to="/technology">Technology</Link></Nav.Item>
          <Nav.Item><Link to="/food">Food and recepies</Link></Nav.Item> 
          <Nav.Item><Link to="/news">News</Link></Nav.Item>
          <Nav.Item><Link to="/trends">Trending</Link></Nav.Item>
       
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
      
        <Nav className="ml-auto">
        <NavDropdown>
          <Link to="/readings" class="dropdown-item"><i class="fa fa-bookmark-o"></i> My readings</Link>					
					<Link to="/calender" class="dropdown-item"><i class="fa fa-calendar-o"></i> Calendar</Link>
					<Link to="/settings" class="dropdown-item"><i class="fa fa-sliders"></i> Settings</Link>
					<div class="dropdown-divider"></div>
					<Link to="/authenticate" class="dropdown-item"><i class="material-icons"></i> Signin</Link>
				</NavDropdown>
        
        <a href="#" class="nav-item nav-link notifications"><i class="fa fa-bell-o"></i><span class="badge">0</span></a>
		  	<a href="#" class="nav-item nav-link messages"><i class="fa fa-envelope-o"></i><span class="badge">0</span></a>
        <a href="#" class="nav-item nav-link user"><i class="fa fa-user-o"></i><span class="badge"></span></a>
        
        </Nav>
      </Navbar.Collapse>
    </Navbar>
   
  </Styles>
 

</div>

    );
}

export default Header;

