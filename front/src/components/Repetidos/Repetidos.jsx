import React, { useContext, useEffect, useState } from 'react'
import { SWContext } from '../../context/context'
import { JwtContext } from '../../context/jwtContext'
import Cromo from '../Cromo/Cromo';
import "./Repetidos.scss"

const Repetidos = () => {

  const {cromos, getCromos} = useContext(SWContext);

  const [repetido, setRepetido]= useState();

  const {user} = useContext(JwtContext);

  useEffect(()=>{
    getCromos();
  },[])

  


  return (

    <>

<h3> ESTOS SON TUS CROMOS REPETIDOS</h3>

    <div className='divRepetidos'>

    
    {user.repetido.map((use) => (
    <figure >
      <Cromo cromoImg={use.imagen} cromoNombre={use.nombre}></Cromo>
    </figure>
   ))}


    </div>

  
  
        
    </>

    
  )
}

export default Repetidos