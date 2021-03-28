// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${data.description}
  #

  ## Table of Contents:
  
  - [Installation](#Installation)

  - [Usage](#Usage)

  - [Contributing](#Contribution Instructions)

  - [License](#License)

  - [Testing](#Testing)

  - [Github Repo](#Developer's Github)

  - [Contact Info](#Contact Info)


  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contribution Instructions
  ${data.contribution}

  ## License
  ${data.license}

  ## Testing
  ${data.test}

  ## Developer's Github
  ${data.github}

  ## Contact Info
  ${data.email}
`;
}

module.exports = generateMarkdown;
