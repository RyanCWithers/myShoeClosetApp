import React from 'react';

const ShoeFilter = ({filterDom}) =>{

    const shoeTypeList = ['all', 'boot', 'sneaker', 'sandal', 'casual', 'slipper', 'dressShoe'];

    const onChangeHandler = e =>{
        filterDom(e.target.value);
    }
    return(
        <select name = "filtershoes" onChange = {onChangeHandler}>
            {
                shoeTypeList.map((item, index) =>(
                    <option key = {index} name = {item} value = {item}>{item.toUpperCase()}</option>
                ))
            }
        </select>
    );
};

export default ShoeFilter;