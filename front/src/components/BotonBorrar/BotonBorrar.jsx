import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import {API} from "../../sevices/Api"
import Swal from "sweetalert2";
import { JwtContext } from '../../context/jwtContext';
import "./BotonBorrar.scss"

const BotonBorrar = ({cromoID}) => {

    const navigate = useNavigate();
    const {setJwt, setUser, setAdmin} = useContext(JwtContext);
    

    const deleteCromo = (id) => {
        console.log(id);
        API.delete("cromos/" + id).then((Response) => {
            console.log(Response)
            
            navigate("/album");

            Swal.fire({
                title: "Cromo Borrado",
                icon: "success",
                confirmButtonText: "Cool",
              });
        })
    }

    

  return (
    <div>
        <button onClick={()=> deleteCromo(cromoID)} className="eliminar">ELIMINAR</button>
    </div>
  )
}

export default BotonBorrar