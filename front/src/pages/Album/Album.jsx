import React, { useContext } from "react";
import Cromo from "../../components/Cromo/Cromo";
import { SWContext } from "../../context/context";

const Album = () => {
  const { cromos } = useContext(SWContext);

  return (
    <>

    <h1> Pintando cromos</h1>

    
      {cromos.length ? (
        <div className="album">
          {cromos.map((cromo) => (
            <figure key={cromo._id} className="cromo">
              <Cromo cromoImg= {cromo.imagen} cromoNombre = {cromo.nombre}></Cromo>
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
