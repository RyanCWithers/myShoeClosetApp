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
        axios.get("http://localhost:8000/api/myShoeCloset/user", {withCredentials: true})
            .then(user => {
                setFirstName(user.data.firstName);
                setLastName(user.data.lastName);
                setShoes(user.data.shoes);
                setLoaded(true);
                console.log(user.data);
            })
            .catch(err => console.log(err))
    }, [])

    return(
        <div className = "container-fluid">
            <Navbar />
            {loaded?
            <>
                <h1>Hello {firstName} {lastName}!</h1>
                <ShoesList shoes = {shoes} />
            </>
            :
            <span>Loading...</span>
            }

        </div>
    );
};

export default MainUserPage;