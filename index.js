// TODO: Include packages needed for this application
import fs from 'fs';
import inquirer from 'inquirer';
import path from 'path';
import generateMarkdown from './utils/generateMarkdown.js';

// Array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Please name your project.",
    },
    {
        type: "input",
        name: "description",
        message: "Please describe the purpose and functionality of this project.",
    },
    {
        type: "input",
        name: "installation",
        message: "Provide installation instructions.",
    },
    {
        type: "input",
        name: "usage",
        message: "Provide usage information.",
    },
    {
        type: "input",
        name: "contributing",
        message: "Provide contribution guidelines.",
    },
    {
        type: "input",
        name: "test",
        message: "Provide walkthrough of required tests if applicable.",
    },
    {
        type: "list",
        name: "license",
        message: "Please select the license applicable to this project.",
        choices: ["MIT", "Apache", "GPL", "BSD", "None"],
    },
    {
        type: "input",
        name: "github",
        message: "Enter your GitHub username.",
    },
    {
        type: "input",
        name: "email",
        message: "Provide your email address.",
    },
];

// Function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log("Creating Professional README.md File...");
        
        // Ensure the dist directory exists
        const distDir = path.join(process.cwd(), 'dist');
        if (!fs.existsSync(distDir)) {
            fs.mkdirSync(distDir);
        }

        // Debugging: Log the answers to verify the license value
        console.log(answers);

        // Generate the markdown content
        const markdownContent = generateMarkdown({...answers});

        // Write the new README.md to the dist folder
        writeToFile("./dist/README.md", markdownContent);
    });
}

// Function call to initialize app
init();
