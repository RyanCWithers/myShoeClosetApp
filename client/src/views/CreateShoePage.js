import React from 'react';
import axios from 'axios';
import ShoeForm from '../components/ShoeForm';
import Navbar from '../components/Navbar';
const CreateShoePage = props =>{

    const initialState = {
        shoeName: '',
        shoeCompany: '',
        shoeSize: '',
        shoeImgLink: ''
    };

    const onSubmitHandler = (newShoe) =>{
        axios.post('http://localhost:8000/api/myShoeCloset/user/createShoe', newShoe)
            .then(res => console.log(res))
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