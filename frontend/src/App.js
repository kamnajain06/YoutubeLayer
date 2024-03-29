import { useState } from 'react';
import { Navbar } from './Components/Navbar';
import { Route,Routes } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Dashboard } from './Pages/Dashboard';
import { Signup } from './Pages/Signup';
import { Login } from './Pages/Login';
import { PrivateRoute } from './Components/PrivateRoute';        
import MainHeader from './Components/MainHeader'
import About from './Pages/About'
import { EditorDashboard } from './Pages/EditorDashboard';
import { TokenProvider } from './context/tokenContext';

function App() {

const[isLoggedIn,setISLoggedIn]=useState(false);

  return (
    <TokenProvider>
    <div className='bg-slate-950 w-screen h-screen text-white flex flex-col overflow-hidden '>
      <Navbar isLoggedIn={isLoggedIn} setISLoggedIn={setISLoggedIn} />
      <Routes>
        <Route path='/' element={<MainHeader></MainHeader>}>
          <Route path="/" element={<Home setISLoggedIn={setISLoggedIn}/>}/>
          <Route path="/about" element={<About setISLoggedIn={setISLoggedIn}/>}/>
          <Route path="/login" element={<Login setISLoggedIn={setISLoggedIn}/>}/>
          <Route path="/signup" element={<Signup setISLoggedIn={setISLoggedIn}/>}/>
          <Route path="/dashboard" element={<Dashboard setISLoggedIn={setISLoggedIn}></Dashboard>}/>
          <Route path="/editorDashboard" element={<EditorDashboard setISLoggedIn={setISLoggedIn}></EditorDashboard>}/>
        </Route>
      </Routes>
    </div>
    </TokenProvider>
  );
}

export default App;
