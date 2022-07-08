import React from 'react'
import LoginComponent from '../../components/LoginComponent/LoginComponent'

import RegisterComponent from '../../components/RegisterComponent/RegisterComponent'
import ButtonLogout from "../../components/Logout/ButtonLogout"

const Inicio = () => {
  return (
    
    <div>
    <RegisterComponent/>
    <LoginComponent/>
    {/* <ButtonLogout/> */}
    
    </div>
  )
}

export default Inicio