import React, {useReducer} from 'react';

function reducer(state, action){
    return({
        ...state,
        [action.type] : action.payload
    })
}

const ShoeForm = props =>{

    const {initialState, onSubmitProp} = props;
    const [state, dispatch] = useReducer(reducer, initialState);

    function handleChange(e){
        const {name, value} = e.target;
        dispatch({
            type: name,
            payload: value
        })
    }

    const onSubmitHandler = (e) =>{
        e.preventDefault();
        if(state.shoeCompany !== '' && state.shoeSize !== '' && state.shoeName !== ''){ //if the required fields are filled out, then you can submit.
            onSubmitProp(state);
        } else {
            alert("Please fill out all fields!");
        }
    };

    return(
        <div>
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
                <input
                    type = "submit"
                    value = "Create Shoe"
                />
            </form>
        </div>
    )
};

export default ShoeForm;