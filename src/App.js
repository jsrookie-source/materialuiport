import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { ToastContainer } from "react-toastify";
import { Switch, Route , Redirect} from 'react-router-dom'
import Home from './components/home';
import Resume from './components/resume';
import Notfound from './components/notFound';
import Contacts from './components/contacts';
import Portfolio from './components/portfolio';
import './App.css';



function App() {
  return (
    <>
    
  <CssBaseline/>
     <ToastContainer />
     <Switch>

    <Route exact path="/home" component={Home}/>
    <Route  path="/portfolio" component={Portfolio}/>
    <Route path="/resume" component={Resume}/>
    <Route path="/contacts" component={Contacts}/>
    <Route path="/not-found" component={Notfound} />
    <Redirect from="/" exact to="/home" />
    <Redirect to="/not-found" />
     </Switch>
</>
  );
}

export default App;
