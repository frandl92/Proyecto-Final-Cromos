import React, { useContext } from 'react';
import './App.scss';
import LoginComponent from './components/LoginComponent/LoginComponent';
import RegisterComponent from './components/RegisterComponent/RegisterComponent';
import Inicio from './pages/Inicio/Inicio';
import Album from './pages/Album/Album';
import Mercado from './pages/Mercado/Mercado';
import Navigator from './core/Navigator';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { JwtContext } from './context/jwtContext';
import Login from './pages/Login/Login';

function App() {
  
  const [isAdmin, setAdmin] = useState(true);


  return (
    <>
    <JwtContext.Provider value={{isAdmin,setAdmin,}} >
    <Router>
    {isAdmin===false ? <Inicio />: <Navigator/>}
   
    <div className="App">



      
      
      <Routes>
    <Route path="/album" element={<Album/>}/>
    <Route path="/mercado" element={<Mercado/>}/>

      </Routes>

    </div>
    </Router>
    </JwtContext.Provider>
    </>
  );
}

export default App;
