import React from "react";
import "./styles.css";
import DefaultAvatar from "../../../../assets/images/defaultAvatar.png";
import { URL_BACKEND } from "../../../../services/constants";

const UserProfileHeaderComponent = ({ userInfo }) => {
  return (
    <section className="header_profile">
      <img
        src={
          userInfo && userInfo.avatar
            ? `${URL_BACKEND}/static/avatars/${userInfo.avatar}`
            : DefaultAvatar
        }
        alt={"userAvatar"}
      ></img>
      <p>¡Bienvenido, {userInfo.username}!</p>
    </section>
  );
};

export default UserProfileHeaderComponent;
