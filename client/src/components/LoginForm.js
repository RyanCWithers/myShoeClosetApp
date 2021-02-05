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
        <div>
            <form onSubmit = {onSubmitHandler}>
                <label>
                    <span>Email:</span>
                    <input 
                        type = "text"
                        name = "email"
                        onChange = {(e) => setEmail(e.target.value)}
                        placeholder = "Please enter your email."
                    />
                </label>
                <label>
                    <span>Password:</span>
                    <input 
                        type = "password"
                        name = "password"
                        onChange = {(e) => setPassword(e.target.value)}
                        placeholder = "Please enter your password."
                    />
                </label>
                <input 
                    type = "submit"
                    value = "Login"
                />
                {
                    errs?
                    <span>{errs}</span>:
                    null
                }
            </form>
        </div>
    )
};

export default LoginForm;