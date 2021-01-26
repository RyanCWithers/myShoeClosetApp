import './App.css';
import LoginPage from './views/LoginPage';
import MainUserPage from './views/MainUserPage';
import CreateShoePage from './views/CreateShoePage';
import {Router} from '@reach/router';

function App() {
  if(!document.cookie.usertoken){
    return(<LoginPage path = "/api/myShoeCloset/login" />)
  }
  return (
    <div className="App">
      <Router>
        <MainUserPage path = "/api/myShoeCloset/user/"/>
        <CreateShoePage path = "/api/myShoeCloset/user/:shoeId/"/>
      </Router>

      
    </div>
  );
}

export default App;
