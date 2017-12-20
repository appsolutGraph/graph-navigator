import React from "react";
import Helmet from "react-helmet";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import "./b16-tomorrow-dark.css";

export default class InfoTemplate extends React.Component {
  render() {
    const { slug } = this.props.pathContext;
    const infoNode = this.props.data.markdownRemark;
    const info = infoNode.frontmatter;
    if (!info.id) {
      info.id = slug;
    }
    return (
      <div>
        <Helmet>
          <title>{`${info.header} | ${config.siteTitle}`}</title>
        </Helmet>
        <SEO pagePath={slug} pageNode={infoNode} pageSEO />
        <div>
          <h1>
            {info.header}
          </h1>
          <div dangerouslySetInnerHTML={{ __html: infoNode.html }} />
        </div>
      </div>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query InfoPageBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        header
        type
        date
        author
        authorName
        published
      }
      fields {
        slug
        instance
      }
    }
  }
`;
