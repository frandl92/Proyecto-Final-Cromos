import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navigator.scss";
import { JwtContext } from "../context/jwtContext";
import axios from "axios";

import ButtonLogout from "../components/Logout/ButtonLogout";

const Navigator = () => {
  const { jwt, isAdmin, setAdmin } = useContext(JwtContext);

 

  useEffect(() => {
    const getAllUsuarios = async () => {

     const res = await axios.get ("http://localhost:8005/users/");
     setAdmin(res.data.usuarios.rol)
    
     console.log(res);

    };
    getAllUsuarios();
  }, [])


  return (

    <div className="navegador">
      <div className="logo">
        <img src="./assets/LogoCromos.png" alt="logo" />
        <h3>CROMIFY</h3>
      </div>

      
        {jwt ? (
          <>
            {/* <li className="opcionmenu">
          <Link to='/inicio'>INICIO</Link>
        </li>
        <li className="opcionmenu">
          <Link to='/cromo'>CROMOS</Link>
        </li>
        <li className="opcionmenu">
          <Link to='/album'>ALBUM</Link>
        </li>
        <li className="opcionmenu">
          <Link to='/mercado'>MERCADO</Link>
        </li> */}


          <ul>

            {isAdmin === true && (
              <>
                <li className="opcionmenu">
                  <Link to="/album">ÁLBUM</Link>
                </li>
                <li className="opcionmenu">
                  <Link to="/editar">EDITAR</Link>
                </li>
                <li className="opcionmenu">
                  <Link to="/crear">CREAR</Link>
                </li>
              </>
            )}

            {isAdmin === false && (
              <>
                <li className="opcionmenu">
                  <Link to="/inicio">INICIO</Link>
                </li>
                <li className="opcionmenu">
                  <Link to="/cromo">CROMOS</Link>
                </li>
                <li className="opcionmenu">
                  <Link to="/album">ALBUM</Link>
                </li>
                <li className="opcionmenu">
                  <Link to="/mercado">MERCADO</Link>
                </li>
              </>
            )}

            </ul>

            <ButtonLogout />
           
          </>
        ) : null}

        
      

     
    </div>
  );
};

export default Navigator;