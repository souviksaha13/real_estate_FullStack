import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../Footer/footer";
import Header from "../Header/Header"

const Layout = () => {
  return (
    <>
      <div style={{background:"black", overflow:"hidden"}}>
        <Header />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
