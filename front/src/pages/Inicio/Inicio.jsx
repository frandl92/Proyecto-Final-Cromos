import React from 'react'
import LoginComponent from '../../components/LoginComponent/LoginComponent'

import RegisterComponent from '../../components/RegisterComponent/RegisterComponent'

import Login from '../Login/Login'
import Register from '../Register/Register'
import ButtonLogout from "../../components/Logout/ButtonLogout"

import"./Inicio.scss";

const Inicio = () => {
  return (
    
    <div className="inicio">

    <Login></Login>

    </div>
  )
}

export default Inicio