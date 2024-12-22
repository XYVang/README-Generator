// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const generateMarkdown = ({title, description, installinstructions, usageinfo,
   contributionGL, testinfo, license, gitusername, email}) => {
  return `# ${title}

## Description

${description}

## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

Here is how to install.

${installinstructions}

## Usage

${usageinfo}

## License

${license}

## How to Contribute

${contributionGL}

## Tests

${testinfo}

## Questions

Here is my contact info if you have any questions on this file.
${gitusername}
${email}

Thanks for reading and using this file.`
};

export default generateMarkdown;