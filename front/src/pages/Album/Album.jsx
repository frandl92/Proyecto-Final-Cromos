
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Cromo from "../../components/Cromo/Cromo";
import { SWContext } from "../../context/context";
import { JwtContext } from "../../context/jwtContext";
import "./album.scss"


const Album = () => {
  const { cromos,  } = useContext(SWContext);
  const [getCromo, setGetCromo] = useState();
  const {user} = useContext(JwtContext)
  console.log(user);
  return (
    <>
    

      <p>{user.email}</p>
    
      <img className='nav' src={getCromo} alt='...'></img>

      {cromos.length ? (
        <div className='album'>
          {cromos.map((cromo) => (

            <Link key={cromo._id} to={`${cromo.nombre}`}>
            <figure key={cromo._id}   onClick={()=> setGetCromo (cromo.imagen)} >
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
// {user.album.includes(cromo._id) ? className="cromo" : className= "opaco" } 
// className="cromo"
// {user.album.includes(cromo._id) ? className="cromo" : className= "opaco"} 

export default Album;
