import React from 'react';
import LoginForm from '../components/LoginForm';
import RegistrationForm from '../components/RegistrationForm';

const LoginPage = ({setLoggedIn}) =>{
    return(
        <div>
            <LoginForm setLoggedIn = {setLoggedIn} />
            <RegistrationForm />
        </div>
    )
};

export default LoginPage;