import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { Switch, Route , Redirect} from 'react-router-dom'
import Home from './components/home';
import Resume from './components/resume';
import Contacts from './components/contacts';
import Portfolio from './components/portfolio';
import './App.css';



function App() {
  return (
    <>
  <CssBaseline/>
    <Route exact path="/" component={Home}/>
    <Route  path="/portfolio" component={Portfolio}/>
    <Route path="/resume" component={Resume}/>
    <Route path="/contacts" component={Contacts}/>
</>
  );
}

export default App;
