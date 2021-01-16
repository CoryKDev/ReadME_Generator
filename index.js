
const inquirer = require("inquirer");
const { type } = require("os");
const fs = require("fs");
const markdownReq = require("./assets/markdown");

// questions
const questions = [
    {   message: "What is the tile of your project?",
        name: "title",
        type: "input",
    },
    {
        message: "Add a description of your project.",
        name: "description",
        type: "editor",
      },
      {
        message: "How do you install the application?",
        name: "installation",
        type: "editor",
      },
      {
        message: "How do you use the application?",
        name: "usage",
        type: "input",
      },
      {
        message: "What is your programs License?",
        name: "license",
        type: "list",
        choices: [
          "Apache License 2.0",
          new inquirer.Separator(),
          "GNU General Public License v3.0",
          new inquirer.Separator(),
          "MIT License",
          new inquirer.Separator(),
          "Mozilla Public License 2.0",
          new inquirer.Separator(),
          "The Unlicense",
        ],
      },
      {
        message: "Who is contributing to the project?",
        name: "contributing",
        type: "input",
      },
      {
        message: "An example of the working project.",
        name: "test",
        type: "input",
      },
      {
        message: "What is your E-mail address?",
        name: "questions",
        type: "input",
      },
    ];
    
    



// functions to create readme file
const writeFile = (fileName, data) => {
    const content = markdown(data);

    fs.writeToFile(fileName, content,  (err) =>  {
        if (err) console.log(err);
    });
}

const initialize = () => { 
    inquirer.prompt(questions).then((response) => {
        writeFile("README_GEN.md", response);
        console.log(response);
      });
    }

    initialize();
