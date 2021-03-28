// Written by Tongjac @ Github
// Thanks for using!

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
    choices: ["MIT", "APACHE", "GNU", "OPEN-SOURCE", "UNLICENSE"],
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

function getLicenseImg(input) {
  if (input == "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (input == "APACHE") {
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (input == "GNU") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (input == "OPEN-SOURCE") {
    return "[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)";
  } else if (input == "UNLICENSE") {
    return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
  }
}

// function to initialize program
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      answers.licenseBadge = getLicenseImg(answers.license);
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
