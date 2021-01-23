import React, {useEffect, useState} from 'react';
import axios from 'axios';

const ShoesList = ({shoes}) =>{

    const [shoes, setShoes] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() =>{
        axios.get('http://localhost:8000/api/myShoeCloset/user/')
            .then(res => {
                setShoes(res.data.shoes);
                setLoaded(true);
            })
            .catch(err => console.log(err))
    }, []);

    return(
        <div>
            <ul>
                {loaded?
                shoes.map((item, index) =>(
                    <li key = {index}>
                        <img src = {item.shoeImgLink} alt = "Shoe image not available"></img>
                        <span>{item.shoeName}</span>
                        <span>{item.shoeCompany}</span>
                        <span>{item.shoeSize}</span>
                    </li>
                )):
                <p>Loading...</p>
                }
            </ul>
            
        </div>
    )
};

export default ShoesList;