import React, {Component} from 'react';
import {Carousel} from 'rsuite';
import "./assets/styles.scss";


export class CustomCarousel extends Component{


    render(){


        return(

            <Carousel shaded>
                    <img src={require("./assets/carousel2.jpg")} height="200" />
                    <img src={require("./assets/carousel1.jpg")} height="200" />

            </Carousel>

        );
    }
}

export default CustomCarousel;