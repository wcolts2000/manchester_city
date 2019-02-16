import React from "react";
import Footer from "../components/header_footer/Footer";
import Header from "../components/header_footer/Header";

function Layout(props) {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}

export default Layout;
