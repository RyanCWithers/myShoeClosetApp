import React from 'react';

const ShoesList = ({shoes}) =>{

    return(
        <div>
            <ul>
                {shoes.map((item, index) =>(
                    <li key = {index}>
                        <img src = {item.shoeImgLink} alt = "Shoe image not available"></img>
                        <span>{item.shoeName}</span>
                        <span>{item.shoeCompany}</span>
                        <span>{item.shoeSize}</span>
                    </li>
                ))}
            </ul>
            
        </div>
    )
};

export default ShoesList;