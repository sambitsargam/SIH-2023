import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login';

function App() {
    return (
        <Router>
        <div className="App">
            <Login />
        </div>
        </Router>
    );
    }

export default App;
