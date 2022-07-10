import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./Navigator.scss";
import {JwtContext} from "../context/jwtContext";
import axios from "axios";
import ButtonLogout from '../components/Logout/ButtonLogout';




const Navigator = () => {
  const { jwt, isAdmin, setAdmin} = useContext(JwtContext);

  // const [admin, setAdmin] = useState([]);


  useEffect(() => {
    const getAllUsuarios = async () => {
     const res = await axios.get ("http://localhost:8005/users/");
     setAdmin(res.data.usuarios.rol)
    //  if(admin===admin){

    //  }
     console.log(res);
    };
    getAllUsuarios();
  })

  return (
    <div>
      <ul>
        <li className='logo'> <img src='./assets/LogoCromos.png' alt='logo'/> </li>
        
        <li>
          <Link to='/'>INICIO</Link>
        </li>

      {jwt ? (
        <>
        <li>
          <Link to='/cromo'>CROMOS</Link>
        </li>
        <li>
          <Link to='/album'>ALBUM</Link>
        </li>
        <li>
          <Link to='/mercado'>MERCADO</Link>
        </li>

        {isAdmin===true && (
          <>
          <li>
          <Link to='/editar'>EDITAR</Link>
        </li>
        <li>
          <Link to='/crear'>CREAR</Link>
        </li>
        </>)}
        
        <li> <ButtonLogout/> </li>

      </>): null}

      </ul>
        
    </div>
  );
};

export default Navigator;
