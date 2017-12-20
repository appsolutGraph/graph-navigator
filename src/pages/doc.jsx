import React, { Component } from "react";
import Helmet from "react-helmet";
import TableOfContents from "../components/DocListing/TableOfContents";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

class DocPage extends Component {
  render() {
    const docEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <div className="index-container">
        <Helmet title={config.siteTitle} />
        <SEO pageEdges={docEdges} />
        <TableOfContents docEdges={docEdges} />
      </div>
    );
  }
}

export default DocPage;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query DocQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        fields: {
          instance: { eq: "doc"}
        }
      }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
            instance
          }
          excerpt
          timeToRead
          frontmatter {
            title
            header
            type
            chapter
            date
            number
            author
            authorName
            published
          }
        }
      }
    }
  }
`;
