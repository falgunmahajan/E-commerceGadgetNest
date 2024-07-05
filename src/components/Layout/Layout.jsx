import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-120px)]">
      <Outlet/>

      </main>
      <Footer />
    </>
  );
};

export default Layout;
