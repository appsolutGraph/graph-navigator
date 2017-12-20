import React, { Component } from "react";
import Helmet from "react-helmet";
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

class BlogPage extends Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <div className="index-container">
        <Helmet title={config.siteTitle} />
        <SEO pageEdges={postEdges} />
        <PostListing postEdges={postEdges} />
      </div>
    );
  }
}

export default BlogPage;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        fields: {
          instance: { eq: "blog"}
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
            date
            cover
            author
            authorName
            published
            category
            tags
            teaser
          }
        }
      }
    }
  }
`;
