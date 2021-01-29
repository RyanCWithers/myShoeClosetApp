import React, {useState} from 'react';
import DeleteShoeButton from './DeleteShoeButton';
import {Link} from '@reach/router';

const ShoesList = ({shoes}) =>{

    const [shoeList, setShoeList] = useState(shoes);

    const deleteShoeFromPage = (shoeId) =>{
        setShoeList(shoeList.filter((item) => item._id !== shoeId));
    };
    
    return(
        <div>
            <ul>
                {shoeList.map((item, index) =>(
                    <li key = {index}>
                        <img src = {item.shoeImgLink} alt = "Shoe image not available"></img>
                        <span>{item.shoeName}</span>
                        <span>{item.shoeCompany}</span>
                        <span>{item.shoeSize}</span>
                        <Link to = {"/api/myShoeCloset/user/" + item._id}>
                            <button>Edit</button>
                        </Link>
                        <DeleteShoeButton shoeId = {item._id} removeFromDom = {deleteShoeFromPage}/>
                    </li>
                ))}
            </ul>
            
        </div>
    )
};

export default ShoesList;