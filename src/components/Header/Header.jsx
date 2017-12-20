import React, { Component } from "react";
import Link from "gatsby-link";
import config from "../../../data/SiteConfig";
import "./Header.css";

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>
      {props.children}
    </Link>
  </li>
)

class Header extends Component {
  render() {
    const { LocalTitle } = this.props;
    const siteTitle = config.siteTitle;
    const siteHeader = `${siteTitle}-${LocalTitle}`
    return (
      <header style={{ marginBottom: `1.5rem` }}>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h3 style={{ display: `inline` }}>{siteHeader}</h3>
        </Link>
        <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/info/about/">About</ListLink>
          <ListLink to="/blog/">Blog</ListLink>
          <ListLink to="/doc/">Docs</ListLink>
        </ul>
      </header>
    );
  }
}

export default Header;
