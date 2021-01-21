import React from 'react';
import LoginForm from '../components/LoginForm';
import RegistrationForm from '../components/RegistrationForm';

const LoginPage = props =>{
    return(
        <div>
            <LoginForm />
            <RegistrationForm />
        </div>
    )
};

export default LoginPage;