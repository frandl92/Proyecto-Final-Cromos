import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import Cromo from '../../../components/Cromo/Cromo';
import { SWContext } from '../../../context/context';
import "./Editar.scss";

const Editar = () => {
  const { cromos, getCromos } = useContext(SWContext);
  const [getCromo, setGetCromo] = useState();

  return (
    <><h2>Para editar o borrar un Cromo, clica sobre él</h2><div className="album">{cromos.map((cromo) => (
      <Link key={cromo._id} to={`${cromo.nombre}`}>
        <figure key={cromo._id} onClick={() => setGetCromo(cromo.imagen)}>
          <Cromo
            cromoImg={cromo.imagen}
            cromoNombre={cromo.nombre}></Cromo>
        </figure>
      </Link>
    ))}</div></>
  )
}

export default Editar

// onClick={() => setGetCromo(cromo.imagen)}