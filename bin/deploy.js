#!/usr/bin/env node
const ghpages = require("gh-pages");

ghpages.publish(
  "public", // <-- replace yourproject with your repo name
  {
    branch: "gh-pages",
    repo: "https://gitlab.doc.gold.ac.uk/jburg002/2020-final-show.git",
    user: {
      name: "Julian Burgess",
      email: "aubergene@gmail.com",
    },
  },
  () => {
    console.log("Deploy Complete!");
  }
);
