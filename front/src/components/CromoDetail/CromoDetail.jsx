import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Cromo from '../Cromo/Cromo';
import "./CromoDetail.scss"
const CromoDetail = () => {
  const { nombre } = useParams();

  const [detalle, setDetalle] = useState();

  useEffect(() => {
    const getCromoByNombre = async () => {
      const res = await axios.get(
        `http://localhost:8005/cromos/nombre/${nombre}`
      );
      setDetalle(res.data.cromo);

      // console.log("hola");
    };
    getCromoByNombre();
  });
 

  return (
    <div>
      {detalle ? (
         <div className='padre'>

          {' '}
          <div className='div1'>
          <h1>{detalle.nombre}</h1>
          
          <p>{detalle.nacionalidad}</p>
          <p className='rol'>{detalle.rol}</p>
          <p>{detalle.lenguaje}</p>
         
          <p>Rango: {detalle.status}</p>
          <button className='backToAlbum'><Link to ="/album">VOLVER AL ALBUM</Link></button>
          </div>

        <div className='div2'>
          <img src={detalle.imagenback} alt="imagenBack"></img>
          <p className='frase'>{detalle.frase}</p>
          </div>

          




          </div>
      ) : null}
      
    </div>
  );
};

export default CromoDetail;
