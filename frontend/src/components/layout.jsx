
import React from 'react';
import {Outlet} from 'react-router-dom';
import CustomNavbar from './header';
import CustomMessagebar from './messageBar';

export const Layout = () => {

    return (
            <div>
                <CustomNavbar/>
                <CustomMessagebar/>
                <Outlet />
            </div>
        );
}

export default Layout;
