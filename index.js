// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');
const { type } = require('os');

// TODO: Create an array of questions for user input
const questions = [
    { 
    type: "input",
    name: "description",
    message: "Please describe the purpose and functionality of this project.",
    },
    {  
    type: "checkbox",
    name: "license",
    message: "Please select the license applicable to this project.",  
    choices: ["MIT", "Apache", "GPL", "BSD", "None"],
    },
    {
    type: "input",
    name: "require",
    message: "State the languages or technologies associated with this project.",   
    },
    {
    type: "input",
    name: "creator",
    message: "Write your Github username.",
    },
    {
    type: "input",
    name: "name",
    message: "State your full name.",
    },
    {
    type: "input",
    name: "email",
    message: "Provide your email address.",
    },
    {
    type: "input",
    name: "contributors",
    message: "Please list any contributors. (Use Github username)",
    default: "",
    },
    {
    type: "input",
    name: "test",
    message: "Provide walkthrough of required tests if applicable.",
    },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log("Creating Professional README.md File...");
        writeToFile("./dist/README.md", generateMarkdown({...responses}));
    });
}

// Function call to initialize app
init();
