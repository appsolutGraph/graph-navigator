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
  backgroundColor: "#e0e0e0" // Used for setting manifest background color.
};
