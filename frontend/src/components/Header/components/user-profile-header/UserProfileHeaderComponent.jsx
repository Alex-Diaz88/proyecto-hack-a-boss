import React from "react";
import "./styles.css";
import DefaultAvatar from "../../../../assets/images/defaultAvatar.png";
import { useNavigate } from "react-router-dom";

const UserProfileHeaderComponent = ({ loggedUser }) => {
  const avatar = loggedUser.avatar ? loggedUser?.avatar : DefaultAvatar;

  const navigate = useNavigate();

  const redirect = () => {
    navigate("/profile");
  };

  const logOut = () => {
    localStorage.removeItem("token");
    navigate("/");
    window.location.reload(false);
  };

  return (
    <section className="header_profile">
      <img src={avatar} alt={"userAvatar"} />
      <div>
        <p>¡Bienvenido/a, {loggedUser?.username}!</p>
        <ul>
          <li onClick={() => logOut()}>Cerrar sesión</li>
          <li onClick={() => redirect()}>Mi cuenta</li>
        </ul>
      </div>
    </section>
  );
};

export default UserProfileHeaderComponent;
