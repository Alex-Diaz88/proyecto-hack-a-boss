import "./styles.css";
import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AlertContext } from "../../contexts/AlertContext";
import { putAxios } from "../../services/CommonServices";
import { URL_ACTIVEUSER_ENDPOINT } from "../../services/constants";

const ActiveUser = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { setAlert } = useContext(AlertContext);
  const username = state?.userData.username || "";

  const activeUser = async (e) => {
    e.preventDefault();
    try {
      const body = {
        username,
      };

      const { message } = await putAxios(URL_ACTIVEUSER_ENDPOINT, body);

      setAlert({ type: "success", msg: message });
      navigate("/");
    } catch (error) {
      console.error(error.message);
      setAlert({ type: "error", msg: error.message });
    }
  };

  return (
    <section className="active_user">
      <p>{`Hola ${state?.userData.username}, gracias por registrate en nuestra web con el email ${state?.userData.email}. Para activar tu usuario haz click en el siguiente botón.`}</p>
      <button onClick={(e) => activeUser(e)}>Activar cuenta</button>
    </section>
  );
};

export default ActiveUser;
