import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Cromo from '../../components/Cromo/Cromo';
import { SWContext } from '../../context/context';
import { JwtContext } from '../../context/jwtContext';
import './album.scss';
import axios from 'axios';

const Album = () => {

  const { cromos, getCromos } = useContext(SWContext);

  const [getCromo, setGetCromo] = useState();
  const { user } = useContext(JwtContext);

  
  useEffect(()=> {
    getCromos();
  },[])

  

  const [lete, setLete] = useState(true);
  const onClickk = () => {
    setLete(!lete);
  };



  return (
    <div className='mialbum'>
    <div className='arriba'>
      <img src='https://cdn-icons-png.flaticon.com/512/1902/1902705.png' alt='album'></img>
      <h1 className='titulo1'>Bienvenido {user.usuario}, este es tu album</h1>
      <img src='https://cdn-icons-png.flaticon.com/512/1902/1902705.png' alt='album'></img>
    </div>
      <div className='album'>
        {user.album.map((use) => (
          <Link key={use._id} to={`${use.nombre}`}>
            <figure key={use._id} onClick={() => setGetCromo(use.imagen)}>
              <Cromo cromoImg={use.imagen} cromoNombre={use.nombre}></Cromo>
            </figure>
          </Link>
        ))}
      </div>

      <button onClick={onClickk} className='linkregistro' id='abajo'>
        MOSTRAR TODOS
      </button>

      {!lete && (
        <>
          {' '}
          <h1 className='titulo2'>
            EXISTEN TODOS ESTOS, SE CONSTANTE PARA CONSEGUIRLOS
          </h1>
          <div className='album'>
            {cromos.map((cromo) => (
              <figure
                key={cromo._id}
                className='opaco'
                onClick={() => setGetCromo(cromo.imagen)}>
                <Cromo
                  cromoImg={cromo.imagen}
                  cromoNombre={cromo.nombre}></Cromo>
              </figure>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Album;
