import "./styles.css";
import banner from "../../assets/images/banner.png";
import LoginForm from "./components/login-form/LoginFormComponent";
import { Link } from "react-router-dom";
import UserProfileHeaderComponent from "./components/user-profile/UserProfileHeaderComponent";
import { useEffect, useState } from "react";
import { postAxios } from "../../services/CommonServices";
import { URL_LOGIN_ENDPOINT } from "../../services/constants";
import useLocalStorage from "../../hooks/useLocalStorage";

const Header = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [tokenUser, setTokenUser] = useLocalStorage("token");
  const [loggedUser, setLoggedUser] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  console.log(tokenUser);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const body = {
        email: email,
        password: password,
      };
      const res = await postAxios(URL_LOGIN_ENDPOINT, body);

      setTokenUser(res.authToken);

      setEmail("");
      setPassword("");
      setLoggedUser(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header>
      <div className="banner">
        <Link to="/">
          <img src={banner} alt="Banner ha fallado" />
        </Link>
        {!loggedUser ? (
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
