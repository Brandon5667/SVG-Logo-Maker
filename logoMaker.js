const inquirer = require('inquirer');
const fs = require('fs')

inquirer
  .prompt([
    {
        type: 'input',
        message: 'Enter up to three characters for your logo.',
        name: 'initials'
    },
    {
        type: 'input',
        message: 'What color do you want the text to be?',
        name: 'textColor'
    },
    {
        type: 'rawlist',
        message: 'Pick a shape!',
        name: 'shape',
        choices: ['Triangle', 'Circle', 'Square',]
    },
    {
        type: 'input',
        message: 'What color do you want the shape to be?',
        name: 'shapeColor'
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

  const logoGenerator = function(text, textColor, shape, shapeColor){
    let logo = `
    <?xml version="1.0" standalone="no"?>
    <svg width="300" height="200" version="1.1" xmlns="LOGO">
    
    `
    fs.writeFile('logo.svg', )
  }