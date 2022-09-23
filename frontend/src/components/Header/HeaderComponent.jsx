import "./styles.css";
import banner from "../../assets/images/banner.png";
import LoginForm from "./components/login-form/LoginFormComponent.jsx";
import { Link } from "react-router-dom";
import UserProfileHeaderComponent from "./components/user-profile/UserProfileHeaderComponent.jsx";
import { useState } from "react";
import { loginUser } from "../../services/Utils";
import { postAxios } from "../../services/CommonServices";
import { URL_LOGIN_ENDPOINT } from "../../services/constants";

const Header = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [tokenUser, setTokenUser] = useState(null);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const body = JSON.stringify({ email, password });

    const { authToken } = await postAxios(URL_LOGIN_ENDPOINT, body);
    setTokenUser(authToken);
  };

  return (
    <header>
      <div className="banner">
        <Link to="/">
          <img src={banner} alt="Banner ha fallado" />
        </Link>
        {!tokenUser ? (
          <LoginForm
            email={email}
            password={password}
            setEmail={handleEmail}
            setPassword={handlePassword}
            handleLogin={handleLogin}
          />
        ) : (
          <UserProfileHeaderComponent tokenUser={tokenUser} />
        )}
      </div>
    </header>
  );
};

export default Header;
