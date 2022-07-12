import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Cromo from "../../components/Cromo/Cromo";
import { SWContext } from "../../context/context";
import { JwtContext } from "../../context/jwtContext";

const Repetidos = () => {
    const { repe , album} = useContext(JwtContext)

console.log(repe);
    return (
        <>
         <div className="album">{repe.map((use)=>(
        <Link key={use._id} to={`${use.nombre}`}>
            <figure key={use._id}   >
              <Cromo cromoImg= {use.imagen} cromoNombre = {use.nombre}></Cromo>

            </figure>
          </Link>
        ))}
      </div>

        </>
    )
};
export default Repetidos;