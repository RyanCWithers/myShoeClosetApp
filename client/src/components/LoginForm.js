import React, {useState} from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const LoginForm = (props) =>{

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [errs, setErrs] = useState('');

    const onSubmitHandler = (e) =>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/myShoeCloset/login/", 
            {email, password},
            {withCredentials: true}
            )
            .then(res => {
                console.log(res);
                if(res.data === "Invalid login attempt!"){
                    setErrs(res.data);
                } else {
                    document.cookie = "isLoggedIn=";
                    navigate('/api/myShoeCloset/user/');
                }
            })
            .catch(err => console.log(err));
    }

    return(
        <div className = "container">
            <div className = "card p-4">
                <h3 className = "card-title">User Login</h3> 
                <form onSubmit = {onSubmitHandler} className = "card-body">
                    <div className = "form-group row justify-content-center mb-2">
                        <label htmlFor = "email" className = "col-form-label col-md-4">Email</label>
                        <div className = "col-md-8">
                            <input 
                                type = "text"
                                name = "email"
                                onChange = {(e) => setEmail(e.target.value)}
                                placeholder = "Please enter your email."
                                className = "form-control"
                            />
                        </div>
                    </div>
                    <div className = "form-group row justify-content-center mb-2">
                        <label htmlFor = "password" className = "col-form-label col-md-4">Password</label>
                        <div className = "col-md-8">
                            <input 
                                type = "password"
                                name = "password"
                                onChange = {(e) => setPassword(e.target.value)}
                                placeholder = "Please enter your password."
                                className = "form-control"
                            />  
                        </div>
                    </div>
                    <div className = "form-group row justify-content-center">
                        <div className = "col-md-3 col-lg-1">
                            <input 
                                type = "submit"
                                value = "Login"
                                className = "btn btn-primary"
                            />
                        </div>
                    </div>
                    {
                        errs?
                        <span className = "text-danger">{errs}</span>:
                        null
                    }
                </form>
            </div>
        </div>
    )
};

export default LoginForm;