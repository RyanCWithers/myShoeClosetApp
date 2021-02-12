import React, {useEffect, useState} from 'react';
import axios from 'axios';
import RegistrationForm from '../components/RegistrationForm';
import DeleteUserButton from '../components/DeleteUserButton';

const UserAccountPage = props =>{
    const [userInfo, setUserInfo] = useState({});
    const [errs, setErrs] = useState('');

    useEffect(() =>{
        axios.get("http://localhost:8000/api/myShoeCloset/user")
            .then(res => {
                console.log(res);
                setUserInfo(res.data);
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

    return(
        <div>
            <RegistrationForm initialState = {userInfo} onSubmitProp = {onSubmitHandler} />
            <DeleteUserButton deleteId = {userInfo._id}/>
        </div>
    );
};

export default UserAccountPage;