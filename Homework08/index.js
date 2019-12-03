const inquirer = require("inquirer");
const axios = require("axios")
const generateHTML = require("./generateHTML"); 

const fs = require("fs");
const path = require("path"); 

const open = require("open");
const convertFactory = require("electron-html-to");

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

  inquirer.prompt(questions).then(function(name){
console.log(name.github, name.color)
    axios.get(`https://api.github.com/users/${name.github}`) .then(function(response){
    // generateHTML(response)
    console.log(response)
    generateHTML(response)
}).then(html => {
    const conversion = convertFactory({
      converterPath: convertFactory.converters.PDF
    });

    conversion({ html }, function(err, result) {
      if (err) {
        return console.error(err);
      }

      result.stream.pipe(
        fs.createWriteStream(path.join(__dirname, "resume.pdf"))
      );
      conversion.kill();
    });

    open(path.join(process.cwd(), "resume.pdf"));
  }); 

  })
