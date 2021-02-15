import React, {useEffect, useState} from 'react';
import axios from 'axios';
import ShoeForm from '../components/ShoeForm';
import Navbar from '../components/Navbar';
import {navigate} from '@reach/router';

const UpdateShoePage = props =>{

    const {shoeId} = props;
    const [state, setState] = useState({});
    const [loaded, setLoaded] = useState(false);

    useEffect(() =>{
        axios.get('http://localhost:8000/api/myShoeCloset/user/' + shoeId, {withCredentials: true})
            .then(res => {
                setState(res.data);
                setLoaded(true);
            })
            .catch(err => console.log(err));
    }, [shoeId]);

    const onSubmitProp = (updatedShoe) =>{
        axios.put('http://localhost:8000/api/myShoeCloset/user/update/' + shoeId, updatedShoe, {withCredentials: true})
            .then(res => {
                console.log(res);
                navigate('/api/myShoeCloset/user');
            })
            .catch(err => console.log(err));
    };

    return(
        <div>
            <Navbar />
            {
                loaded?
                <ShoeForm 
                    initialState = {state} 
                    onSubmitProp = {onSubmitProp} 
                    formTitle = "Update Shoe"
                />:
            <span>Loading...</span>
            }
        </div>
    );
};

export default UpdateShoePage;