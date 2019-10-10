import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import MyTrip from './components/MyTrip.component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
            <div className="container">
                <Route path="/" exact component={MyTrip}/>
            </div>
        </Router>
      </header>
    </div>
  );
}

export default App;
