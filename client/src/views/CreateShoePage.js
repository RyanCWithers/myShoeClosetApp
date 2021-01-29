import React from 'react';
import axios from 'axios';
import ShoeForm from '../components/ShoeForm';
import Navbar from '../components/Navbar';
import {navigate} from '@reach/router';

const CreateShoePage = props =>{

    const initialState = {
        shoeName: '',
        shoeCompany: '',
        shoeSize: '',
        shoeImgLink: ''
    };

    const onSubmitHandler = (newShoe) =>{
        axios.put('http://localhost:8000/api/myShoeCloset/user/createShoe', newShoe, {withCredentials: true})
            .then(res => {
                console.log(res);
                navigate("/api/myShoeCloset/user");
            })
            .catch(err => console.log(err));
    };

    return(
        <div>
            <Navbar />
            <ShoeForm initialState = {initialState} onSubmitProp = {onSubmitHandler}/>
        </div>
    );
};

export default CreateShoePage;