import TravelList from "../../components/travel-list/TravelListComponent.jsx";
import ErrorMessage from "../../components/error-message/ErrorMessageComponent.jsx";
import useTravels from "../../hooks/useTravels";
//import LoginForm from "../../components/login-form/LoginFormComponent.jsx";

const FrontPage = () => {
  const { travels, errorMessage } = useTravels();

  return (
      <section>
        <h2>Viajes</h2>
        {travels.length > 0 && <TravelList travels={travels} />}
        {errorMessage && <ErrorMessage msg={errorMessage} />}
      </section>
  );
};

export default FrontPage;
