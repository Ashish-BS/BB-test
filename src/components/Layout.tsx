import React from "react";
import { Toaster } from "react-hot-toast";
import Header from "./header";
import Footer from "./footer";
import Navbar from "./navbar";
import ReturnToTop from "./common/return-to-top";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header>
        <Toaster position="bottom-center" />
        <Navbar />
        {children}
      </Header>
      <Footer />
      <ReturnToTop />
    </>
  );
};

export default Layout;
