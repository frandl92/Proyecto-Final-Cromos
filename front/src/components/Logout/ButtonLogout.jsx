import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { JwtContext} from "../../context/jwtContext"
import "./ButtonLogout.scss"

const ButtonLogout = () => {
const {setJwt} = useContext(JwtContext);
const navigate = useNavigate();


  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setJwt(null);
    navigate("/")

  };

  return <button className="Logout" onClick={logout}><img src='https://cdn-icons.flaticon.com/png/512/4032/premium/4032999.png?token=exp=1657474731~hmac=fc2f3aad7f77fa3e55e3966d5caf6907'  className='loguito'/></button>
}

export default ButtonLogout
