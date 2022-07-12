import React, { useState, useEffect }  from "react";
import { Container, Button, Content} from 'rsuite';
import axios from 'axios';
import "./styles/indexPage.scss";
import {Link} from 'react-router-dom';

export const HomePage = () => {

    const [allItems,setAllItems] = useState([]);

    useEffect(() => {
        getItems();
     }, []);

    const getItems = () => {

        const headers = {
            "Content-Type": "application/json",
          };
        
        axios.get('http://localhost:8080/items', { headers })
        .then(response => {
            setAllItems(response?.data) ;});
    };
    
    return(
        
            <Container>
                    <div className="image-container">
                        <div className="content">
                        <h1>New Items</h1>
                        <Button className="first-btn"><Link to="/category/62c87be14c8377ed352a3e3d">Shop Womens</Link></Button>
                        <Button className="second-btn"><Link to="/category/62c87bf84c8377ed352a3e3f">Shop Mens</Link></Button>
                        </div>
                        <img className="image" src={require("../components/assets/images/carousel3.jpg")}></img>
                    </div>
                    <h1>New Comers</h1>
                    <Content className="container">
                        <div className="card-container">
                        {allItems &&
                                allItems.map(item => 
                                    <Link to={`/items/${item.id}`}>
                                        <div className="card" >
                                            <img src={item.photo} />
                                            <h5>{item.name}
                                            </h5>
                                        </div>
                                    </Link>
                        )}  
                        </div>
                    </Content>
            </Container>
                            
        )
    }



export default HomePage;