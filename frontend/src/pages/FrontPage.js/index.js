import LoginForm from "../../components/LoginForm";

const FrontPage = () => {
  return (
    <section>
      <h2>Ingresar</h2>
      <LoginForm />
      <a href="/register">¿No tienes una cuenta? Regístrate.</a>
    </section>
  );
};

export default FrontPage;
