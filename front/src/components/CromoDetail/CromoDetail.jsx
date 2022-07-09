import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Cromo from '../Cromo/Cromo';

const CromoDetail = () => {

    const {nombre} = useParams();

        const [detalle, setDetalle] = useState();

        useEffect(() => {
            const getCromoByNombre = async () => {
               

                 const res = await axios.get(`http://localhost:8005/cromos/nombre/${nombre}`);
                  setDetalle(res.data.cromo);
                 
                // console.log("hola");

            };
            getCromoByNombre();
        });
        
  return (
    <div>
       {detalle ? (<> <h1>{detalle.nombre}</h1></>) : null}      
     
    </div>
  )
}

export default CromoDetail