import "./styles.css";

const LoginForm = ({ email, password, setEmail, setPassword, handleLogin }) => {
  return (
    <form
      className="login_form"
      onSubmit={(e) => {
        handleLogin(e);
      }}
    >
      <h2>Iniciar sesión</h2>

      <label htmlFor="login_email">Email:</label>
      <input
        id="login_email"
        type="email"
        value={email}
        onChange={(event) => {
          setEmail(event);
        }}
      />

      <label htmlFor="login_password">Contraseña:</label>
      <input
        id="login_password"
        type="password"
        value={password}
        onChange={(event) => {
          setPassword(event);
        }}
      />

      <div className="login_buttons">
        <a href="/register">Regístrate</a>
        <button>Ingresar</button>
      </div>
    </form>
  );
};

export default LoginForm;
