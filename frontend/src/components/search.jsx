import React, {Component} from 'react';
import {Input,InputGroup} from 'rsuite';
import SearchIcon from '@rsuite/icons/Search';

export class CustomSearch extends Component{


    render(){

        return(
            <InputGroup inside >
            <Input />
            <InputGroup.Button>
              <SearchIcon />
            </InputGroup.Button>
          </InputGroup>

        );
    }
}

export default CustomSearch;