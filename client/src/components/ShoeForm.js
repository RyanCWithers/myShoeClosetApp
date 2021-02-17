import React, {useReducer} from 'react';
import DeleteShoeButton from '../components/DeleteShoeButton';

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
        if(state.shoeCompany !== '' && state.shoeSize !== '' && state.shoeName !== ''){ //if the required fields are filled out, then you can submit.
            onSubmitProp(state);
        } else {
            alert("Please fill out all fields!");
        }
    };

    return(
        <div className = "container-sm">
            <div className = "card p-4 mt-5">
                <h3 className = "card-title">{formTitle}</h3>
                {
                    state.shoeImgLink?
                    <div className = "row justify-content-center">
                        <img src = {state.shoeImgLink} alt = "Not Available" className = "col-3"/>
                    </div>:
                    null
                }
                <form onSubmit = {onSubmitHandler} className = "card-body">
                    <div className = "form-group row mb-2">
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
                    <div className = "form-group row mb-2">
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
                    <div className = "form-group row mb-2">
                        <label htmlFor = "shoeSize" className = "col-form-label col-md-2 d-none d-md-inline">Size</label>
                        <div className = "col-6 col-md-4 col-lg-2">
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
                        <div className = "col-6">
                            <div className = "row row-cols-1 row-cols-lg-2 row-cols-xl-4">
                                <div className = "col form-check">
                                    <input type = "checkbox" 
                                        id = "boot"
                                        name = "boot" 
                                        onClick = {handleChange}
                                        checked = {state.shoeType.boot}
                                        className = "form-check-input"
                                    />
                                    <label htmlFor = "boot" className = "form-check-label">Boot</label>
                                </div>
                                <div className ="col form-check">
                                    <input type = "checkbox" 
                                        id = "sneaker"
                                        name = "sneaker" 
                                        onClick = {handleChange}
                                        checked = {state.shoeType.sneaker}
                                        className = "form-check-input"
                                    />
                                    <label htmlFor = "sneaker" className = "form-check-label">Sneaker</label>
                                </div>
                                <div className = "col form-check">
                                    <input type = "checkbox" 
                                        id = "dressShoe"
                                        name = "dressShoe" 
                                        onClick = {handleChange}
                                        checked = {state.shoeType.dressShoe}
                                        className = "form-check-input"
                                    />
                                    <label htmlFor = "dressShoe" className = "form-check-label">Dress Shoe</label>
                                </div>
                                <div className = "col form-check">
                                    <input type = "checkbox" 
                                        id = "sandal"
                                        name = "sandal" 
                                        onClick = {handleChange}
                                        checked = {state.shoeType.sandal}
                                        className = "form-check-input"
                                    />
                                    <label htmlFor = "sandal" className = "form-check-label">Sandal</label>
                                </div>
                                <div className = "col form-check">
                                    <input type = "checkbox" 
                                        id = "casual"
                                        name = "casual" 
                                        onClick = {handleChange}
                                        checked = {state.shoeType.casual}
                                        className = "form-check-input"
                                    />
                                    <label htmlFor = "casual" className = "form-check-label">Casual</label>
                                </div>
                                <div className = "col form-check">
                                    <input type = "checkbox" 
                                        id = "slipper"
                                        name = "slipper" 
                                        onClick = {handleChange}
                                        checked = {state.shoeType.slipper}
                                        className = "form-check-input"
                                    />
                                    <label htmlFor = "slipper" className = "form-check-label">Slipper</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className = "form-group row mb-2">
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
                    <input
                        type = "submit"
                        value = "Save Shoe"
                        className = "btn btn-primary d-block mx-auto mb-2"
                    />
                    {
                        formTitle === "Update Shoe"?
                        <DeleteShoeButton shoeId = {state._id} />:
                        null
                    }
                </form>
            </div>
        </div>
    )
};

export default ShoeForm;