
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
    let cromosDiarios = Math.floor(Math.random() * (cromos.length - 1) + 0);
    return cromosDiarios;
  }

  useEffect(() => {
    const interval = setInterval(() => {

      setNum(randomNumberInRange(0, cromos.length));
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  let cromosDiarios = Math.floor(Math.random() * (cromos.length - 1) + 0);

  let pinta = cromos[cromosDiarios];


  return (
<>

<h2 className='centrar'>  ¡Date prisa para elegir tu cromo!, solo tienes una oportunidad al día.</h2>
    <div className='aleatorio'>

    
      <figure classname="prueba">
        <Cromo cromoImg={pinta.imagen} cromoNombre={pinta.nombre}></Cromo>
        <BotonAnadir cromoID={pinta._id} />
      </figure>
    
    </div>

    <h2 className='centrar'>Estos son tus cromos repetidos:</h2>
      <Repetidos/>
    </>

  );
};

export default Aleatorio;
