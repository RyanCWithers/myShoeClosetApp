import React from 'react';
import NewShoeForm from '../components/NewShoeForm';
import Navbar from '../components/Navbar';
const CreateShoePage = props =>{
    return(
        <div>
            <Navbar />
            <NewShoeForm />
        </div>
    );
};

export default CreateShoePage;