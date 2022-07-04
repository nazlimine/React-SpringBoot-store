
import React, {Component} from 'react';
import { Nav, Navbar,Dropdown } from 'rsuite';
import {Link} from 'react-router-dom';
import CustomSearch from './search';
import "./assets/styles.scss";

export class NavbarBootstrap extends Component{

  
    render(){

        return (
           <Navbar appearance="subtle">
               <Navbar.Brand  href="home"><img src={require("./assets/logo.png")}></img></Navbar.Brand>
               <Nav.Item>
                <Dropdown title="All Categories">
                    <Dropdown.Item>Women</Dropdown.Item>
                    <Dropdown.Item>Men</Dropdown.Item>
                    <Dropdown.Item>Shoes</Dropdown.Item>
                    <Dropdown.Item>Electronics</Dropdown.Item>
                </Dropdown>
                </Nav.Item>
               
                <Nav.Item>
                    <CustomSearch></CustomSearch>
                </Nav.Item>
                <Nav pullRight>
                    <Nav.Item eventKey="user"><Link to="user">My Account</Link></Nav.Item>
                    <Nav.Item to="cart" eventKey="news"><Link to="cart">Shopping Cart</Link></Nav.Item>
               </Nav>
          </Navbar>

        );
    }



}

export default NavbarBootstrap;
