import React, { useState, useEffect }   from "react";
import { Button} from 'rsuite';
import axios from 'axios';
import {  useParams } from "react-router-dom";
import "./styles/itemPage.scss";

export const ItemPage = (props) => {

    const [item,setItem] = useState([]);
    const id  = useParams();

    useEffect(() => {
        getItem(id);
     }, []);

    const getItem = (id) => {
        const headers = {
            "Content-Type": "application/json",
        };
        
        axios.get("http://localhost:8080/items/" + id.itemId , { headers})
        .then(response => {
            setItem(response?.data) ;
        });
    };

    return(
       
            <div className="container">
                <div className="item-thumbnails" >            
                </div>  
                <div className="item-images" >
                    <img className="image" src={item.photo} />
                </div>                           
                <div className="item-details" >
                    <h1>{item.name}</h1>
                    <h4>${item.price}</h4>
                    <Button appearance="primary" active>Add to Cart</Button>
                </div>
            </div>
        )   
}

export default ItemPage;