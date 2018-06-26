const colors = require("../../src/styles/colors");

module.exports = {
  siteTitle: "Angus's Personal Site", // <title>
  shortSiteTitle: "Angus Yip", // <title> ending for posts and pages
  siteDescription: "It's my personal site.",
  siteUrl: "https://ayip.io",
  pathPrefix: "",
  siteImage: "preview.jpg",
  siteLanguage: "en",
  // author
  authorName: "Angus Yip",
  authorTwitterAccount: "proofofangus",
  // info
  infoTitle: "Angus Yip",
  infoTitleNote: "Personal site",
  // manifest.json
  manifestName: "Angus's Personal Site",
  manifestShortName: "ayipv2", // max 12 characters
  manifestStartUrl: "/",
  manifestBackgroundColor: colors.background,
  manifestThemeColor: colors.background,
  manifestDisplay: "standalone",
  // contact
  contactEmail: "hi@ayip.io",
  messengerLink: "https://m.facebook.com/messages/compose?ids=100003342485372",
  // social
  authorSocialLinks: [
    { name: "github", url: "https://github.com/ayip001" },
    { name: "twitter", url: "https://twitter.com/proofofangus" },
    { name: "facebook", url: "http://facebook.com/ayip001" }
  ]
};
