
import React, {Component} from 'react';
import { Nav, Navbar,Dropdown } from 'rsuite';
import {Link} from 'react-router-dom';
import CustomSearch from './search';
import axios from 'axios';
import "./assets/styles.scss";

export class NavbarBootstrap extends Component{

    constructor(props){
        super(props);
        this.state = {
            allCategories: []
        }
    }
    componentDidMount(){
        const headers = {
            "Content-Type": "application/json",
            
            
          };
        

        axios.get('http://localhost:8080/categories', { headers })
        .then(response => {this.setState({ allCategories: response.data });
        console.log(response)});
    }
  
    render(){

        return (
           <Navbar appearance="subtle">
               <Navbar.Brand  href="home"><img src={require("./assets/logo.png")}></img></Navbar.Brand>
               <Nav.Item>
                <Dropdown title="All Categories">
                    { this.state.allCategories.map(item => <Dropdown.Item key={item.id}> { item.name} </Dropdown.Item> )}                
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
