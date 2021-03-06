import React , {useEffect, useState} from 'react';
import axios from 'axios';
import ShoesList from '../components/ShoesList';
import Navbar from '../components/Navbar';
import ShoeFilter from '../components/ShoeFilter';
import BackToTop from '../components/BackToTop';

const MainUserPage = props =>{

    const [firstName, setFirstName] = useState('');
    const [shoes, setShoes] = useState([]);
    const [filteredShoes, setFilteredShoes] = useState([]);
    const [loaded, setLoaded] = useState(false);
    let shoeTotals = filteredShoes.length;

    useEffect(()=>{
        axios.get("http://localhost:8000/api/myShoeCloset/user", {withCredentials: true})
            .then(user => {
                setFirstName(user.data.firstName);
                setShoes(user.data.shoes);
                setFilteredShoes(user.data.shoes);
                setLoaded(true);
                console.log(user.data);
            })
            .catch(err => console.log(err))
    }, []);

    const filterDom = filterVal =>{
        switch (filterVal){
            case 'all':
                setFilteredShoes(shoes);
                break;
            default:
                setFilteredShoes(shoes.filter(item => item.shoeType[filterVal] === true));
        };
    };

    return(
        <div className = "container-fluid">
            <Navbar/>
            {
                loaded?
                <>
                    <h1>{firstName}'s Shoe Closet</h1>
                    <ShoeFilter filterDom = {filterDom} shoeTotals = {shoeTotals}/>
                    <ShoesList shoes = {filteredShoes} />
                    <BackToTop />
                </>
                :
                <span>Loading...</span>
            }

        </div>
    );
};

export default MainUserPage;