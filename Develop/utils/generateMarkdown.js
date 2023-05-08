// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None') {
    return "";
  } else {
    return `(https://img.shields.io/badge/${license}-blue.svg)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'None'){
    return '';
  } else {
    return `https://opensource.org/licenses/${license}`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === 'None') {
    return '';
  } else {
    return `[![GitHub license]${renderLicenseBadge(license)}](${renderLicenseLink(license)})`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.projectName}

  ## Description

  ${data.description}

  ## Installation

  Repository: ${data.repository}
  Deploy Link: ${data.pages}

  To Initiate you need to run the command ${data.install} to download all the necessary node packages to run. 

  ## Usage

  To use the command ${data.tests} will be needed to run the program

  ## Credits

  ${data.userName}
  Contact me on: ${data.email}

  ## License

  ${data.license}

`;
}

module.exports = generateMarkdown;
