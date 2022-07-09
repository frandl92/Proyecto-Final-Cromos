import React, { useContext } from 'react';
import { SWContext } from "../../context/context";
import "./Cromo.scss"

const Cromo = ({cromoImg, cromoNombre}) => {
  const { cromos } = useContext(SWContext);

  
  return (
    <div className='cromox'>
        <img src={cromoImg} className="perfil"></img>
        <h2 className='nombre'>{cromoNombre}</h2>

        
    
    
    
    </div>
  )
}

export default Cromo