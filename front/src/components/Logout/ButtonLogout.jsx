import React, { useContext } from 'react'
import { JwtContext} from "../../context/jwtContext"

const ButtonLogout = () => {
const {setJwt} = useContext(JwtContext);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setJwt(null);

  };

  return <button onClick={logout}>Logout</button>
}

export default ButtonLogout
