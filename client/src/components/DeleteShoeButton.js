import React from 'react';
import axios from 'axios';

const DeleteShoeButton = ({shoeId, removeFromDom}) =>{

    const onClickHandler = () =>{
        axios.delete("http://localhost:8000/api/myShoeCloset/user/deleteShoe/" +  shoeId)
            .then(res => {
                console.log(res);
                removeFromDom(shoeId);
            })
            .catch(err => console.log(err));
    };
    
    return(
        <button onClick = {onClickHandler}>Delete</button>
    );
};

export default DeleteShoeButton;