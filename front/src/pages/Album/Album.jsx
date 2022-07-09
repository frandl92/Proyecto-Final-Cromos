
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Cromo from "../../components/Cromo/Cromo";
import { SWContext } from "../../context/context";
import "./album.scss"


const Album = () => {
  const { cromos } = useContext(SWContext);
  const [getCromo, setGetCromo] = useState();

  return (
    <>

      <h1>esto es pagina album no tiene nada componetizado</h1>
      <img className='nav' src={getCromo} alt='...'></img>

      {cromos.length ? (
        <div className='album'>
          {cromos.map((cromo) => (

            <Link key={cromo._id} to={`${cromo.nombre}`}>
            <figure key={cromo._id} className="cromo" onClick={()=> setGetCromo (cromo.imagen)} >
              <Cromo cromoImg= {cromo.imagen} cromoNombre = {cromo.nombre}></Cromo>

            </figure>
            </Link>

          ))}
        </div>
      ) : (
        <h3>Loading</h3>
      )}
    </>
  );
};

export default Album;
