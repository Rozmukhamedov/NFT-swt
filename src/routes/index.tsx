import React from "react";
import PublicRouter from "./PublicRouter";
import PrivateRouter from "./PrivateRouter";
import Layuot from "components/layout/Layout";
import { Routes, Route } from "react-router-dom";
import {
  Category,
  HistoryPage,
  HomePage,
  LoginPage,
  Products,
  ProfilePage,
  RegistrationPage,
} from "pages";

function MainRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layuot />}>
          <Route index element={<HomePage />} />
          <Route path="category" element={<Category />} />
          <Route path="products" element={<Products />} />
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
