import React from 'react';
import BusinessDetails from "./components/business-details";
import Login from "./pages/login";
import Register from "./pages/register";
import Dashboard from "./pages/dashboard";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

require('dotenv').config()

function App() {
  
  return (
      <Router>
          <Routes>
              <Route path="/register" element={<Register />}/>
              <Route path="/" element={ <Login />} />
              <Route path="/dashboard" element={<Dashboard />}/>
          </Routes>
      </Router>
      
  );
}

export default App;
