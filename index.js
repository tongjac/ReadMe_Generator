var inquirer = require("inquirer");
var fs = require("fs");

  .prompt([
    /* Pass your questions in here */
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

// array of questions for user
const questions = [];

// function to write README file
function writeToFile(fileName, data) {
  fs.appendFile(fileName, data, function (err) {
    if (err) {
      throw err;
    }
    console.log("Your new README has been generated!");
  });
}

// function to initialize program
function init() {}

// function call to initialize program
init();
