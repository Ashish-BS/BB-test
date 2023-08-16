import React from "react";

type HeaderProps = {
  children: React.ReactNode;
};

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <>
      <div className="b-wrapper">
          {children}
      </div>
    </>
  );
};

export default Header;
