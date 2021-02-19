import React from 'react';
import {Link} from '@reach/router';
import logoutHandler from '../components/logouthandler';

const Navbar = props =>{

    return(
        <nav className = "navbar navbar-dark navbar-expand-md mb-5" id = "navBar">
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
                        <Link to = "/api/myShoeCloset/user/account" className = "nav-link nav-item">Account</Link>
                        <Link to = "/api/myShoeCloset/user/createShoe" className = "nav-link nav-item">Add Shoe</Link>
                        <Link to = "/api/myShoeCloset/login" onClick = {logoutHandler} className = "nav-link nav-item">Logout</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;