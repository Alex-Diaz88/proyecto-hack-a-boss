import React, { useState } from "react";
import UserProfileAccount from "./components/UserProfileAccount/UserProfileAccount.jsx";

import UserProfileTravels from "./components/UserProfileTravels/UserProfileTravels.jsx";

const UserProfile = () => {
  const [myAccount, setMyAccount] = useState(true);
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
      {myAccount ? <UserProfileAccount /> : <UserProfileTravels />}
    </>
  );
};

export default UserProfile;
