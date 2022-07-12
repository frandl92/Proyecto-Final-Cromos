import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cromo from "../../components/Cromo/Cromo";
import { SWContext } from "../../context/context";
import { JwtContext } from "../../context/jwtContext";
import "./album.scss";

const Album = () => {
  const { cromos, getCromos } = useContext(SWContext);
  const [getCromo, setGetCromo] = useState();


  const [nombre, setNombre] = useState("");



  useEffect(() => {
    getCromos();
  }, []);


  const {user, album} = useContext(JwtContext)

  const [lete, setLete] = useState(true);
  const onClickk = () => {
    setLete(!lete);
  };

  const buscar = (evento) => {

    
      setNombre(evento.target.value);

    
    
  };



  const filterCromos = cromos.filter((cromo) =>
    cromo.nombre.toLowerCase().includes(nombre.toLowerCase())
  );

  return (
    <div className="mialbum">
      <div className="arriba">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1902/1902705.png"
          alt="album"
        ></img>
        <h1 className="titulo1">Bienvenido {user.usuario}, este es tu album</h1>
        <img
          src="https://cdn-icons-png.flaticon.com/512/1902/1902705.png"
          alt="album"
        ></img>
      </div>

      

      <div className="album">
        {user.album.map((use) => (
          <Link key={use._id} to={`${use.nombre}`}>
            <figure key={use._id} onClick={() => setGetCromo(use.imagen)}>
              <Cromo cromoImg={use.imagen} cromoNombre={use.nombre}></Cromo>

            </figure>
          </Link>
        ))}
      </div>

      <button onClick={onClickk} className="linkregistro" id="abajo">
        MOSTRAR TODOS
      </button>

      {!lete && (
        <>
          {" "}
          <h1 className="titulo2">
            EXISTEN TODOS ESTOS, SE CONSTANTE PARA CONSEGUIRLOS
          </h1>

          {/* --------BUSCADOR---------- */}

      <div className="buscador">
        <label htmlFor="buscador"> Busca un cromo de la coleccion </label>
        <input
          type="text"
          id="buscador"
          
          onChange={(evento) => buscar(evento)}
        />
      </div>

      <div className="album">
        {filterCromos.map((filtrado) => (
          <figure key={filtrado._id} className="opaco">
            <Cromo
            
              cromoImg={filtrado.imagen}
              cromoNombre={filtrado.nombre}
              
            ></Cromo>
          </figure>
        ))}
      </div>


         
        </>
      )}
    </div>
  );
}


export default Album;
