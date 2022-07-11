import React, { useContext, useState, useEffect } from 'react';
import { API } from '../../sevices/Api';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { JwtContext } from '../../context/jwtContext';
import { SWContext } from '../../context/context';

const BotonAnadir = ({ cromoID }) => {
  const navigate = useNavigate();
  const { user , setAlbum} = useContext(JwtContext);
  const { getCromos } = useContext(SWContext)

  const formData = { album: cromoID };
  console.log(formData);

  const botonAnadir = () => {
    API.patch('users/' + user._id, formData).then((res) => {
      console.log(res.data);
      setAlbum(res.data.nuevo.album);
      navigate("/album");

      Swal.fire({
        title: 'Cromo Añadido a tu Album',
        icon: 'success',
        confirmButtonText: 'Cool',
      });
    });
  };

  useEffect(()=> {
    getCromos();
  },[])

  return (
    <button onClick={() => botonAnadir()} className='anadir'>
      AÑADIR
    </button>
  );
};

export default BotonAnadir;
