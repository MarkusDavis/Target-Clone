// components/Layout/index.js
import React from "react";
import { Header } from "./Header";
import { Banner } from "./Banner";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Banner />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
