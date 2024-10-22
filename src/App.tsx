import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { QueryClient, QueryClientProvider } from 'react-query';
import Cart from './pages/Cart';
import { Toaster } from 'react-hot-toast';


function App() {
  const queryClient = new QueryClient();
  const userData: any = localStorage.getItem('userData')
  console.log("asdlkfjasdlfkj", userData)
  return (
    <>
      <Toaster />
      <QueryClientProvider client={queryClient}>
        <Router basename='/'>
          <Routes>
            <Route path='/' element={<Login />}></Route>
          </Routes>
          <Routes>
            <Route path='/Register' element={userData?.length > 0 ? <Register /> : <Login />}></Route>
          </Routes>
          <Routes>
            <Route path='/Home' element={userData?.length > 0 ? <Home /> : <Login />}></Route>
          </Routes>
          <Routes>
            <Route path='/Cart' element={userData?.length > 0 ? <Cart /> : <Login />}></Route>
          </Routes>
        </Router>
      </QueryClientProvider>
    </>
  );
}

export default App;
