import React from "react";
import Helmet from "react-helmet";
import "semantic-ui-css/semantic.min.css"

import LayoutBlog from "../components/Layout/LayoutBlog";
import LayoutDoc from "../components/Layout/LayoutDoc";
import LayoutInfo from "../components/Layout/LayoutInfo";
import LayoutHome from "../components/Layout/LayoutHome";
import config from "../../data/SiteConfig";
import "./index.css";

export default class MainLayout extends React.Component {
  getRoutingBase() {
    const pathPrefix = config.pathPrefix ? config.pathPrefix : "/"
    const currentPath = this.props.location.pathname.replace(pathPrefix, "")

    let routingBase = ""
    if (currentPath === "" || currentPath === "/") {
      routingBase = "home"
    } else if (currentPath.includes("blog/")) {
      routingBase = "blog"
    } else if (currentPath.includes("tags/")) {
      routingBase = "tags"
    } else if (currentPath.includes("categories/")) {
      routingBase = "categories"
    } else if (currentPath.includes("authors/")) {
      routingBase = "authors"
    } else if (currentPath.includes("info/")) {
      routingBase = "info"
    } else if (currentPath.includes("doc/")) {
      routingBase = "doc"
    }
    return routingBase
  }
  getLocalTitle() {
    function capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    }
    const routingBase = this.getRoutingBase()
    const title = (routingBase) ? capitalize(routingBase) : "..."
    return title;
  }
  render() {
    const { children } = this.props;
    const routingBase = this.getRoutingBase()
    if (routingBase === "blog" || routingBase === "tags" || routingBase === "categories" || routingBase === "authors") {
      return (
        <LayoutBlog config={config} LocalTitle={this.getLocalTitle()}>
          <div>
            <Helmet>
              <title>{`${config.siteTitle} | ${this.getLocalTitle()}`}</title>
              <meta name="description" content={config.siteDescription} />
            </Helmet>
            {children()}
          </div>
        </LayoutBlog>
      );
    }
    if (routingBase === "info") {
      return (
        <LayoutInfo config={config} LocalTitle={this.getLocalTitle()}>
          <div>
            <Helmet>
              <title>{`${config.siteTitle} | ${this.getLocalTitle()}`}</title>
              <meta name="description" content={config.siteDescription} />
            </Helmet>
            {children()}
          </div>
        </LayoutInfo>
      );
    }
    if (routingBase === "doc") {
      return (
        <LayoutDoc config={config} LocalTitle={this.getLocalTitle()}>
          <div>
            <Helmet>
              <title>{`${config.siteTitle} | ${this.getLocalTitle()}`}</title>
              <meta name="description" content={config.siteDescription} />
            </Helmet>
            {children()}
          </div>
        </LayoutDoc>
      );
    }
    return (
      <LayoutHome config={config} LocalTitle={this.getLocalTitle()}>
        <div>
          <Helmet>
            <title>{`${config.siteTitle} | ${this.getLocalTitle()}`}</title>
            <meta name="description" content={config.siteDescription} />
          </Helmet>
          {children()}
        </div>
      </LayoutHome>
    );
  }
}
