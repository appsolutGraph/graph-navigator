const path = require("path");
const _ = require("lodash");
const webpackLodashPlugin = require("lodash-webpack-plugin");

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators;
  let slug;
  let instance;
  if (node.internal.type === "MarkdownRemark") {
    const fileNode = getNode(node.parent);
    const parsedFilePath = path.parse(fileNode.relativePath);

    instance = fileNode.sourceInstanceName;
    if (Object.prototype.hasOwnProperty.call(node, "frontmatter") && Object.prototype.hasOwnProperty.call(node.frontmatter, "title")) {
      slug = `/${_.kebabCase(node.frontmatter.title)}`;
    } else if (Object.prototype.hasOwnProperty.call(node, "frontmatter") && Object.prototype.hasOwnProperty.call(node.frontmatter, "header")) {
      slug = `/${_.kebabCase(node.frontmatter.header)}`;
    } else if (parsedFilePath.name !== "index" && parsedFilePath.dir !== "") {
      slug = `/${parsedFilePath.dir}/${parsedFilePath.name}/`;
    } else if (parsedFilePath.dir === "") {
      slug = `/${parsedFilePath.name}/`;
    } else {
      slug = `/${parsedFilePath.dir}/`;
    }

    // Create custom fields
    createNodeField({ node, name: "slug", value: slug });
    createNodeField({ node, name: "instance", value: instance });
  }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    // INFO templates
    const infoTemplate = path.resolve("src/templates/info.jsx");
    // DOC templates
    const chapterTemplate = path.resolve("src/templates/chapter.jsx");
    const lessonTemplate = path.resolve("src/templates/lesson.jsx");
    // BLOG templates
    const postTemplate = path.resolve("src/templates/post.jsx");
    const tagTemplate = path.resolve("src/templates/tag.jsx");
    const categoryTemplate = path.resolve("src/templates/category.jsx");
    const authorTemplate = path.resolve("src/templates/author.jsx");

    resolve(
      graphql(`{
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                tags
                category
                author
                authorName
                type
                chapter
              }
              fields {
                slug
                instance
              }
            }
          }
        }
      }`)
      .then(result => {
        if (result.errors) {
          /* eslint no-console: "off" */
          console.log(result.errors);
          reject(result.errors);
        }

        const tagSet = new Set();
        const categorySet = new Set();
        const authorSet = new Set();
        result.data.allMarkdownRemark.edges.forEach(edge => {
          if (edge.node.fields.instance === 'info') {
            createPage({
              path: `/${edge.node.fields.instance}${edge.node.fields.slug}`,
              component: infoTemplate,
              context: {
                slug: edge.node.fields.slug
              }
            });
          }
          if (edge.node.fields.instance === 'doc') {
            if (edge.node.frontmatter.type === 'chapter') {
              createPage({
                path: `/${edge.node.fields.instance}${edge.node.fields.slug}`,
                component: chapterTemplate,
                context: {
                  slug: edge.node.fields.slug
                }
              });
            }
            if (edge.node.frontmatter.type === 'lesson') {
              createPage({
                path: `/${edge.node.fields.instance}${edge.node.fields.slug}`,
                component: lessonTemplate,
                context: {
                  slug: edge.node.fields.slug
                }
              });
            }
          }
          if (edge.node.fields.instance === 'blog') {
            if (edge.node.frontmatter.tags) {
              edge.node.frontmatter.tags.forEach(tag => {
                tagSet.add(tag);
              });
            }
  
            if (edge.node.frontmatter.category) {
              categorySet.add(edge.node.frontmatter.category);
            }
  
            if (edge.node.frontmatter.author) {
              authorSet.add(edge.node.frontmatter.author);
            }
            createPage({
              path: `/${edge.node.fields.instance}${edge.node.fields.slug}`,
              component: postTemplate,
              context: {
                slug: edge.node.fields.slug
              }
            });
          }
        });

        const tagList = Array.from(tagSet);
        tagList.forEach(tag => {
          createPage({
            path: `/tags/${_.kebabCase(tag)}/`,
            component: tagTemplate,
            context: {
              tag
            }
          });
        });

        const categoryList = Array.from(categorySet);
        categoryList.forEach(category => {
          createPage({
            path: `/categories/${_.kebabCase(category)}/`,
            component: categoryTemplate,
            context: {
              category
            }
          });
        });

        const authorList = Array.from(authorSet);
        authorList.forEach(author => {
          createPage({
            path: `/authors/${_.kebabCase(author)}/`,
            component: authorTemplate,
            context: {
              author
            }
          });
        });
      })
    );
  });
};

exports.modifyWebpackConfig = ({ config, stage }) => {
  if (stage === "build-javascript") {
    config.plugin("Lodash", webpackLodashPlugin, null);
  }
};
