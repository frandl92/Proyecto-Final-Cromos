import React, { useContext, useState } from 'react'
import {JwtContext} from "../../context/jwtContext";
import {useForm } from "react-hook-form";
import { API } from "../../sevices/Api";
import { Link, useNavigate } from 'react-router-dom';
import "./LoginComponent.scss";


const LoginComponent = () => {

    const { register, handleSubmit } = useForm();
    const {setAdmin, setJwt, user, setUser } = useContext(JwtContext);
    const navigate = useNavigate ();

    

    const onSubmit = (formData) => {
      API.post("users/login", formData).then((res) => {
        console.log(res)
        localStorage.setItem("token", res.data.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.data.user));
        // localStorage.setItem("repes", res.data.data.user.repetido)
        setJwt(localStorage.getItem("token"));
        setUser(res.data.data.user)
        navigate("/inicio");
        
        
        // setRepes(res.data.data.user.repetido);
        
        
        if (res.data.data.user.rol === "admin") {
          setAdmin(true)
          
        }else{
          setAdmin(false)
        }
        
      });
    };



  return (

    <>

    <section>
    <form onSubmit={handleSubmit(onSubmit)} className="login">
          <div className="campo">
            <label htmlFor="email">EMAIL</label>
            <input
              type="email"
              id="email"
              {...register("email", { required: true })}
            />
          </div>
          <div className="campo">
            <label htmlFor="password">PASSWORD</label>
            <input
              type="password"
              id="password"
              {...register("password", { required: true })}
            />
          </div>
          <div >
          <button type="submit" className="entrar">ENTRAR</button>
          </div>
        </form>

        <h4>Si todavía no tienes un usuario, clica aquí</h4>
        <button className="linkregistro"><Link to = "/register">REGISTRARSE</Link></button>


        </section>

</>

  )
}

export default LoginComponent;