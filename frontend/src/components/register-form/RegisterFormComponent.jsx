import "./styles.css";
import { useState, useContext } from "react";
import { postAxios } from "../../services/CommonServices";
import { useNavigate } from "react-router-dom";
import { AlertContext } from "../../contexts/AlertContext";
import { URL_NEWUSER_ENDPOINT } from "../../services/constants";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const navigate = useNavigate();
  const { setAlert } = useContext(AlertContext);

  const registerUser = async (e) => {
    e.preventDefault();

    if (password !== repeatPassword) {
      throw new Error("Las contraseñas no coinciden.");
    } else {
      try {
        const body = {
          username,
          email,
          password,
        };

        const { message } = await postAxios(URL_NEWUSER_ENDPOINT, body);

        setAlert({ type: "success", msg: message });
        navigate("/active-user", { state: { userData: body } });
      } catch (error) {
        console.error(error.message);
        setAlert({ type: "error", msg: error.message });
      }
    }
  };

  return (
    <div className="register_form">
      <div></div>
      <h2>Registro</h2>
      <form>
        <label htmlFor="register_username">Nombre de usuario:</label>
        <input
          id="register_username"
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />

        <label htmlFor="email">Email:</label>
        <input
          id="register_email"
          type="register_email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />

        <label htmlFor="register_password">Contraseña:</label>
        <input
          id="register_password"
          type="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />

        <label htmlFor="register_repeatPassword">Repite la contraseña:</label>
        <input
          id="register_repeatPassword"
          type="password"
          value={repeatPassword}
          onChange={(event) => {
            setRepeatPassword(event.target.value);
          }}
        />

        <p>
          Estoy de acuerdo con los <span>Términos y Condiciones</span>.
        </p>

        <button onClick={(e) => registerUser(e)}>Registro</button>
      </form>
    </div>
  );
};

export default RegisterForm;
