import React from "react";
import Helmet from "react-helmet";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import "./b16-tomorrow-dark.css";

export default class LessonTemplate extends React.Component {
  render() {
    const { slug } = this.props.pathContext;
    const lessonNode = this.props.data.markdownRemark;
    const lesson = lessonNode.frontmatter;
    if (!lesson.id) {
      lesson.id = slug;
    }
    return (
      <div>
        <Helmet>
          <title>{`${lesson.header} | ${config.siteTitle}`}</title>
        </Helmet>
        <SEO pagePath={slug} pageNode={lessonNode} pageSEO />
        <div>
          <h1>
            {lesson.header}
          </h1>
          <div dangerouslySetInnerHTML={{ __html: lessonNode.html }} />
        </div>
      </div>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query LessonBySlug($slug: String!) {
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
