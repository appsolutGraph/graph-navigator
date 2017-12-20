import React, { Component } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Layout.css";

class LayoutBlog extends Component {
  render() {
    const { children, LocalTitle } = this.props;
    const footerLinks = true;
    return (
      <div style={{ margin: '0 auto', maxWidth: 900, padding: '0 1rem' }}>
        <Header LocalTitle={LocalTitle} />
        <div className="main-container">
          {children}
        </div>
        <Footer userLinks={footerLinks} />
      </div>
    );
  }
}

export default LayoutBlog;
