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

function getLicenseDesc(input) {
  if (input == "MIT") {
    return `Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`;
  } else if (input == "APACHE") {
    return `  Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
 
      http://www.apache.org/licenses/LICENSE-2.0
 
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.`;
  } else if (input == "GNU") {
    return `Please visit the GNU Public License site for more information.
    
    https://www.gnu.org/licenses/gpl-3.0.en.html
    
    `;
  } else if (input == "OPEN-SOURCE") {
    return `Please visit the Open Source License website for more information.
    
    https://opensource.org/licenses/OSL-3.0`;
  } else if (input == "UNLICENSE") {
    return `The Unlicense is a template for disclaiming copyright monopoly interest in software you've written; in other words, it is a template for dedicating your software to the public domain. It combines a copyright waiver patterned after the very successful public domain SQLite project with the no-warranty statement from the widely-used MIT/X11 license.
    
    https://unlicense.org/`;
  }
}

// function to initialize program
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      answers.licenseBadge = getLicenseImg(answers.license);
      answers.licenseDesc = getLicenseDesc(answers.license);
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
