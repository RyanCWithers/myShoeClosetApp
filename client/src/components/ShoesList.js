import React from 'react';
import { navigate } from '@reach/router';
import stockShoeImg from "../images/question-square.svg";

const ShoesList = ({shoes}) =>{
 
    return(
        <div className = "container-sm">
            <div className = "row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
                {shoes.map((item, index) =>(
                    <div className = "col">
                        <div key = {index} className = "card list-group-item-action" onClick = {() => navigate("/api/myShoeCloset/user/" + item._id)}>
                        {
                            item.shoeImgLink?
                            <img src = {item.shoeImgLink} alt = "shoe" className = "img-fluid"/>:
                            <img src = {stockShoeImg} alt = "blank shoe" className = "img-fluid"/>
                        }
                            <div>
                                <p>{item.shoeName}</p>
                                <p>{item.shoeCompany}</p>
                                <p>{item.shoeSize}</p>
                            </div>
                        </div>
                    </div>
                    
                ))}
            </div>
        </div>
    )
};

export default ShoesList;