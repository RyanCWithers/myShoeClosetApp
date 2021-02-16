import axios from 'axios';
import { navigate } from '@reach/router';

const logoutHandler = () =>{
    axios.post("http://localhost:8000/api/myShoeCloset/logout/", {}, {withCredentials: true})
        .then((res) => {
            console.log(res);
            document.cookie = "isLoggedIn=;Max-Age=0";
            navigate('/api/myShoeCloset/login');
        })
        .catch((err) => console.log(err))
};

export default logoutHandler;