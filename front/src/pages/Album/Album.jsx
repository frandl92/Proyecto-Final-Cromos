
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cromo from "../../components/Cromo/Cromo";
import { SWContext } from "../../context/context";
import { JwtContext } from "../../context/jwtContext";
import "./album.scss"
import axios from "axios";

const Album = () => {
  const { cromos, getCromos } = useContext(SWContext);
  const [getCromo, setGetCromo] = useState();
  const {user} = useContext(JwtContext)

  console.log(user);


  useEffect(()=> {
    getCromos();
  },[])

  
  const [lete, setLete] = useState(true);
  const onClickk = () => {
    setLete(!lete);

    
  };



  return (
    <>
    {/* <Cromo cromoImg={use.imagen} cromoNombre={use.nombre} /> */}

      <div className="album">{user.album.map((use)=>(
        <Link key={use._id} to={`${use.nombre}`}>
            <figure key={use._id}  onClick={()=> setGetCromo (use.imagen)} >
              <Cromo cromoImg= {use.imagen} cromoNombre = {use.nombre}></Cromo>
                
            </figure>
            </Link>
  
      ))}
      
      </div>
      

     <button onClick={onClickk}  >aquiiiii</button>


      {!lete && (
        <div className='album'>
          {cromos.map((cromo) => (

           
            <figure key={cromo._id}   className="opaco" onClick={()=> setGetCromo (cromo.imagen)} >
              <Cromo cromoImg= {cromo.imagen} cromoNombre = {cromo.nombre}></Cromo>

            </figure>
            

          ))}
        </div>
      ) 
      }
    </>
  );
};
 

export default Album;
