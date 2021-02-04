import React from 'react';
import {Link} from '@reach/router';
import axios from 'axios';

const Navbar = props =>{
    
    const logoutHandler = () =>{
        axios.post("http://localhost:8000/api/myShoeCloset/logout/", {}, {withCredentials: true})
            .then((res) => {
                console.log(res);
                document.cookie = "isLoggedIn=;Max-Age=0";
            })
            .catch((err) => console.log(err))
    };

    return(
        <nav className = "navbar navbar-dark navbar-expand" id = "navBar">
            <div className = "container ">
                <span className = "navbar-brand">myShoeCloset</span>
                <div className = "navbar-nav justify-content-end">
                    <Link to = "/api/myShoeCloset/user" className = "nav-link nav-item">Home</Link> 
                    <Link to = "/api/myShoeCloset/user/createShoe" className = "nav-link nav-item">Add Shoe</Link>
                    <Link to = "/api/myShoeCloset/login" onClick = {logoutHandler} className = "nav-link nav-item">Logout</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;