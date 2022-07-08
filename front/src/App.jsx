
import './App.scss';
import LoginComponent from './components/LoginComponent/LoginComponent';
import RegisterComponent from './components/RegisterComponent/RegisterComponent';
import Inicio from './pages/Inicio/Inicio';
import Album from './pages/Album/Album';
import Mercado from './pages/Mercado/Mercado';
import Navigator from './core/Navigator';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {

  const [usuario, setUsuario] = useState();

  return (
    <Router>
    <div className="App">

    
      <Navigator/>
      <Routes>
    <Route path="/" element={<Inicio/>}/>
    <Route path="/album" element={<Album/>}/>
    <Route path="/mercado" element={<Mercado/>}/>

      </Routes>

    </div>
    </Router>
  );
}

export default App;
