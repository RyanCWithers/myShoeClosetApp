import React from 'react';
import LoginForm from '../components/LoginForm';

const LoginPage = ({setLoggedIn}) =>{
    return(
        <div className = "container-sm">
            <LoginForm setLoggedIn = {setLoggedIn} />
        </div>
    );
};

export default LoginPage;