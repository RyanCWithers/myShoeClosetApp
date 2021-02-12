import React, {useReducer, useState} from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

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

        if(state.confirmPassword !== state.password){
            return(alert('Your passwords must match!'));
        }

        axios.post('http://localhost:8000/api/myShoeCloset/register', state)
            .then(res => {
                console.log(res);
                if(res.data.errors){
                    setErrs(res.data.errors);
                    console.log(errs);
                }else{
                    alert("Succesful registration!");
                    navigate('/api/myShoeCloset/login');
                }
            })
            .catch(err => console.log(err));
    };

    return(
        <div className = "container-sm">
            <div className = "card p-4">
                <h3 className = "card-title">Register</h3>
                <form onSubmit = {onSubmitHandler} className ="card-body">
                    <div className = "form-group row mb-2">
                        <label htmlFor = "firstName" className = "col-form-label col col-lg-2 d-none d-lg-inline">Name</label>
                        <div className = "col-lg-5">
                            <input
                                type = "text"
                                name = "firstName"
                                onChange = {handleChange}
                                placeholder = "First Name"
                                className = "form-control"
                            />
                            {
                                errs.firstName?
                                <div className = "row">
                                    <div className = "form-text text-danger">
                                        {errs.firstName.message}   
                                    </div>
                                </div>:
                                null
                            }
                        </div>
                        <div className = "col-lg-5">
                            <input
                                type = "text"
                                name = "lastName"
                                onChange = {handleChange}
                                placeholder = "Last Name"
                                className = "form-control"
                            />
                            {
                                errs.lastName?
                                <div className = "row">
                                    <div className = "form-text text-danger">
                                        {errs.lastName.message}   
                                    </div>
                                </div>:
                                null
                            }
                        </div>
                    </div>
                    <div className = "form-group row mb-2">
                        <label htmlFor = "email" className = "col-form-label col col-lg-2 d-none d-lg-inline">Email</label>
                        <div className = "col-lg-5">
                            <input
                                type = "text"
                                name = "email"
                                onChange = {handleChange}
                                placeholder = "Email"
                                className = "form-control"
                            />
                            {
                                errs.email?
                                <div className = "row">
                                    <div className = "form-text text-danger">
                                        {errs.email.message}   
                                    </div>
                                </div>:
                                null
                            }
                        </div> 
                    </div>
                    <div className = "form-group row mb-2">
                        <label htmlFor = "password" className = "col-form-label col-lg-2 d-none d-lg-inline">Password</label>
                        <div className = "col-lg-5">
                            <input
                                type = "password"
                                name = "password"
                                onChange = {handleChange}
                                placeholder = "Password"
                                className = "form-control"
                            />
                            {
                                errs.password?
                                <div className = "row">
                                    <div className = "form-text text-danger">
                                        {errs.password.message}   
                                    </div>
                                </div>:
                                null
                            }
                        </div>
                        <div className = "col-lg-5">
                            <input
                                type = "password"
                                name = "confirmPassword"
                                onChange = {handleChange}
                                placeholder = "Confirm Password"
                                className = "form-control d-block d-md-inline"
                            />
                            {
                                (state.password && state.confirmPassword && state.password !== state.confirmPassword)?
                                <div className = "row">
                                    <div className = "form-text text-danger">
                                        <p>Passwords do not match!</p>   
                                    </div>
                                </div>:
                                null
                            } 
                        </div>
                    </div>
                    <div className = "col">
                        <input
                            type = "submit"
                            value = "Register"
                            className = "btn btn-primary"
                        />
                    </div>
                </form>
            </div>
        </div>
    )
};

export default RegistrationForm;