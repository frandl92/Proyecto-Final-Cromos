import React, { useContext } from 'react'
import { JwtContext} from "../../context/jwtContext"

const ButtonLogout = () => {
const {setJwt} = useContext(JwtContext);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setJwt(null);

  };

  return <img src='./assets/logout.png' alt="logout" onClick={logout} className="logout"/>;
}

export default ButtonLogout
