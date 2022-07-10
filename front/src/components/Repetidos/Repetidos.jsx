import React, { useContext } from 'react'
import { JwtContext } from '../../context/jwtContext'

const Repetidos = () => {

    const {user} = useContext(JwtContext)
    console.log(user.repetido);

  return (

    <>
    <div>Repetidos</div>
{/* 
    <p>{user.repetido.map((repe) => {

        <p>repe.</p>

    })}</p> */}
        
    </>

    
  )
}

export default Repetidos