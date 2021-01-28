import React from 'react';
import axios from 'axios';
import {navigate} from '@reach/router';

const LogoutButton = () =>{

    const onClickHandler = () =>{
        axios.post("http://localhost:8000/api/myShoeCloset/logout/", {}, {withCredentials: true})
            .then((res) => {
                console.log(res);
                document.cookie = "name=isLoggedIn;Max-Age=0";
                navigate('/api/myShoeCloset/login');
            })
            .catch((err) => console.log(err))
    };

    return(
        <button onClick = {onClickHandler}>Logout</button>
    );
};

export default LogoutButton;