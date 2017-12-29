import React, { Component } from "react";
import HeaderHome from "../Header/HeaderHome";
import FooterHome from "../Footer/FooterHome";
import "./Layout.css";

class LayoutHome extends Component {
  render() {
    const { children, LocalTitle } = this.props;
    const footerLinks = false;
    return (
      <div>
        <HeaderHome LocalTitle={LocalTitle} />
        <div className="main-container">
          {children}
        </div>
        <FooterHome userLinks={footerLinks} />
      </div>
    );
  }
}

export default LayoutHome;
