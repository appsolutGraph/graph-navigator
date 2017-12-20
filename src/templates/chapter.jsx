import React from "react";
import Helmet from "react-helmet";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import "./b16-tomorrow-dark.css";

export default class ChapterTemplate extends React.Component {
  render() {
    const { slug } = this.props.pathContext;
    const chapterNode = this.props.data.markdownRemark;
    const chapter = chapterNode.frontmatter;
    if (!chapter.id) {
      chapter.id = slug;
    }
    return (
      <div>
        <Helmet>
          <title>{`${chapter.header} | ${config.siteTitle}`}</title>
        </Helmet>
        <SEO pagePath={slug} pageNode={chapterNode} pageSEO />
        <div>
          <h1>
            {chapter.header}
          </h1>
          <div dangerouslySetInnerHTML={{ __html: chapterNode.html }} />
        </div>
      </div>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query ChapterBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        header
        type
        date
        number
        chapter
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
