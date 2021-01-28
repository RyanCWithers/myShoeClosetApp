import './App.css';
import LoginPage from './views/LoginPage';
import MainUserPage from './views/MainUserPage';
import CreateShoePage from './views/CreateShoePage';
import {Router, navigate} from '@reach/router';
import {useState} from 'react';

function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  if(!loggedIn){
    navigate("/api/myShoeCloset/login");
  }
  
  return (
    
    <div className="App">
      <Router>
            <MainUserPage path = "/api/myShoeCloset/user"/>
            <CreateShoePage path = "/api/myShoeCloset/user/createShoe"/>
            <LoginPage path = "/api/myShoeCloset/login" setLoggedIn = {setLoggedIn}/>
      </Router>     
    </div>
  );
}

export default App;
