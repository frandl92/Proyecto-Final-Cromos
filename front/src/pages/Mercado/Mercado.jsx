import React, { useState, useEffect } from 'react';
import './Mercado.scss';
import Cromo from '../../components/Cromo/Cromo';
import PopUp from '../../components/PopUp/PopUp';

const Mercado = () => {
  const [mercado, setMercado] = useState();

  useEffect(() => {
    const getMercado = async () => {
      const mercadoAPI = await fetch('http://localhost:8005/mercado');
      const mercadoJSON = await mercadoAPI.json();
      setMercado(mercadoJSON.Mercado);
      console.log(mercadoJSON.Mercado);
    };

    getMercado();
  }, []);

  return (
    <div>
      {mercado &&
        mercado.map((mer) => (
          <div>
            <h1>{mer.user1Id.usuario} quiere vender: </h1>
            <div className='intercambio'>
              <Cromo
                cromoImg={mer.cromo1Id.imagen}
                cromoNombre={mer.cromo1Id.nombre}
              />
           

              <PopUp/>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Mercado;
