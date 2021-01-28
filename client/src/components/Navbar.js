import React from 'react';
import {Link} from '@reach/router';
import LogoutButton from '../components/LogoutButton';

const Navbar = props =>{
    return(
        <div>
            <Link to = "/api/myShoeCloset/user"><span>Home</span></Link>
            <LogoutButton />
        </div>
    );
};

export default Navbar;