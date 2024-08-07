import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import { Provider } from 'react-redux';
import store from './components/store';

function App() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    
    <Provider store={store}>

    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home isLoggedIn={isLoggedIn} onLogout={handleLogout} />} />
        <Route 
          path='/login' 
          element={<Login onLogin={handleLogin} />} 
          />
        <Route path='/register' element={<Register />} />
        <Route path='/dash' element={<Dashboard onLogout={handleLogout} />} />
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
