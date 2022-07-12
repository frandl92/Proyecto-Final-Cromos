import React, { useState, useEffect, createContext, useContext } from "react";
import { JwtContext } from "./jwtContext";


export const SWContext = createContext();

const BASEURL = "https://localhost:8005";

export const SWContextProvider = ({ children }) =>{

    const [cromos, setCromos] = useState([]);
    const {setUser} = useContext(JwtContext);

    const getCromos = async () => {
      const cromosAPI = await fetch("http://localhost:8005/cromos");
      const cromosJSON = await cromosAPI.json();
      setCromos(cromosJSON.Cromo);
      console.log(cromosJSON.Cromo)
    };

    const getUser = async () => {
      const usuarioApi = await fetch("http://localhost:8005/users/:id");
      const usuarioJSON = await usuarioApi.json();
      setUser(usuarioJSON._id)
      console.log(usuarioJSON._id)
    };

    
    useEffect(() => {
        
        getCromos();
      
      }, []);

      return (
        <SWContext.Provider value={{ cromos, getCromos, getUser }}>
          {children}
        </SWContext.Provider>
      );




}