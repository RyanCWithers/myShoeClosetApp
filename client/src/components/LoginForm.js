import React, {useState} from 'react';
import axios from 'axios';

const LoginForm = props =>{

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errs, setErrs] = useState('');

    const onSubmitHandler = (e) =>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/myShoeCloset/login", {
            email,
            password
        })
            .then(res => {
                //After you login, the page should automatically navigate to the user page.
            })
            .catch(err => console.log('There was an error logging in!'))
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