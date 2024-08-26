// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-yellowgreen.svg)`;
  }
return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `\n* [License](#license)\n`;
  }
return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License
    Licensed under the ${license} license.`;
  }
return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `
# ${data.title}
![GitHub license](https://img.shields.io/badge/license-${data.license}-yellowgreen.svg)

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [License](#license)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.test}

## Questions
If you have any questions about the repository, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.github}](https://github.com/${data.github}/).

## License
Licensed under the ${data.license} license.
`;
}

export default generateMarkdown;