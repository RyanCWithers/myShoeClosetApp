import React from 'react';

const ShoeFilter = ({shoes, filterDom}) =>{

    const onClickHandler = e =>{
        filterDom(e.target);
    };

    return(
        <div>
            <div className = "dropdown">
                <button className="btn dropdown-toggle" data-bs-toggle="dropdown" href="#" aria-expanded="false">Filter</button>
                <form className = "dropdown-menu">
                    <div className = "form-group">
                        <div className = "col form-check list-group-item-action">
                            <input type = "checkbox" 
                                id = "boot"
                                name = "boot" 
                                onClick = {onClickHandler}
                                className = "form-check-input"
                            />
                            <label htmlFor = "boot" className = "form-check-label">Boot</label>
                        </div>
                        <div className = "col form-check list-group-item-action">
                            <input type = "checkbox" 
                                id = "sneaker"
                                name = "sneaker" 
                                onClick = {onClickHandler}
                                className = "form-check-input"
                            />
                            <label htmlFor = "sneaker" className = "form-check-label">Sneaker</label>
                        </div>
                        <div className = "col form-check list-group-item-action">
                            <input type = "checkbox" 
                                id = "dressShoe"
                                name = "dressShoe" 
                                onClick = {onClickHandler}
                                className = "form-check-input"
                            />
                            <label htmlFor = "dressShoe" className = "form-check-label">Dress Shoe</label>
                        </div>
                        <div className = "col form-check list-group-item-action">
                            <input type = "checkbox" 
                                id = "sandal"
                                name = "sandal" 
                                onClick = {onClickHandler}
                                className = "form-check-input"
                            />
                            <label htmlFor = "sandal" className = "form-check-label">Sandal</label>
                        </div>
                        <div className = "col form-check list-group-item-action">
                            <input type = "checkbox" 
                                id = "casual"
                                name = "casual" 
                                onClick = {onClickHandler}
                                className = "form-check-input"
                            />
                            <label htmlFor = "casual" className = "form-check-label">Casual</label>
                        </div>
                        <div className = "col form-check list-group-item-action">
                            <input type = "checkbox" 
                                id = "slipper"
                                name = "slipper" 
                                onClick = {onClickHandler}
                                className = "form-check-input"
                            />
                            <label htmlFor = "slipper" className = "form-check-label">Slipper</label>
                        </div>
                    </div>
                </form>
            </div>
            
        </div>
    );
};

export default ShoeFilter;