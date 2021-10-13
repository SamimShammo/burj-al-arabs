import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Book from './components/Book/Book';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './privateRoute/PrivateRoute';
import Notfound from './components/Notfound/Notfound';

function App() {
  return (
      <AuthProvider>
        <Router>
          <Header/>
          <Switch>
            <PrivateRoute path="/home">
              <Home />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/book">
              <Book />
            </PrivateRoute>
            <Route exact path="/">
              <Home />
            </Route>
            <Route  path="*">
              <Notfound />
            </Route>
          </Switch>
      </Router>
      </AuthProvider>
  );
}

export default App;
