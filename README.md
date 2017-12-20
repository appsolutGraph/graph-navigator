# Starter for Static-CMS projects (Gatsby, Netlify, Semantic-UI)

This project aims to provide a starter skeleton for building blazing fast websites using the [React](https://reactjs.org)-based Static Site Generator [Gatsby](https://www.gatsbyjs.org/) and integration with the CDN network and CMS administration of [Netlify](https://www.netlify.com/). The starter is following the [JAMstack](https://jamstack.org/) paradigm, a modern web development architecture based on client-side JavaScript, reusable APIs, and prebuilt Markup.

The starter is using Semantic-UI for the user interface.

## Components

### Base: Gatsby Starter

The base for this starter is built on the Gatsby starter project 
[gatsby-advanced-starter](https://vagr9k.github.io/gatsby-advanced-starter/). This starter project includes the following:
* [Gatsby v1](https://github.com/gatsbyjs/gatsby/)
* Site generation from Markdown pages (blog)
* Blog management (tags, categories, authors)
* Service integration (Disqus, Google Analytics, social networks)
* RSS feed generation
* SEO management
* Web App Manifest support

### Extension 1: Basic Structure

* 404 page added
* Footer component adjusted to be compatible with the Material-UI version
* Header component created
* Layout components created for Home, Info, Blog and Doc pages
* Layouts included in Gatsby Layout element
* Structure of `content` folder extended to supported content types (home, info, blog, doc)
* images updated (new: favicon, logo-main | deleted: logo-48, logo-1024, favicon)
* Adjust configuration parameters in `/data/SiteConfig.js` and in `README.md`

### Extension 2: From Blog to Website

* Navigation added to header
* Create new Layout components for Home, Blog, Doc and Info
* Content of Index file moved to Block-Index
* Create new Home file as website landing page
* Create new Doc-Index landing page and table of content component
* Create Doc templates (chapter, lesson) to create dynamic documentation pages
* Create Author template for dynamic author landing pages of blog posts
* Structure of Frontmatter defined for Posts, Documentation and Info files
* Create Info template to create dynamic Info pages
* About changed from static page to dynamic Info page
* New folder for content images `/static/img`
* Added title to `siteMetadata`in `gatsby-config`

### Extension 3: Netlify CMS

This starter package has been extended to support the [Netlify-CMS service](https://www.netlifycms.org).
* Adopt markdown frontmatter to support Netlify CMS (path, title > title, header)
* Create new `admin` folder in `/static` directory
* Add new `index.html` file in `admin` folder
* Add new `config.yml` configuration file in `admin` folder

Prepare the project for continuous deployment to the Netlify CDN with the following command:

```sh
npm install gatsby-cli --save
```

The above command inserts `gatsby` into the dependencies of the `package.json` file, which tells Netlify what tools it needs to build the site.

To set the required version of Node.js for building the site a new `.nvmrc` file has been added to the project.  

### Extension 4: Semantic UI

The Semantic UI React package can be installed via npm:

```sh
npm install --save semantic-ui-react
```

Installing Semantic UI React provides the JavaScript for the components. We also need to include a stylesheet to provide the styling for the components:

```sh
npm install --save semantic-ui-css
```

After install, we need to include the minified CSS file in the `index.jsx` layout file:

```js
import 'semantic-ui-css/semantic.min.css';
```

## Getting Started

Install this starter (assuming [Gatsby](https://github.com/gatsbyjs/gatsby/) is installed) by running from your CLI:

```sh
gatsby new YourProjectName https://github.com/Vagr9K/gatsby-advanced-starter
npm install # or yarn install
npm run develop # or gatsby develop
```

Or you can fork the project, make your changes there and merge new features when needed.

Alternatively:

```sh
git clone https://github.com/Vagr9K/gatsby-advanced-starter YourProjectName # Clone the project
cd YourProjectname
rm -rf .git # So you can have your own changes stored in VCS.
npm install # or yarn install
npm run develop # or gatsby develop
```

## Configuration

 Edit the export object in `data/SiteConfig`:

 ```js
module.exports = {
  siteTitle: "appsolut Starter", // Site title.
  siteTitleAlt: "appsolut Starter", // Alternative site title for SEO.
  siteLogo: "/logos/logo-main.png", // Logo used for SEO and manifest.
  siteUrl: "https://graph-navigator.com", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/project/. (example: /project)
  siteDescription: "appsolut starter project for Static-CMS based on Gatsby and Netlify.", // Website description used for RSS feeds/meta description tag.
  blogPostDir: "blog", // The name of directory that contains posts.
  docLessonDir: "doc", // The name of the directory that contains doc pages or lessons.
  infoPageDir: "info", // The name of the directory that contains static info pages.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "1825356251115265", // FB Application ID for using app insights
  googleAnalyticsID: "UA-47311644-5", // GA tracking ID.
  disqusShortname: "https-vagr9k-github-io-gatsby-advanced-starter", // Disqus shortname.
  postDefaultCategoryID: "Graph", // Default category for posts.
  userName: "Andreas Jahn", // Username to display in the author segment.
  userTwitter: "https://twitter.com/appsolutAndreas", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Vienna, Austria", // User location to display in the author segment.
  userAvatar: "https://res.cloudinary.com/appsolut/image/upload/v1513176179/avatars/p8ip8rbwgccvpybuflxo.jpg", // User avatar to display in the author segment.
  userDescription:
    "Developer, Graph Navigator, Founder of appsolut, Suzuki Bandit 1250.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/appsolutGit",
      iconClassName: "fa fa-github"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/appsolut_gmbh",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Email",
      url: "mailto:office@appsolut.at",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "Copyright © 2017. appsolut software gmbh", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0" // Used for setting manifest background color.};
 ```

 You can also optionally set `pathPrefix`:
 ```js
 module.exports = {
  // Note: it must *not* have a trailing slash.
  pathPrefix: "/project", // Prefixes all links. For cases when deployed to example.github.io/project/.
}
 ```

WARNING: Make sure to edit `static/robots.txt` to include the domain for the sitemap!
