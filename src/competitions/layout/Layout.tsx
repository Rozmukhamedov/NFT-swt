import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../../container/footer/Footer";


function Layuot() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layuot;
