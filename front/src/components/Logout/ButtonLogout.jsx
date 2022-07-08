import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { JwtContext } from "../context/jwtContext";

const ButtonLogout = () => {
  const { setJwt } = useContext(JwtContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setJwt(null);
    navigate("/");
  };
  // return <button onClick={logout}>Logout</button>;

  return <img src='./assets/logout.png' alt="logout" onClick={logout} className="logout"/>;
};

export default ButtonLogout;
