import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
            <div className="container">
                <Route path="/" exact component={}/>
            </div>
        </Router>
      </header>
    </div>
  );
}

export default App;
