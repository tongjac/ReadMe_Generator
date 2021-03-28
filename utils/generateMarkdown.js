// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${data.description}
  #

  ## Table of Contents:
  
  - [Installation](#Installation)

  - [Usage](#Usage)

  - [Contributing](#Contribution-Instructions)

  - [License](#License)

  - [Testing](#Testing)

  - [Questions](#Questions)


  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contribution Instructions
  ${data.contribution}

  ## License
  ${data.licenseBadge}

  ## Testing
  ${data.test}

  ## Questions
  
  Find me at my Github: https://github.com/${data.github} or feel free to contact me at: ${data.email}. 

`;
}

module.exports = generateMarkdown;
