import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./Navigator.scss";
// import { JwtContext } from '../context/jwtContext';
import axios from "axios";

const Navigator = () => {
  // const { jwt } = useContext(JwtContext);

  const [admin, setAdmin] = useState([]);

  useEffect(() => {
    const getAllUsuarios = async () => {
     const res = await axios.get ("http://localhost:8005/users/");
     setAdmin(res.data.usuarios.rol)
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
        <li>
          <Link to='/album'>ALBUM</Link>
        </li>
        <li>
          <Link to='/mercado'>MERCADO</Link>
        </li>
        <li>LogOut</li>
      </ul>
    </div>
  );
};

export default Navigator;
