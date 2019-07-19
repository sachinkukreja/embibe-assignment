import React from 'react';
import './App.css';
import Dashboard from './Containers/Dashboard/Dashboard';
import { BrowserRouter as Router, Route } from "react-router-dom"
import StudentDetail from './Containers/StudentDetails/StudentDeatils';
import Login from './Containers/Login/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/student/:studentId" component={StudentDetail} />
      </Router>
    
    </div>
  );
}

export default App;
