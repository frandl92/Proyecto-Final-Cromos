import React, { useContext } from "react";
import { SWContext } from "../../context/context";
import "./album.scss"

const Album = () => {
  const { cromos } = useContext(SWContext);

  return (
    <>

 
      <h1>esto es pagina album no tiene nada componetizado</h1>

    
      {cromos.length ? (
        <div className="album">
          {cromos.map((cromo) => (
            <figure key={cromo._id} className="cromo">

              

              <p>{cromo.posicion}</p>
              <img src={cromo.imagen} alt={cromo.nombre} />

              


              <h3>{cromo.nombre}</h3>
            

            </figure>
          ))}
        </div>
      ) : (
        <h3>Loading</h3>
      )}
    </>
  );
};

export default Album;
