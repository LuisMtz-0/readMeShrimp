// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const { resolve } = require('path');
const { rejects } = require('assert');
// TODO: Create an array of questions for user input
const promptQuestions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "userName",
      message: "Please enter your Github username",
    },
    {
      type: "input", 
      name: 'email',
      message: "Enter contact email",
    },
    {
      type:'input',
      name: "projectName",
      message:'Enter the Project Name'
    },
    {
      type:'input',
      name:'description',
      message: "Provide a short description explaining the what, why, and problems solved",
    },
    {
      type:'input',
      name:'install',
      message: "Terminal Command needed to install",
      default: "npm i",
    },
    {
      type: 'input',
      name: 'tests',
      message: 'What command should be run to run tests?',
      default: 'npm tests'
    },
    {
      type: 'input',
      name: 'repository',
      message: 'Provide the repository Url'
    },
    {
      type: 'input',
      name: 'pages',
      message: 'Provide pages link if any?'
    },
    {
      type: 'list',
      name: 'license',
      message: 'What kind of license should your project have? (Use arrow keys)',
      choices: ['MIT', 'APACHE-2.0', 'GPL-3.0', 'BSD-3-Clause', 'None']
  },])
  .then(data => {
    console.log("data");
    return generateMarkdown(data)
  })
  .then(pageRead => {
    console.log(pageRead);
    console.log('Making readme');
    return createReadMe(pageRead);
  })
}

const createReadMe = data => {
  return new Promise((resolve, reject) => {
    fs.writeFile('README.md', data, err => {
        if(err) {
            reject(err);
            return;
        }

        resolve({
            ok: true,
            message: 'File created!'
        });
    });
});
}

// TODO: Create a function to initialize app
function init() {
  promptQuestions()
}

// Function call to initialize app
init();
