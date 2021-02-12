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
        <nav className = "navbar navbar-dark navbar-expand-md" id = "navBar">
            <div className = "container">
                <span className = "navbar-brand">myShoeCloset</span>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#myNav" 
                    aria-controls="myNav" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className = "collapse navbar-collapse justify-content-end" id="myNav">
                    <div className = "navbar-nav">
                        <Link to = "/api/myShoeCloset/user" className = "nav-link nav-item">Home</Link> 
                        <Link to = "/api/myShoeCloset/user/createShoe" className = "nav-link nav-item">Add Shoe</Link>
                        <Link to = "/api/myShoeCloset/login" onClick = {logoutHandler} className = "nav-link nav-item">Logout</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;