import React, {useReducer} from 'react';

function reducer(state, action){
    return({
        ...state,
        [action.type] : action.payload
    })
};

const ShoeForm = props =>{

    const {initialState, onSubmitProp} = props;
    const [state, dispatch] = useReducer(reducer, initialState);

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
            {JSON.stringify(state)}
            <form onSubmit = {onSubmitHandler}>
                <label>
                    <span>Shoe Company:</span>
                    <input
                        type = "text"
                        name = "shoeCompany"
                        onChange = {handleChange}
                        placeholder = "Required"
                        value = {state.shoeCompany}
                    />
                </label>
                <label>
                    <span>Shoe Name:</span>
                    <input
                        type = "text"
                        name = "shoeName"
                        onChange = {handleChange}
                        placeholder = "Required"
                        value = {state.shoeName}
                    />
                </label>
                <label>
                    <span>Shoe Size:</span>
                    <input
                        type = "text"
                        name = "shoeSize"
                        onChange = {handleChange}
                        placeholder = "Required"
                        value = {state.shoeSize}
                    />
                </label>
                <label>
                    <span>Shoe Image Link:</span>
                    <input
                        type = "text"
                        name = "shoeImgLink"
                        onChange = {handleChange}
                        placeholder = "Optional"
                        value = {state.shoeImgLink}
                    />
                </label>
                <div>
                    <label htmlFor = "boot">Boot</label>
                    <input type = "checkbox" 
                        name = "boot" 
                        onClick = {handleChange}
                        checked = {state.shoeType.boot}
                    />
                    <label htmlFor = "sneaker">Sneaker</label>
                    <input type = "checkbox" 
                        name = "sneaker" 
                        onClick = {handleChange}
                        checked = {state.shoeType.sneaker}
                    />
                    <label htmlFor = "dressShoe">Dress Shoe</label>
                    <input type = "checkbox" 
                        name = "dressShoe" 
                        onClick = {handleChange}
                        checked = {state.shoeType.dressShoe}
                    />
                    <label htmlFor = "sandal">Sandal</label>
                    <input type = "checkbox" 
                        name = "sandal" 
                        onClick = {handleChange}
                        checked = {state.shoeType.sandal}
                    />
                </div>
                <input
                    type = "submit"
                    value = "Save Shoe"
                />
            </form>
        </div>
    )
};

export default ShoeForm;