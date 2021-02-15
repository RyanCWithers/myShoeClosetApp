import React, {useReducer} from 'react';

function reducer(state, action){
    return({
        ...state,
        [action.type] : action.payload
    })
};

const ShoeForm = ({initialState, onSubmitProp, formTitle}) =>{

    const [state, dispatch] = useReducer(reducer, initialState);
    const shoeSizeArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

    function handleChange(e){
        switch (e.target.type){

            case 'checkbox':
                const shoeTypeName = e.target.name;
                state.shoeType[shoeTypeName] = !state.shoeType[shoeTypeName];
                
                dispatch({
                    type: state.shoeType[shoeTypeName],
                    value: !state.shoeType[shoeTypeName]
                })

                break;

            default:
                const {name, value} = e.target;

                dispatch({
                    type: name,
                    payload: value
                })

                break;
        }
        
    };

    const onSubmitHandler = (e) =>{
        e.preventDefault();
        console.log(state);
        if(state.shoeCompany !== '' && state.shoeSize !== '' && state.shoeName !== ''){ //if the required fields are filled out, then you can submit.
            onSubmitProp(state);
        } else {
            alert("Please fill out all fields!");
        }
    };

    return(
        <div className = "container-sm">
            <div className = "card p-4">
                <h3 className = "card-title">{formTitle}</h3>
                <form onSubmit = {onSubmitHandler} className = "card-body">
                    <div className = "form-group row">
                        <label htmlFor = "shoeCompany" className = "col-form-label col-md-2 d-none d-md-inline">Brand</label>
                        <div className = "col-md-8">
                            <input
                                type = "text"
                                name = "shoeCompany"
                                onChange = {handleChange}
                                placeholder = "Brand"
                                value = {state.shoeCompany}
                                className = "form-control"
                            />
                        </div>
                    </div>
                    <div className = "form-group row">
                        <label htmlFor = "shoeName" className = "col-form-label col-md-2 d-none d-md-inline">Shoe Name</label>
                        <div className = "col-md-8">
                            <input
                                type = "text"
                                name = "shoeName"
                                onChange = {handleChange}
                                placeholder = "Shoe Name"
                                value = {state.shoeName}
                                className = "form-control"
                            />
                        </div>
                    </div>
                    <div className = "form-group row">
                        <label htmlFor = "shoeSize" className = "col-form-label col-md-2 d-none d-md-inline">Size</label>
                        <div className = "col-2">
                            <select 
                                name = "shoeSize"
                                onChange = {handleChange}
                                value = {state.shoeSize}
                                className = "form-select"
                            >
                                <option>Select Size</option>
                                {
                                    shoeSizeArray.map((item, index)=>(
                                        <option key = {index + 1} value = {item}>{item}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className = "col-6 row-col-4">
                            <div className = "row">
                                <div className = "col form-check">
                                    <input type = "checkbox" 
                                        name = "boot" 
                                        onClick = {handleChange}
                                        checked = {state.shoeType.boot}
                                        className = "form-check-input"
                                    />
                                    <label htmlFor = "boot" className = "form-check-label">Boot</label>
                                </div>
                                <div className ="col form-check">
                                    <input type = "checkbox" 
                                        name = "sneaker" 
                                        onClick = {handleChange}
                                        checked = {state.shoeType.sneaker}
                                        className = "form-check-input"
                                    />
                                    <label htmlFor = "sneaker" className = "form-check-label">Sneaker</label>
                                </div>
                                <div className = "col form-check">
                                    <input type = "checkbox" 
                                        name = "dressShoe" 
                                        onClick = {handleChange}
                                        checked = {state.shoeType.dressShoe}
                                        className = "form-check-input"
                                    />
                                    <label htmlFor = "dressShoe" className = "form-check-label">Dress Shoe</label>
                                </div>
                                <div className = "col form-check">
                                    <input type = "checkbox" 
                                        name = "sandal" 
                                        onClick = {handleChange}
                                        checked = {state.shoeType.sandal}
                                        className = "form-check-input"
                                    />
                                    <label htmlFor = "sandal" className = "form-check-label">Sandal</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className = "form-group row">
                        <label htmlFor = "shoeImgLink" className = "col-form-label col-md-2 d-none d-md-inline">Shoe Link</label>
                        <div className = "col-md-8">
                            <input
                                type = "text"
                                name = "shoeImgLink"
                                onChange = {handleChange}
                                placeholder = "Optional"
                                value = {state.shoeImgLink}
                                className = "form-control"
                            />
                        </div>
                    </div>
                    <div className = "form-group row">
                        <label htmlFor = "shoeName" className = "col-form-label col-md-2 d-none d-md-inline">Shoe Name</label>
                        <div className = "col-md-8">
                            <input
                                type = "text"
                                name = "shoeName"
                                onChange = {handleChange}
                                placeholder = "Shoe Name"
                                value = {state.shoeName}
                                className = "form-control"
                            />
                        </div>
                    </div>
                    <input
                        type = "submit"
                        value = "Save Shoe"
                        className = "btn btn-primary"
                    />
                </form>
            </div>
        </div>
    )
};

export default ShoeForm;