const inquirer = require('inquirer');

const generateFileTemplate = require('./src/write-readme-template');
const writeFile = require('./utils/create-readme-file');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter the title of your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a short description about your project:',
            validate: projectDescription => {
              if (projectDescription) {
                return true;
              } else {
                console.log('Please provide a description of the project!');
                return false;
              }
            }
        },
        {
            type: 'input',
            name: 'installationInstructions',
            message: 'What are the steps required to install your project?',
            validate: installationInstructions => {
                if (installationInstructions) {
                    return true;
                } else {
                    console.log('Please provide a step-by-step description of how to get the development environment running!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usageInformation',
            message: 'Please provide instructions and examples for use of your project:',
            validate: usageInformation => {
                if (usageInformation) {
                    return true;
                } else {
                    console.log('Please provide a step-by-step description of how to use your appliction!');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please choose one of the following open source licenses:',
            choices: ['Apache License 2.0', 'MIT License', 'GNU General Public License v3.0'],
        },
        {
            type: 'confirm',
            name: 'ccg',
            message: 'Would you like to adapt Contributor Covenant as your contribution guidelines for your project?',
            default: false
        },
        {
            type: 'input',
            name: 'contributionGuidelines',
            message: 'Provide your contribution guidelines for your project:',
            when: ({ ccg }) => {
                if (!ccg) {
                    return true;
                } else {
                    return false;
                }
            },
            validate: contributionGuidelines => {
                if (contributionGuidelines) {
                    return true;
                } else {
                    console.log('Please provide your contribution guidelines for your project!');
                    return false;
                }
            }            
        },
        {
            type: 'input',
            name: 'testsInstructions',
            message: 'Please provide tests instructions for your application:',
            validate: testsInstructions => {
                if (testsInstructions) {
                    return true;
                } else {
                    console.log('Please provide a step-by-step description of how to run the tests for your application!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter your GitHub Username:',
            validate: githubUsername => {
                if (githubUsername) {
                    return true;
                } else {
                    console.log('Please enter your GitHub Username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email:',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Please enter your email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'questions',
            message: 'Please provide instructions on how to reach you with additional questions:',
            validate: questions => {
                if (questions) {
                    return true;
                } else {
                    console.log('Please provide a step-by-step description of how to reach you with additional questions!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'firstLastName',
            message: 'Please enter your first and last name:',
            validate: firstLastName => {
                if (firstLastName) {
                    return true;
                } else {
                    console.log('Please enter your first and last name!');
                    return false;
                }
            }
        }
                               
    ]);
};

promptUser()
    .then(userData => {
        console.log(userData);
        return generateFileTemplate(userData);
    })
    .then(fileTemplate => {
        return writeFile(fileTemplate);
    })
    .catch(err => {
        console.log(err);
    });
