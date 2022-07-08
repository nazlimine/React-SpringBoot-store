import React, {Component} from "react";
import { Container ,Content} from 'rsuite';
import CustomCarousel from '../components/carousel';
import CustomPanel from '../components/panel';
import CustomCard from '../components/card';
import axios from 'axios';


export class HomePage extends Component{

    constructor(props){
        super(props);
        this.state = {
            allItems: []
        }
    }
    componentDidMount(){
        const headers = {
            "Content-Type": "application/json",
          };
        
        axios.get('http://localhost:8080/items', { headers })
        .then(response => {this.setState({ allItems: response.data });
        console.log(response)});
    }
    render(){

        return(
            <Container>
                <Content>
                        <CustomPanel>
                        </CustomPanel>
                        <CustomCard 
                            key={item.id}
                            name={item.name}
                            photo={item.photo}
                            price={item.price}> 
                        </CustomCard>   
                </Content>
            </Container>
        )
    }


}

export default HomePage;