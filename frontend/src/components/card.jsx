import React, {Component} from 'react';
import {Panel} from 'rsuite';
import { Link } from "react-router-dom";



export class CustomCard extends Component{

    constructor(props){
        super(props);
        
    }
    render(){

        return(

            <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 240 }}>
                <Link to={`/items/${this.props.name}`}>
                    <img src={this.props.photo} height="240" />
                    <Panel header={this.props.name}>
                    <p>
                        <small>
                            {this.props.name}
                            {this.props.price}
                        </small>
                    </p>
                    </Panel>
                </Link>
            </Panel>

        );
    }
}

export default CustomCard;