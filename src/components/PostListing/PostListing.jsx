import React from "react";
import Link from "gatsby-link";

class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(edge => {
      postList.push({
        path: (edge.node.fields.instance) ? `/${edge.node.fields.instance}${edge.node.fields.slug}` : edge.node.fields.slug,
        tags: edge.node.frontmatter.tags,
        cover: edge.node.frontmatter.cover,
        title: edge.node.frontmatter.header,
        date: edge.node.frontmatter.date,
        excerpt: edge.node.excerpt,
        timeToRead: edge.node.timeToRead
      });
    });
    return postList;
  }
  render() {
    const postList = this.getPostList();
    return (
      <div>
        {postList.map(post => (
          <Link to={post.path} key={post.title}>
            <h2>
              {post.title}
            </h2>
          </Link>
        ))}
      </div>
    );
  }
}

export default PostListing;
