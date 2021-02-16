import React, {useEffect, useState} from 'react';
import axios from 'axios';
import RegistrationForm from '../components/RegistrationForm';
import Navbar from '../components/Navbar';
import logoutHandler from '../components/logouthandler';

const UserAccountPage = props =>{
    
    const [userInfo, setUserInfo] = useState('');
    const [errs, setErrs] = useState('');
    const [loaded, setLoaded] = useState(false);

    useEffect(() =>{
        axios.get("http://localhost:8000/api/myShoeCloset/user", {withCredentials: true})
            .then(res => {
                setUserInfo(res.data);
                setLoaded(true);
            })
            .catch(err => console.log(err));
    }, []);

    const onSubmitHandler = updatedUser =>{
        axios.put("http://localhost:8000/api/myShoeCloset/user/" + userInfo._id +"/update", updatedUser)
            .then(res =>{
                if(res.data.errors){
                    setErrs(res.data.errors);
                } else {
                    alert('Your account was updated!');
                }
            })
            .catch(err => console.log(err));
    };

    const deleteUser = () =>{
        axios.delete("http://localhost:8000/api/myShoeCloset/user/"+ userInfo._id + "/delete")
            .then(res => {
                alert(res.data);
                logoutHandler();
            })
            .catch(err => console.log(err));
    };
    return(
        <div>
            <Navbar />
            {
                loaded?
                <>
                    <RegistrationForm 
                        initialState = {userInfo} 
                        onSubmitProp = {onSubmitHandler} 
                        errs = {errs} 
                        passwordHidden = {true}
                        formTitle = "Account Info"
                    />
                    <button onClick = {deleteUser}>Delete User Account</button>
                    
                </>:
                
                <p>Loading user information...</p>
                
            }
            
        </div>
    );
};

export default UserAccountPage;