import React, {useEffect, useState} from 'react';
import axios from 'axios';
import ShoeForm from '../components/ShoeForm';

const UpdateShoePage = props =>{

    const {shoeId} = props;
    const [state, setState] = useState({});
    const [loaded, setLoaded] = useState(false);

    useEffect(() =>{
        axios.get('http://localhost:8000/api/myShoeCloset/user/' + shoeId)
            .then(res => {
                setState(res.data);
                setLoaded(true);
            })
            .catch(err => console.log(err));
    }, [shoeId]);

    const onSubmitProp = (updatedShoe) =>{
        axios.put('http://localhost:8000/api/myShoeCloset/user/update/' + shoeId, updatedShoe)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    };

    return(
        <div>
            {loaded?
            <ShoeForm initialState = {state} onSubmitProp = {onSubmitProp} />:
            <span>Loading...</span>
            }
        </div>
    );
};

export default UpdateShoePage;