import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Signup from './components/Signup';
import Profile from './components/Profile';
import Blog from './components/Blog/Blog';
import Navbar from './components/Utility/Navbar';
import Footer from './components/Utility/Footer';
import admin from './components/Admin/admin';
import pw from './components/Blog/pw';

function App() {
  return (
  <Router>
    <Navbar />
    <Switch>
      <Route exact path= "/" component={Home}/>
      <Route exact path= "/about" component={About}/>
      <Route exact path= "/contact" component={Contact}/>
      <Route exact path= "/Signup" component={Signup}/>
      <Route exact path= "/Profile" component={Profile}/>
      <Route exact path= "/Blog" component={Blog}/>
      <Route exact path= "/admin" component={admin}/>
      <Route exact path="/pw" component={pw}/>
    </Switch>
    <Footer/>
  </Router>
  );
}

export default App;
