import React, { useState, useEffect, useContext } from "react";
import "./Mercado.scss";
import Cromo from "../../components/Cromo/Cromo";
import PopUp from "../../components/PopUp/PopUp";
import { JwtContext } from "../../context/jwtContext";
import { API } from "../../sevices/Api";
import Swal from "sweetalert2";

const Mercado = () => {
  const [mercado, setMercado] = useState();
  const { user } = useContext(JwtContext);

  const getMercado = async () => {
    const mercadoAPI = await fetch("http://localhost:8005/mercado");
    const mercadoJSON = await mercadoAPI.json();
    setMercado(mercadoJSON.Mercado);
    console.log(mercadoJSON.Mercado);
  };
  useEffect(() => {
    getMercado();
  }, []);

  const onClickk = (cromo1, user1, wanted, merId) => {
    let inso = { album: cromo1 };
    let wantedd = { album: wanted };
    let borro = { deleteCromo: wanted };
    API.patch("users/" + user._id, inso);
    API.patch("users/" + user1, wantedd);
    API.patch("users/eliminar/" + user._id, borro);
    API.delete("mercado/" + merId).then((res) => {
      Swal.fire({
        title: "Intercambio aceptado",
        icon: "success",
        confirmButtonText: "Cool",
      });
      getMercado();
    });
  };

  return (
    <div className="mercado">
      {mercado &&
        mercado.map((mer) => (
          <div key={mer._id} className="cambio">

          <div className="doscartas">
            <div className="cartaparacambiar">
              <h2>{mer.user1Id.usuario} quiere vender a: </h2>
              <Cromo
                cromoImg={mer.cromo1Id.imagen}
                cromoNombre={mer.cromo1Id.nombre}
              />
            </div>
            <div className="cartaquiero">
              <h2>por </h2>

              <Cromo
                cromoImg={mer.wanted.imagen}
                cromoNombre={mer.wanted.nombre}
              />
            </div>

            </div>
            <button
              onClick={() =>
                onClickk(
                  mer.cromo1Id._id,
                  mer.user1Id._id,
                  mer.wanted._id,
                  mer._id
                )
              } className="linkregistro"
            >
              {" "}
              ACEPTAR CAMBIO
            </button>

            {/* {user.album.includes(mer.cromo1Id) ? <button onClick={()=> onClickk(mer.cromo1Id._id, mer.user1Id._id, mer.wanted._id, mer._id)}> ACEPTAR CAMBIO</button> : null } */}
          </div>
        ))}
    </div>
  );
};

export default Mercado;
