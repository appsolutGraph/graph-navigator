import React from "react";
import Helmet from "react-helmet";
import PostListing from "../components/PostListing/PostListing";
import config from "../../data/SiteConfig";

export default class AuthorTemplate extends React.Component {
  render() {
    const author = this.props.pathContext.author;
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <div className="author-container">
        <Helmet title={`Posts of author "${author}" | ${config.siteTitle}`} />
        <PostListing postEdges={postEdges} />
      </div>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query AuthorPage($author: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { 
          author: { eq: $author }
        }
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
