import generateMarkdown from './utils/generateMarkdown.js'

// TODO: Include packages needed for this application
import { writeFile} from 'fs/promises';
import inquirer from "inquirer";
const { prompt } = inquirer;

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter your title:',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter your description:',
    },
    {
        type: 'input',
        name: 'installinstructions',
        message: 'Enter your installation instructions:',
    },
    {
        type: 'input',
        name: 'usageinfo',
        message: 'Enter your usage information:',
    },
    {
        type: 'input',
        name: 'contributionGL',
        message: 'Enter your contribution guidelines:',
    },
    {
        type: 'input',
        name: 'testinfo',
        message: 'Enter your test instructions:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose your license:',
        choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License',
            'Boost Software License 1.0', 'Mozilla Public License 2.0', 'The Unlicense'],
    },
    {
        type: 'input',
        name: 'gitusername',
        message: 'Enter your Github username:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
    },
];

const userInput = () => {
    prompt(questions).then((answers) => {
        console.log(answers);
        const readmeText = generateMarkdown(answers);
        writeFile('README.md', readmeText);
    });
};

userInput();

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
