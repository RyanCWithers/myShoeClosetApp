import React, {useState} from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const LoginForm = (props) =>{

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fieldEmpty, setFieldEmpty] = useState({emailMsg:'', passwordMsg: ''});
    const [errs, setErrs] = useState('');

    const onSubmitHandler = (e) =>{
        e.preventDefault();
        if(email !== '' && password !== ''){
            setFieldEmpty({});
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
        } else {
            setErrs('');
            if(email === '' && password === ''){
                setFieldEmpty({emailMsg: 'Please enter your email!', passwordMsg: 'Please enter your password!'});
            } else if(email === ''){
                setFieldEmpty({emailMsg: 'Please enter your email!', passwordMsg: ''});
            } else {
                setFieldEmpty({emailMsg: '', passwordMsg: 'Please enter your password!'});
            }
        }
    };

    return(
        <div className = "container-sm">
            <div className = "card p-4 mt-5" id = "login">
                <ul className = "nav nav-tabs">
                    <li className = "nav-item">
                        <p className = "nav-link active btn" onClick = {() => navigate('/api/myShoeCloset/login')}>Login</p>
                    </li>
                    <li className = "nav-item">
                        <p className = "nav-link btn border-light text-light" onClick = {() => navigate('/api/myShoeCloset/register')}>Register</p>
                    </li>
                </ul>
                <h3 className = "card-title mt-2">Login</h3> 
                <form onSubmit = {onSubmitHandler} className = "card-body justify-content-center">
                    {
                        errs?
                        <span>{errs}</span>:
                        null
                    }
                    <div className = "form-group row">
                        <label htmlFor = "email" className = "col-form-label col-lg-2 d-none d-lg-inline">Email</label>
                        <div className = "col col-lg-8">
                            <input 
                                type = "text"
                                name = "email"
                                onChange = {(e) => setEmail(e.target.value)}
                                placeholder = "Email"
                                className = "form-control"
                            />
                        </div>
                    </div>
                        {
                            fieldEmpty.emailMsg?
                            <div className = "form-group row">
                                <div className = "col form-text text-light">
                                    {fieldEmpty.emailMsg}   
                                </div>
                            </div>:
                            null
                        }
                    <div className = "form-group row mt-2">
                        <label htmlFor = "password" className = "col-form-label col-lg-2 d-none d-lg-inline">Password</label>
                        <div className = "col col-lg-8">
                            <input 
                                type = "password"
                                name = "password"
                                onChange = {(e) => setPassword(e.target.value)}
                                placeholder = "Password"
                                className = "form-control"
                            />  
                        </div>
                    </div>
                        {
                            fieldEmpty.passwordMsg?
                            <div className = "form-group row">
                                <div className = "col form-text text-light">
                                    {fieldEmpty.passwordMsg}   
                                </div>
                            </div>:
                            null
                        }
                    <div className = "form-group row mt-2">
                        <div className = "col">
                            <input 
                                type = "submit"
                                value = "Login"
                                className = "btn text-light border-light mt-3"
                            />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default LoginForm;