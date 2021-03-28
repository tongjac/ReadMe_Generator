// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${data.description}
  #

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contribution Instructions
  ${data.contribution}

  ## Testing
  ${data.test}

  ## Developer's Github
  ${data.github}

  ## Contact Info
  ${data.email}

`;
}

module.exports = generateMarkdown;
