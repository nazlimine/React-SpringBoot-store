import React, { useState, useEffect } from "react";
import { Container ,Content} from 'rsuite';
import axios from 'axios';
import {  useParams } from "react-router-dom";
import "./styles/categoryPage.scss";

export const CategoryPage = () => {

    const [category,setCategory] = useState([]);

    const id  = useParams();

    useEffect(() => {
        getCategory(id);
     },[id]);

    const getCategory = (id) => {
        const headers = {
            "Content-Type": "   application/json",
          };
        
        axios.get('http://localhost:8080/category/'+id.categoryId, { headers })
        .then(response => {
            if(response.status==200  || response.status==304){
                setCategory(response.data);
            }
            })
    }

    return(
            <Container>
                <Content className="container">
                        <h1>All {category.name}</h1>
                        <div className="card-container">
                        {category.subcategories &&
                                category.subcategories.map(item => 
                                    <div className="card" >
                                        <img src={item.photo} height="240" />
                                        <h5 >{item.name}</h5>
                                    </div>
                        )}  
                         </div>
                   
               </Content>
            </Container>
        )
}

export default CategoryPage;