import React, {useState} from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const LoginForm = ({setLoggedIn}) =>{

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // const [errs, setErrs] = useState('');

    const onSubmitHandler = (e) =>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/myShoeCloset/login/", 
            {email, password},
            {withCredentials: true}
            )
            .then(res => {
                document.cookie = "name=isLoggedIn";
                navigate('/api/myShoeCloset/user/')
                console.log(res);
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
                        type = "text"
                        name = "password"
                        onChange = {(e) => setPassword(e.target.value)}
                        placeholder = "Please enter your password."
                    />
                </label>
                <input 
                    type = "submit"
                    value = "Login"
                />
            </form>
        </div>
    )
};

export default LoginForm;