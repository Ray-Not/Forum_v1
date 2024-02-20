import React from 'react';
import Header from './components/header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignIn from './components/authform/SignIn';
import NewsImage from './components/news/NewsImage';

function App() {
  return (
    <div>
      <Header />
      <SignIn />
    </div>
  );
}

export default App;
