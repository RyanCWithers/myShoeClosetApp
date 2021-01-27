import './App.css';
import LoginPage from './views/LoginPage';
import MainUserPage from './views/MainUserPage';
import CreateShoePage from './views/CreateShoePage';
import {Router} from '@reach/router';
import {useState} from 'react';

function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  // if(!loggedIn){
  //   return(<LoginPage setLoggedIn = {setLoggedIn}/>)
  // }
  return (
    
    <div className="App">
      <Router>
        <LoginPage path = "/api/myShoeCloset" setLoggedIn = {setLoggedIn}/>
        <MainUserPage path = "/api/myShoeCloset/user"/>
        <CreateShoePage path = "/api/myShoeCloset/user/createShoe"/>
      </Router>     
    </div>
  );
}

export default App;
