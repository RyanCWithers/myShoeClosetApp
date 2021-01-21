import React, {useReducer} from 'react';
import axios from 'axios';

const initialState = {
    shoeCompany: '',
    shoeSize: '',
    shoeImgLink: '',
    shoeName: '',
};

function reducer(state, action){
    return({
        ...state,
        [action.type] : action.payload
    })
}

const NewShoeForm = props =>{

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
            axios.put('http://localhost:8000/api/myShoeCloset/user/createShoe', state)
                .then(res => console.log(res))
                .catch(err => console.log(err));
        } else {
            alert("Please fill out all required fields!");
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
                    />
                </label>
                <label>
                    <span>Shoe Name:</span>
                    <input
                        type = "text"
                        name = "shoeName"
                        onChange = {handleChange}
                        placeholder = "Required"
                    />
                </label>
                <label>
                    <span>Shoe Size:</span>
                    <input
                        type = "text"
                        name = "shoeSize"
                        onChange = {handleChange}
                        placeholder = "Required"
                    />
                </label>
                <label>
                    <span>Shoe Image Link:</span>
                    <input
                        type = "text"
                        name = "shoeImgLink"
                        onChange = {handleChange}
                        placeholder = "Optional"
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

export default NewShoeForm;