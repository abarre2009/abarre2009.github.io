const inquirer = require("inquirer");
const axios = require("axios");
const generateHTML = require("./generateHTML");

const fs = require("fs");
const path = require("path");

const open = require("open");
const convertFactory = require("electron-html-to");
var color = "";
const questions = [
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?"
  },

  {
    type: "list",
    name: "color",
    message: "What is your favorite color?",
    choices: ["red", "blue", "green", "pink"]
  }
];

inquirer
  .prompt(questions)
  .then(function(name) {
    console.log(name.github, name.color);
    color = name.color;
    return name;
  })
  .then(function(name) {
    return axios.get(`https://api.github.com/users/${name.github}`);
  })
  .then(function(response) {
    var data = {
      username: response.data.login,
      url: response.data.url,
      followers: response.data.followers,
      following: response.data.following,
      repos: response.data.public_repos,
      location: response.data.location,
      blog: response.data.blog,
      color: color,
      starred_url: response.data.starred_url
    };
    console.log(data);
    return generateHTML(data);
  })
  .then(html => {
    fs.writeFileSync("./output.html", html, function(res) {
      console.log(res);
      const htmlfile = fs.readFileSync("./output.html", "utf8");
      const options = { format: "Letter" };
      pdf.create(htmlfile, options).toFile("./mypdf.pdf", function(err, res) {
        if (err) return console.log(err);
        console.log("File created", res);
      });
    });
  });
