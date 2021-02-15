import React, {useState} from 'react';
import axios from 'axios';
import RegistrationForm from '../components/RegistrationForm';
import { navigate } from '@reach/router';

const RegistrationPage = props =>{
    const initialState = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    };
    
    const [errs, setErrs] = useState('');

    const onSubmitHandler = registeredUser =>{
        axios.post("http://localhost:8000/api/myShoeCloset/register", registeredUser)
            .then(res => {
                if(res.data.errors){
                    setErrs(res.data.errors);
                    console.log(errs);
                } else {
                    alert("Succesful registration!");
                    navigate("/api/myShoeCloset/login");
                }
            })
            .catch(err => console.log(err));
    };

    return(
        <div className = 'container-sm'>
            <RegistrationForm 
                initialState = {initialState} 
                onSubmitProp = {onSubmitHandler} 
                errs = {errs} 
                passwordHidden = {false}
                formTitle = "Register User"
            />
        </div>
    );
};

export default RegistrationPage;