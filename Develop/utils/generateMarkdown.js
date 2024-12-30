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

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [How To Contribute](#how-to-contribute)
- [Tests](#tests)
- [Questions](#questions)

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

Here is a video on how to use this code: [https://youtu.be/TRec3PlnQ7k](https://youtu.be/TRec3PlnQ7k)

## Questions

Here is my contact info if you have any questions on this file.

Link to my Github: [https://github.com/${gitusername}](https://github.com/${gitusername})

Email me here: ${email}`;
};

export default generateMarkdown;