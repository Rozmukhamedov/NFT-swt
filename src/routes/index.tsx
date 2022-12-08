import { LoginPage } from "pages";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Layuot from "../competitions/layout/Layout";
import HistoryPage from "../pages/history/HistoryPage";
import HomePage from "../pages/home/HomePage";
import ProfilePage from "../pages/profile/ProfilePage";
import RegistrationPage from "../pages/registration/RegistrationPage";
import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";

function MainRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layuot />}>
          <Route index element={<HomePage />} />
          <Route element={<PrivateRouter />}>
            <Route path="profile" element={<ProfilePage />} />
            <Route path="history" element={<HistoryPage />} />
          </Route>
          <Route element={<PublicRouter />}>
            <Route path="login" element={<LoginPage />} />
            <Route path="registr" element={<RegistrationPage />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default MainRoutes;
