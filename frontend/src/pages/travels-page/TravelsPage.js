import SearchTravelsForm from "../../components/search-travels-form/SearchTravelsFormComponent.jsx";
import TravelList from "../../components/travel-list/TravelListComponent.jsx";
import ErrorMessage from "../../components/error-message/ErrorMessageComponent.jsx";
import useTravels from "../../hooks/useTravels";

//import LoginForm from "../../components/login-form/LoginFormComponent.jsx";

const TravelsPage = () => {
  const { travels, errorMessage } = useTravels();

  return (
    <>
      <SearchTravelsForm />
      <section>
        <h2>Viajes</h2>
        {travels.length > 0 && <TravelList travels={travels} />}
        {errorMessage && <ErrorMessage msg={errorMessage} />}
      </section>
    </>
  );
};

export default TravelsPage;
