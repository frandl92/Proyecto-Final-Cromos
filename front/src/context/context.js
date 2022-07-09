import React, { useState, useEffect, createContext } from "react";


export const SWContext = createContext();

const BASEURL = "https://localhost:8005";

export const SWContextProvider = ({ children }) =>{

    const [cromos, setCromos] = useState([]);
    
    useEffect(() => {
        const getCromos = async () => {
          const cromosAPI = await fetch("http://localhost:8005/cromos");
          const cromosJSON = await cromosAPI.json();
          setCromos(cromosJSON.Cromo);
          console.log(cromosJSON.Cromo)
        };
        getCromos();
        
      }, []);

      return (
        <SWContext.Provider value={{ cromos }}>
          {children}
        </SWContext.Provider>
      );




}