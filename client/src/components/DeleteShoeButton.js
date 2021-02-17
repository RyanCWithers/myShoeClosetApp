import React from 'react';
import axios from 'axios';

const DeleteShoeButton = ({shoeId}) =>{

    const onClickHandler = () =>{
        axios.delete("http://localhost:8000/api/myShoeCloset/user/deleteShoe/" +  shoeId, {withCredentials: true})
            .then(res => {
                // console.log(res);
                console.log(shoeId);
                // removeFromDom(shoeId);
            })
            .catch(err => console.log(err));
    };
    
    return(
        <button onClick = {onClickHandler} className = "btn btn-danger d-block mx-auto mb-2">Delete</button>
    );
};

export default DeleteShoeButton;