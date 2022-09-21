import "./App.css";
import NewTravelPage from "./pages/NewProductPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import Header from "./components/Header";
import { CustomTokenContextProvider } from "./contexts/TokenContext";
import usestate from "usestate";
import FrontPage from "./pages/FrontPage/index.js";

import NotFoundPage from "./pages/NotFoundPage";

function App() {

  return (
    <div className="global_container">
      <BrowserRouter>
        <CustomTokenContextProvider>
          <Header />

          <main>
            <Routes>
              <Route path="/" element={<FrontPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/travels/new" element={<NewTravelPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
        </CustomTokenContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
