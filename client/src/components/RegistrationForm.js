import React, {useReducer} from 'react';
import { navigate } from '@reach/router';

function reducer(state, action) {
    return({
        ...state,
        [action.type]: action.payload
    });
}

const RegistrationForm = ({initialState, onSubmitProp, errs, passwordHidden, formTitle}) =>{

    const [state, dispatch] = useReducer(reducer, initialState);

    function handleChange(e){
        const {name, value} = e.target;
        dispatch({
            type: name,
            payload: value
        })
    };

    const onSubmitHandler = (e) =>{
        e.preventDefault();
        if(state.confirmPassword !== state.password && !passwordHidden){
            return(alert('Your passwords must match!'));
        }
        onSubmitProp(state);
    };

    return(
        <div className = "container-sm">
            {JSON.stringify(errs)}
            <div className = "card p-4 mt-5" id = "register">
                <ul className = "nav nav-tabs" hidden = {passwordHidden}>
                    <li className = "nav-item">
                        <p className = "nav-link btn border-light text-light" onClick = {() => navigate('/api/myShoeCloset/login')}>Login</p>
                    </li>
                    <li className = "nav-item">
                        <p className = "nav-link btn border-light active" onClick = {() => navigate('/api/myShoeCloset/register')}>Register</p>
                    </li>
                </ul>
                <h3 className = "card-title mt-2">{formTitle}</h3>
                <form onSubmit = {onSubmitHandler} className ="card-body">
                    <div className = "form-group row">
                        <label htmlFor = "firstName" className = "col-form-label col col-lg-2 d-none d-lg-inline">Name</label>
                        <div className = "col-lg-5 mb-2">
                            <input
                                type = "text"
                                name = "firstName"
                                onChange = {handleChange}
                                placeholder = "First Name"
                                className = "form-control"
                                value = {state.firstName}
                            />
                            {
                                errs.firstName?
                                <div className = "row">
                                    <div className = "form-text text-light">
                                        {errs.firstName.message}   
                                    </div>
                                </div>:
                                null
                            }
                        </div>
                        <div className = "col-lg-5 mb-2">
                            <input
                                type = "text"
                                name = "lastName"
                                onChange = {handleChange}
                                placeholder = "Last Name"
                                className = "form-control"
                                value = {state.lastName}
                            />
                            {
                                errs.lastName?
                                <div className = "row">
                                    <div className = "form-text text-light">
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
                                value = {state.email}
                            />
                            {
                                errs.email?
                                <div className = "row">
                                    <div className = "form-text text-light">
                                        {errs.email.message}   
                                    </div>
                                </div>:
                                null
                            }
                            {
                                errs.emailInUse?
                                <div className = "row">
                                    <div className = "form-text text-light">
                                        {errs.emailInUse}   
                                    </div>
                                </div>:
                                null
                            }
                        </div> 
                    </div>
                    <div className = "form-group row" hidden = {passwordHidden}>
                        <label htmlFor = "password" className = "col-form-label col-lg-2 d-none d-lg-inline">Password</label>
                        <div className = "col-lg-5 mb-2">
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
                                    <div className = "form-text text-light">
                                        {errs.password.message}   
                                    </div>
                                </div>:
                                null
                            }
                        </div>
                        <div className = "col-lg-5 mb-2">
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
                                    <div className = "form-text text-light">
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
                            value = "Save"
                            className = "btn text-light border-light mt-3"
                        />
                    </div>
                </form>
            </div>
        </div>
    )
};

export default RegistrationForm;