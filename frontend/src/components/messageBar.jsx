
import React from 'react';
import {Navbar} from 'rsuite';
import "./assets/styles/messageBar.scss";

export const CustomMessagebar = () => {

    return (
           <Navbar className='messagebar'>
            <p>Free shipping on orders over 40$</p>
          </Navbar>
        );
}

export default CustomMessagebar;
