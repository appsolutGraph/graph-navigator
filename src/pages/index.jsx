import React, { Component } from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";

class Index extends Component {
  render() {
    return (
      <div className="about-container">
        <Helmet title={`Home | ${config.siteTitle}`} />
        <div className="about">
          <h1>
            Landing Page
          </h1>
          <p>
            This is the Website landing page
          </p>
        </div>
      </div>
    );
  }
}

export default Index;
