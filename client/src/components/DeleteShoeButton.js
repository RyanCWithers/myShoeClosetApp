import React from 'react';
import axios from 'axios';

const DeleteShoeButton = ({shoeId}) =>{

    const onClickHandler = () =>{
        axios.delete("http://localhost:8000/api/myShoeCloset/deleteShoe/" +  shoeId)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    };
    
    return(
        <button>

        </button>
    );
};

export default DeleteShoeButton;