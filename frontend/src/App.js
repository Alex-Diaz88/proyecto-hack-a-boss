import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CustomTokenContextProvider } from "./contexts/TokenContext";
import { CustomAlertContextProvider } from "./contexts/AlertContext";
import TravelsPage from "./pages/travels-page/TravelsPage";
import RegisterPage from "./pages/register-page/RegisterPage";
import ActiveUser from "./components/active-user/activeUser";
import ProfilePage from "./pages/profile-page/ProfilePage";
import NewTravelPage from "./pages/new-travel-page/NewTravelPage";
import NotFoundPage from "./pages/not-found-page/NotFoundPage";
import Header from "./components/header/HeaderComponent";
import Alert from "./components/alert/AlertComponent";

function App() {
  return (
    <div className="global_container">
      <BrowserRouter>
        <CustomTokenContextProvider>
          <CustomAlertContextProvider>
            <Header />
            <main>
              <Alert />
              <Routes>
                <Route path="/" element={<TravelsPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/active-user" element={<ActiveUser />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/travels/new" element={<NewTravelPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </main>
          </CustomAlertContextProvider>
        </CustomTokenContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
