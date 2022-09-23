import React, { useEffect, useState } from "react";
import DefaultAvatar from "../../../../assets/images/defaultAvatar.png";
import jwt_decode from "jwt-decode";
import { getAxios } from "../../../../services/CommonServices";
import { URL_BACKEND } from "../../../../services/constants";

const UserProfileHeaderComponent = ({ tokenUser }) => {
  const decodedToken = jwt_decode(tokenUser);
  const [userInfo, setUserInfo] = useState(null);
  const getUserData = async () => {
    const response = await getAxios(`http://localhost:4000/users/${decodedToken.id}`, tokenUser);

    setUserInfo(response.data);
  };
  useEffect(() => {
    if (tokenUser && !userInfo) {
      getUserData();
    }
    console.log(userInfo);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tokenUser, userInfo]);
  return (
    <>
      <img
        src={userInfo && userInfo.avatar ? `${URL_BACKEND}/static/avatars/${userInfo.avatar}` : DefaultAvatar}
        alt={"userAvatar"}
      ></img>
    </>
  );
};

export default UserProfileHeaderComponent;
