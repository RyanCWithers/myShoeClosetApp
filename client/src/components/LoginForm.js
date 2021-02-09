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
        
    }

    return(
        <div className = "container-sm">
            <div className = "row">
                <div className = "card p-4">
                    <h3 className = "card-title">User Login</h3> 
                    <form onSubmit = {onSubmitHandler} className = "card-body">
                        {
                            errs?
                            <span className = "text-danger">{errs}</span>:
                            null
                        }
                        <div className = "form-group row justify-content-center">
                            <label htmlFor = "email" className = "col-form-label col-md-2">Email</label>
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
                        {
                            fieldEmpty.emailMsg?
                            <div className = "form-group row">
                                <div className = "col form-text text-danger">
                                    {fieldEmpty.emailMsg}   
                                </div>
                            </div>:
                            null
                        }
                        <div className = "form-group row justify-content-center mt-2">
                            <label htmlFor = "password" className = "col-form-label col-md-2">Password</label>
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
                        {
                            fieldEmpty.passwordMsg?
                            <div className = "form-group row">
                                <div className = "col form-text text-danger">
                                    {fieldEmpty.passwordMsg}   
                                </div>
                            </div>:
                            null
                        }
                        <div className = "form-group row justify-content-center mt-2">
                            <div className = "col">
                                <input 
                                    type = "submit"
                                    value = "Login"
                                    className = "btn btn-primary"
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default LoginForm;