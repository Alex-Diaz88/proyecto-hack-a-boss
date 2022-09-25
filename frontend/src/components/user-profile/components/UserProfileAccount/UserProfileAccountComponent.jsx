import React from "react";
import DefaultAvatar from "../../../../assets/images/defaultAvatar.png";

const UserProfileAccount = ({ loggedUser }) => {
  const avatar = loggedUser.avatar ? loggedUser?.avatar : DefaultAvatar;

  return (
    <section>
      <h1>Mi cuenta</h1>
      <img src={avatar} alt={"userAvatar"} />
      <p>{loggedUser?.username}</p>
    </section>
  );
};

export default UserProfileAccount;
