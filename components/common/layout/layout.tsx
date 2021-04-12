import React from "react";
import InfoMessage from "../infoMessage/infoMessage";
import Header from "../header/header";

const Layout: React.FC<{}> = (props): JSX.Element => {
  return (
    <div>
      <Header />
      <main>{props.children}</main>
      <InfoMessage />
    </div>
  );
};

export default Layout;
