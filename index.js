const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "Describe your project in a short paragraph.",
    name: "description",
  },
  {
    type: "input",
    message: "Enter installation instructions.",
    name: "installation",
  },
  {
    type: "input",
    message: "Enter usage information.",
    name: "usage",
  },
  {
    type: "input",
    message: "Enter contribution guidelines.",
    name: "contribution",
  },
  {
    type: "input",
    message: "Enter test instructions.",
    name: "test",
  },
  {
    type: "list",
    message: "Name your license.",
    choices: ["MIT", "APACHE", "GNU"],
    name: "license",
  },
  {
    type: "input",
    message: "Enter your GitHub username.",
    name: "github",
  },
  {
    type: "input",
    message: "Enter your E-mail Address.",
    name: "email",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    if (err) {
      throw err;
    }
  });
  console.log("Your new README has been generated!");
}

// function to initialize program
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      writeToFile("README-sample.md", generateMarkdown(answers));
    })
    .catch((error) => {
      if (error.isTtyError) {
        console.log("Prompt couldn't be rendered in the current environment");
      } else {
        console.log(error);
        console.log(
          "Sorry, something went wrong. Please run node index.js again."
        );
      }
    });
}

// function call to initialize program
init();
