import React, {useReducer, useState} from 'react';
import axios from 'axios';

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
};

function reducer(state, action) {
    return({
        ...state,
        [action.type]: action.payload
    });
}

const RegistrationForm = props =>{

    const [state, dispatch] = useReducer(reducer, initialState);
    const [errs, setErrs] = useState('');
    
    function handleChange(e){
        const {name, value} = e.target;
        dispatch({
            type: name,
            payload: value
        })
    }

    const onSubmitHandler = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:8000/api/myShoeCloset/register', state)
            .then(res => {
                //This should automatically route the user to their page after they have successfully registered.
            })
            .catch(err => console.log(err));
    };

    return(
        <div>
            <form>
                <label>
                    <span>First Name:</span>
                    <input
                        type = "text"
                        name = "firstName"
                        onChange = {handleChange}
                        placeholder = "Please enter your first name."
                    />                    
                </label>
                <label>
                    <span>Last Name:</span>
                    <input
                        type = "text"
                        name = "lastName"
                        onChange = {handleChange}
                        placeholder = "Please enter your last name."
                    />                    
                </label>
                <label>
                    <span>Email:</span>
                    <input
                        type = "text"
                        name = "email"
                        onChange = {handleChange}
                        placeholder = "Please enter your email."
                    />                    
                </label>
                <label>
                    <span>Password:</span>
                    <input
                        type = "text"
                        name = "password"
                        onChange = {handleChange}
                        placeholder = "Please enter your password."
                    />                    
                </label>
                <label>
                    <span>Confirm Password:</span>
                    <input
                        type = "text"
                        name = "confirmPassword"
                        onChange = {handleChange}
                        placeholder = "Please confirm your password."
                    />                    
                </label>
                <input
                    type = "submit"
                    value = "Register"
                />
            </form>
        </div>
    )
};

export default RegistrationForm;