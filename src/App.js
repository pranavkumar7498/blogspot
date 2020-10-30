import React from 'react';
import Footer from './Components/Footer';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import  Header  from './Components/Header';
import  About  from './Components/About';
import Contact  from './Components/Contact';
import Feedbackk  from './Components/Feedbackk';
import Terms  from './Components/Terms';
import Policy  from './Components/Policy';
import Home  from './Components/Home';

import Gadgets  from './Components/Gadgets';
import Technology  from './Components/Technology';
import Food  from './Components/Food';
import News  from './Components/News';
import Trends  from './Components/Trends';

function App() {
  return (
    
    <React.Fragment>
    
      <Router>
        <Header />
       
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/feedback" component={Feedbackk} />
          <Route path="/contact" component={Contact} />
          <Route path="/terms" component={Terms} />
          <Route path="/policy" component={Policy} />     
          <Route exact path="/gadgets" component={Gadgets} />
          <Route path="/technology" component={Technology} />
          <Route path="/food" component={Food} />
          <Route path="/news" component={News} />
          <Route path="/trends" component={Trends} />
        </Switch>
        <Footer/>
        
        
      </Router>
      
      
    </React.Fragment>
    
  );
}

export default App;