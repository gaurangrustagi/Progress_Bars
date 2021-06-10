import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import progressBars from './Containers';
import ProgressBars from './Containers';


function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/" render={props => <ProgressBars />} />
        </Switch>
      </Router>
    </React.Fragment>

  );
}

export default App;
