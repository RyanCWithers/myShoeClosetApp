import React from 'react';
import {Link} from '@reach/router';

const Navbar = props =>{
    return(
        <div>
            <Link to = "/api/myShoeCloset/user"><span>Home</span></Link>
        </div>
    );
};

export default Navbar;