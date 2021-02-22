import React from 'react';
import { navigate } from '@reach/router';
import stockShoeImg from "../images/question-square.svg";

const ShoesList = ({shoes}) =>{
 
    return(
        <div className = "container-sm">
            <div className = "row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 w-100">
                {shoes.map((item, index) =>(
                    <div className = "col">
                        <div class = "shoeCard">
                            <div key = {index} className = "h-100" onClick = {() => navigate("/api/myShoeCloset/user/" + item._id)}>
                                <div class = "imgContain">
                                    {
                                        item.shoeImgLink?
                                        <img src = {item.shoeImgLink} alt = "shoe" class = "shoeImg"/>:
                                        <img src = {stockShoeImg} alt = "blank shoe" class = "shoeImg"/>
                                    }
                                </div>
                                <div class = "shoeCardInfo">
                                    <p>{item.shoeName}</p>
                                    <p>{item.shoeCompany}</p>
                                    <p>{item.shoeSize}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default ShoesList;