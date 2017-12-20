import React, { Component } from "react";
import Link from "gatsby-link";
import UserLinks from "../UserLinks/UserLinks";
import config from "../../../data/SiteConfig";
import "./Footer.css";

class Footer extends Component {
  render() {
    const url = config.siteRss;
    const { userLinks } = this.props;
    const copyright = config.copyright;
    if (!copyright) {
      return null;
    }
    return (
      <footer className="footer">
        {userLinks ? <UserLinks config={config} labeled /> : null}
        <div className="notice-container">
          <h4>
            {copyright}
          </h4>

          <Link to={url}>
            <button>Subscribe</button>
          </Link>
          <h4>
            Based on{" "}
            <a href="https://github.com/appsolutGit/app-starter-gatsby-semantic">
              appsolut Starter for Static-CMS projects
            </a>.
          </h4>
        </div>
      </footer>
    );
  }
}

export default Footer;
