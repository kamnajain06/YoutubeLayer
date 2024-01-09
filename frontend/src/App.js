import { useState } from 'react';
import './App.css';
import { Navbar } from './Components/Navbar';
import { Route,Routes } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Dashboard } from './Pages/Dashboard';
import { Signup } from './Pages/Signup';
import { Login } from './Pages/Login';
import { PrivateRoute } from './Components/PrivateRoute';
import MainHeader from './Components/MainHeader'
import About from './Pages/About'

function App() {

const[isLoggedIn,setISLoggedIn]=useState(false);

  return (
    <div className='bg-slate-950 w-screen h-screen text-white flex flex-col'>
      <Navbar isLoggedIn={isLoggedIn} setISLoggedIn={setISLoggedIn}/>
      <Routes>
        <Route path='/' element={<MainHeader></MainHeader>}>
          <Route path="/" element={<Home setISLoggedIn={setISLoggedIn}/>}/>
          <Route path="/about" element={<About setISLoggedIn={setISLoggedIn}/>}/>
          <Route path="/login" element={<Login setISLoggedIn={setISLoggedIn}/>}/>
          <Route path="/signup" element={<Signup setISLoggedIn={setISLoggedIn}/>}/>
          <Route path="/dashboard" element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <Dashboard/>
            </PrivateRoute>
        }/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
