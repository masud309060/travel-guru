import React, { createContext, useState } from 'react';
import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route, 
} from "react-router-dom";

import Booking from './components/Booking/Booking';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Search from './components/Search/Search';
import MapContainer from './components/Map/Map';

export const travelContext = createContext()

function App() {
  const [place, setPlace] = useState("cox's bazar");
  const [loginUser, setLoginUser] = useState({
    isSignIn: false,
    name: '',
    email: '',
    error: '',
    loginSuccess: false
});

  return (
    <travelContext.Provider value={{ travelArea: [place, setPlace], userLogin: [loginUser, setLoginUser]}}>
        <Router>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>

              <Route path="/booking/:exactpath"> <Booking/> </Route>

              <PrivateRoute path="/search/:exactpath"> <Search/> </PrivateRoute>

              <Route exact path="/login"> <Login/> </Route>

              <Route path="/"> <Home/> </Route>

          </Switch>
        </Router>
    </travelContext.Provider>
  );
}

export default App;
