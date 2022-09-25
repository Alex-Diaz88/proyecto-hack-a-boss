import { createContext, useContext, useEffect, useState } from "react";
import { getAxios } from "../services/CommonServices";
import { URL_BACKEND, URL_GETUSER_ENDPOINT } from "../services/constants";
import useLocalStorage from "../hooks/useLocalStorage";
import jwt_decode from "jwt-decode";

export const TokenContext = createContext();

export const CustomTokenContextProvider = ({ children }) => {
  const [token, setToken] = useLocalStorage("token");
  const [loggedUser, setLoggedUser] = useState({});

  useEffect(() => {
    if (!token) {
      setLoggedUser({});
      return;
    }

    const fetchUser = async () => {
      try {
        const decodedToken = jwt_decode(token);

        const { data } = await getAxios(
          `${URL_GETUSER_ENDPOINT}${decodedToken.id}`
        );

        setLoggedUser({
          ...data,
          avatar: data.avatar ? `${URL_BACKEND}/avatars/${data.avatar}` : null,
        });
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchUser();
  }, [token]);

  return (
    <TokenContext.Provider
      value={{ token, setToken, loggedUser, setLoggedUser }}
    >
      {children}
    </TokenContext.Provider>
  );
};

export const useTokenContext = () => {
  const { token, setToken, loggedUser, setLoggedUser } =
    useContext(TokenContext);

  return { token, setToken, loggedUser, setLoggedUser };
};
