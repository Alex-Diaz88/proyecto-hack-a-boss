import React from "react";
import DefaultAvatar from "../../../../assets/images/defaultAvatar.png";
import { URL_BACKEND } from "../../../../services/constants";

const UserProfileHeaderComponent = ({ userInfo }) => {
  return (
    <>
      <img
        src={
          userInfo && userInfo.avatar
            ? `${URL_BACKEND}/static/avatars/${userInfo.avatar}`
            : DefaultAvatar
        }
        alt={"userAvatar"}
      ></img>
    </>
  );
};

export default UserProfileHeaderComponent;
