import React , {useEffect, useState} from 'react';
import axios from 'axios';
import ShoesList from '../components/ShoesList';
import Navbar from '../components/Navbar';

const MainUserPage = props =>{

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [shoes, setShoes] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(()=>{
        axios.get("http://localhost:8000/api/myShoeCloset/user")
            .then(user => {
                setFirstName(user.firstName);
                setLastName(user.lastName);
                setShoes(user.shoes);
                setLoaded(true);
            })
            .catch(err => console.log(err))
    }, [])

    return(
        <div>
            <Navbar />
            {loaded?
            <ShoesList shoes = {shoes} />:
            <span>Loading...</span>
            }

        </div>
    );
};

export default MainUserPage;