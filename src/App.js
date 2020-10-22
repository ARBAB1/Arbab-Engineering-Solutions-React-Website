import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'

import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer';


function App() {
  return (
    <>
    <Navbar />
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/About' component={About}/>
      <Route exact path='/Services' component={Services}/>
      <Route exact path='/Contact' component={Contact}/>
      <Redirect to='/' component={Home} />
    </Switch>
    <Footer />
</>
  );
}

export default App;
