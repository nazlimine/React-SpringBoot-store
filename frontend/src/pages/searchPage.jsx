import React, { useState, useEffect } from "react";
import { Container ,Content, Sidebar,CheckTree} from 'rsuite';
import axios from 'axios';
import {  useParams } from "react-router-dom";


export const SearchPage = () => {

    const [search,setSearch] = useState([]);

    const id  = useParams();

    useEffect(() => {
        getSearch(id);
     }, []);

    const getSearch = (id) => {
        const headers = {
            "Content-Type": "application/json",
          };
        
        axios.get('http://localhost:8080/search/'+id.categoryId, { headers })
        .then(response =>
        {setSearch(response?.data);})
        
    }


    return(
            <Container>
                <Sidebar>
                    <CheckTree defaultExpandAll defaultValue={[2, 38]}  />
                </Sidebar>
                <Content>
                </Content>
            </Container>
        )
}

export default CategoryPage;