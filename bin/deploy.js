#!/usr/bin/env node
const ghpages = require("gh-pages");

ghpages.publish(
  "__sapper__/export/2020-final-show", // the folder we wish to deploy
  {
    branch: "gh-pages",
    repo: "https://github.com/aubergene/2020-final-show.git",
    user: {
      name: "Julian Burgess",
      email: "aubergene@gmail.com",
    },
  },
  () => {
    console.log("Deploy Complete!");
  }
);
