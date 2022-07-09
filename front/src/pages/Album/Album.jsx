import React, { useContext } from "react";
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
              <img src={cromo.imagen} alt={cromo.nombre} />
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
