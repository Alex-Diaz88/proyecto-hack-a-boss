import React, { useState } from "react";
import { useTokenContext } from "../../contexts/TokenContext.js";
import UserProfileAccount from "./components/UserProfileAccount/UserProfileAccountComponent.jsx";
import UserProfileTravels from "./components/UserProfileTravels/UserProfileTravelsComponent.jsx";

const UserProfile = () => {
  const [myAccount, setMyAccount] = useState(true);
  const { loggedUser } = useTokenContext();

  const handlerChangeMenuAccount = () => {
    setMyAccount(true);
  };
  const handlerChangeMenuTravels = () => {
    setMyAccount(false);
  };

  return (
    <>
      <section>
        <nav>
          <ul>
            <li onClick={() => handlerChangeMenuAccount()}>Mi Cuenta</li>
            <li onClick={() => handlerChangeMenuTravels()}>Mis Viajes</li>
          </ul>
        </nav>
      </section>
      {myAccount ? (
        <UserProfileAccount loggedUser={loggedUser} />
      ) : (
        <UserProfileTravels />
      )}
    </>
  );
};

export default UserProfile;
