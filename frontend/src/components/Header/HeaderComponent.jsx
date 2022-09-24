import "./styles.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { postAxios } from "../../services/CommonServices";
import { URL_LOGIN_ENDPOINT } from "../../services/constants";
import { useTokenContext } from "../../contexts/TokenContext";
import banner from "../../assets/images/banner.png";
import LoginForm from "./components/login-form/LoginFormComponent";
import UserProfileHeaderComponent from "./components/user-profile-header/UserProfileHeaderComponent";

const Header = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userInfo, setUserInfo] = useState(null);
  const { token, setToken } = useTokenContext();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const body = {
        email: email,
        password: password,
      };
      const { data } = await postAxios(URL_LOGIN_ENDPOINT, body);

      setToken(data.authToken);

      setUserInfo(data);

      setEmail("");
      setPassword("");
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
        {!token ? (
          <LoginForm
            email={email}
            password={password}
            setEmail={handleEmail}
            setPassword={handlePassword}
            handleLogin={handleLogin}
          />
        ) : (
          <UserProfileHeaderComponent userInfo={userInfo} />
        )}
      </div>
    </header>
  );
};

export default Header;
