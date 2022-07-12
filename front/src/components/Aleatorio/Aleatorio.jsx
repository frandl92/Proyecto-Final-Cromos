
import React, { useContext, useEffect, useState } from 'react';
import { SWContext } from '../../context/context';
import Repetidos from '../../pages/Repetidos/Repetidos';
import BotonAnadir from '../BotonAnadir/BotonAnadir';
import Cromo from '../Cromo/Cromo';
import './Aleatorio.scss';


const Aleatorio = () => {
  const { cromos } = useContext(SWContext);

  const [num, setNum] = useState(0);

  function randomNumberInRange(min, max) {
    let cromosDiarios = Math.floor(Math.random() * (22 - 1) + 0);
    return cromosDiarios;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setNum(randomNumberInRange(0, 22));
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, []);

  let cromosDiarios = Math.floor(Math.random() * (22 - 1) + 0);

  let pinta = cromos[cromosDiarios];

  let cromosDiarios1 = Math.floor(Math.random() * (22 - 1) + 0);

  let pinta1 = cromos[cromosDiarios1];

  let cromosDiarios2 = Math.floor(Math.random() * (22 - 1) + 0);

  let pinta2 = cromos[cromosDiarios2];

  return (
<>
    <div className='aleatorio'>
      <figure classname='figure'>
        <Cromo cromoImg={pinta.imagen} cromoNombre={pinta.nombre}></Cromo>
        <BotonAnadir cromoID={pinta._id}/>
      </figure>
      <figure classname='figure'>
        <Cromo cromoImg={pinta1.imagen} cromoNombre={pinta1.nombre}></Cromo>
        <button className='añadir'>AÑADIR</button>
      </figure>
      <figure classname='figure'>
        <Cromo cromoImg={pinta2.imagen} cromoNombre={pinta2.nombre}></Cromo>
        <button className='añadir'>AÑADIR</button>
      </figure>
    </div>


      <Repetidos/>
    </>

  );
};

export default Aleatorio;
