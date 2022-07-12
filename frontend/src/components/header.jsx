
import React,  {useState, useEffect } from 'react';
import { Nav, Navbar} from 'rsuite';
import {Link} from 'react-router-dom';
import CustomSearch from './search';
import axios from 'axios';
import "./assets/styles/header.scss";

export const CustomNavbar = () => {

    const [allCategories,setAllCategories] = useState([]);

    useEffect(() => {
        getAllCategories();
     }, []);

    const getAllCategories = () => {
        const headers = {
            "Content-Type": "application/json",
          };
        
        axios.get('http://localhost:8080/categories', { headers })
        .then(response => {setAllCategories(response?.data)})
    }

    return (
           <Navbar appearance="subtle">
             <Nav>
                { allCategories.map(item => 
                    <Nav.Item key={item.id}>
                        <Link to={`category/${item.id}`} end>{ item.name} </Link> 
                    </Nav.Item>)
                }
            </Nav> 
            <Nav>
                <Nav.Item>
                    <Link to="home">
                        <img src={require("./assets/images/logo.png")}></img>
                    </Link>
                </Nav.Item>
            </Nav>
            <Nav pullRight>
                <Nav.Item>
                    <CustomSearch></CustomSearch>
                </Nav.Item>
                
                <Nav.Item eventKey="login"><Link to="login">Login</Link></Nav.Item>
                <Nav.Item to="cart" eventKey="news"><Link to="cart">Cart</Link></Nav.Item>
            </Nav>
          </Navbar>
        );
}

export default CustomNavbar;
