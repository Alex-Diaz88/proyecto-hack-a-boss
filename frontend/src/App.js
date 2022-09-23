import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CustomTokenContextProvider } from "./contexts/TokenContext";
import { CustomAlertContextProvider } from "./contexts/AlertContext";
import Header from "./components/header/HeaderComponent.jsx";
import Alert from "./components/alert/AlertComponent.jsx";
import FrontPage from "./pages/front-page/FrontPage.js";
import RegisterPage from "./pages/register-page/RegisterPage.js";
import NewTravelPage from "./pages/new-travel-page/NewTravelPage.js";
import NotFoundPage from "./pages/not-found-page/NotFoundPage.js";

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
                <Route path="/" element={<FrontPage />} />
                <Route path="/register" element={<RegisterPage />} />
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
