import React from "react";
import { Toaster } from "react-hot-toast";
import Header from "./header";
import Footer from "./footer";
import Navbar from "./navbar";
import ReturnToTop from "./common/return-to-top";
import { useRouter } from "next/router";
import SlugPageFooter from "./newsletter-footer";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();

  //on blog detail page the footer with newletter will be rendered and on the rest of the pages the default footer will be rendered
  const getFooterComponent = () => {
    if (router.pathname.startsWith("/blog/")) {
      return <SlugPageFooter />;
    } else {
      return <Footer />;
    }
  };
  return (
    <>
      <Header>
        <Toaster position="bottom-center" />
        <Navbar />
        {children}
      </Header>
      {getFooterComponent()}
      <ReturnToTop />
    </>
  );
};

export default Layout;
