import React from 'react';

const ShoeFilter = ({filterDom, shoeTotals}) =>{

    const shoeTypeList = ['all', 'boot', 'sneaker', 'sandal', 'casual', 'slipper', 'dressShoe'];

    const onChangeHandler = e =>{
        filterDom(e.target.value);
    };

    return(
        <div className = "row justify-content-center">
            <div className = "col-6 col-md-3">
                <select name = "filtershoes" className = "form-select" onChange = {onChangeHandler}>
                    {
                        shoeTypeList.map((item, index) =>(
                            <option key = {index} name = {item} value = {item}>{item.toUpperCase()}</option>
                        ))
                    }
                    
                </select>
                <span className = "badge mt-3">Total: {shoeTotals}</span>
            </div>
        </div>
        
    );
};

export default ShoeFilter;