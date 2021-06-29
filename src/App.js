import React from "react"
import './styling/App.css';
import Main from "./main";
import TermsTemplate from "./termsTemplate";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";


function App (){
      return (
        <Router>
    <div className="App">
    <Switch>
    <Route path="/" exact component={Main}/>
    <Route path="/terms"  component={()=><TermsTemplate firstLink="terms" />}/>
    <Route path="/gdpr"  component={()=><TermsTemplate firstLink="gdpr" />}/>
    <Route path="/cookie"  component={()=><TermsTemplate firstLink="cookie" />}/>
    </Switch>
    </div>
    </Router>
  );
}

export default App;
