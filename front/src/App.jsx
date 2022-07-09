import React, { useContext } from "react";
import "./App.scss";

import Inicio from "./pages/Inicio/Inicio";
import Album from "./pages/Album/Album";
import Mercado from "./pages/Mercado/Mercado";
import Navigator from "./core/Navigator";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { JwtContext } from "./context/jwtContext";

import { SWContextProvider } from "./context/context";
import Aleatorio from "./components/Aleatorio/Aleatorio";

import CromoDetail from "./components/CromoDetail/CromoDetail"

import Register from "./pages/Register/Register";


function App() {
  const [isAdmin, setAdmin] = useState(false);
  const [jwt, setJwt] = useState();

  return (
    <>
      <JwtContext.Provider value={{ isAdmin, setAdmin, jwt, setJwt }}>
      <SWContextProvider>
        <Router>
          {/* {isAdmin===false ? <Inicio />: <Navigator/>} */}

          <div className="App">
            <Navigator></Navigator>
            <Routes>
              <Route path="/album" element={<Album />} />
              <Route path="/mercado" element={<Mercado />} />
              <Route path="/" element={<Inicio />} />
              <Route path="/cromo" element={<Aleatorio />} />

              <Route path="/album/:nombre" element={<CromoDetail />} />

              <Route path="/register" element={<Register />} />

            </Routes>
          </div>
        </Router>
        </SWContextProvider>
      </JwtContext.Provider>
    </>
  );
}

export default App;
