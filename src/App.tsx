import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { QueryClient, QueryClientProvider } from 'react-query';
import Cart from './pages/Cart';

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router basename='/'>
          <Routes>
            <Route path='/' element={<Login />}></Route>
          </Routes>
          <Routes>
            <Route path='/Register' element={<Register />}></Route>
          </Routes>
          <Routes>
            <Route path='/Home' element={<Home />}></Route>
          </Routes>
          <Routes>
            <Route path='/Cart' element={<Cart />}></Route>
          </Routes>
        </Router>
      </QueryClientProvider>
    </>
  );
}

export default App;
