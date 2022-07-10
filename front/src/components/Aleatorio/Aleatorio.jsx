import React, { useContext } from 'react';
import { SWContext } from '../../context/context';
import Cromo from '../Cromo/Cromo';
import './Aleatorio.scss';

const Aleatorio = () => {
  const { cromos } = useContext(SWContext);

  let cromosDiarios = Math.floor(Math.random() * (10 - 1) + 0);

  let pinta = cromos[cromosDiarios];

  let cromosDiarios1 = Math.floor(Math.random() * (10 - 1) + 0);

  let pinta1 = cromos[cromosDiarios1];

  let cromosDiarios2 = Math.floor(Math.random() * (10 - 1) + 0);

  let pinta2 = cromos[cromosDiarios2];

  return (
    <div className='aleatorio'>
      <figure classname='figure'>
        <Cromo cromoImg={pinta.imagen} cromoNombre={pinta.nombre}></Cromo>
        <button className='añadir'>AÑADIR</button>
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
  );
};

export default Aleatorio;
