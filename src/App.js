  
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import BubblePage from './components/BubblePage'
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import "./styles.scss";

function App(props) {
	const handleLogout = () => {
		window.localStorage.removeItem('token');
		props.history.push('/');
	}
  return (
    <Router>
      <div className="App">
        <header>
          Color Picker Sprint Challenge
          <a data-testid="logoutButton" onClick={handleLogout} href="/" >logout</a>
        </header> 

        <Route exact path="/" component={Login} />
        <PrivateRoute path="/bubble" component={BubblePage} />
        
      </div>
    </Router>
  );
}

export default App;


//Task List:
//1. Render BubblePage as a PrivateRoute
//2. Build the logout button to remove the localStorage Item.