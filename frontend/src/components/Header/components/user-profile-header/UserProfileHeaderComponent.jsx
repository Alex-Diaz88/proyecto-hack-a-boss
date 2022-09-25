import React from "react";
import "./styles.css";
import DefaultAvatar from "../../../../assets/images/defaultAvatar.png";

const UserProfileHeaderComponent = ({ loggedUser }) => {
  const avatar = loggedUser.avatar ? loggedUser?.avatar : DefaultAvatar;
  return (
    <section className="header_profile">
      <img src={avatar} alt={"userAvatar"} />
      <p>¡Bienvenido/a, {loggedUser?.username}!</p>
    </section>
  );
};

export default UserProfileHeaderComponent;
