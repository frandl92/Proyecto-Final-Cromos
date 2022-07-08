import React, { useContext } from 'react'
import {JwtContext} from "../../context/jwtContext";
import {useForm } from "react-hook-form";
//import { useNavigate } from "react-router-dom";
import { API } from "../../sevices/Api";


const LoginComponent = () => {

    const { register, handleSubmit } = useForm();
    const setJwt = useContext(JwtContext);

    //const navigate = useNavigate ();

    const onSubmit = (formData) => {
      API.post("users/login", formData).then((res) => {
        localStorage.setItem("token", res.data.data.token);
        localStorage.setItem("user", res.data.data.user.email);
        setJwt(localStorage.getItem("token"));
        //navigate("/login");
      });
    };


  return (

    <>


    <form onSubmit={handleSubmit(onSubmit)}>
 
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            {...register("email", { required: true })}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            {...register("password", { required: true })}
          />
          <button type="submit">Register</button>
        </form>


</>

    
  )
}

export default LoginComponent