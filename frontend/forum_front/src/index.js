import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DonateBody from './components/donation/DonateBody';
import SignIn from './components/authform/SignIn';
import SignUp from './components/authform/SignUp';
import Header from './components/header/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        {/* <Route path="/" element={<DonateBody/>} /> */}
         <Route path="/signin" element={<SignIn/>} />
        <Route path="/signup" element={<SignUp />} /> 
      </Routes>
    </Router>
  </React.StrictMode>
);
reportWebVitals();
