import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Cromo from '../../components/Cromo/Cromo';
import { SWContext } from '../../context/context';
import { JwtContext } from '../../context/jwtContext';
import {API} from "../../sevices/Api"

const Repetidos = () => {
  const { repe, user, setUser, setRepe } = useContext(JwtContext);
  


  
    


      const sendMercado1 = (id) =>{
        let inso = { deleteCromo : id}
        let enviarCromo = {user1Id: user._id, cromo1Id: id}
        API.patch("users/eliminar/" + user._id, inso).then((res)=>{
            console.log("probando patch" , res.data.nuevo.repetido)
            setUser(res.data.nuevo);
            setRepe(res.data.nuevo.repetido);
            

        });
        API.post("/mercado/", enviarCromo)
    }

  console.log(repe);
  return (
    <>
      <div className='album'>
        {repe.map((use) => (
          <figure key={use._id}>
            <Cromo cromoImg={use.imagen} cromoNombre={use.nombre}></Cromo>
            <button onClick={() => sendMercado1(use._id)}>ENVIAR A MERCADO</button>

          </figure>
        ))}
      </div>
    </>
  );
};

export default Repetidos;
