const inquirer = require('inquirer');
const fs = require('fs')
// import { Triangle, Rectangle, Circle } from './lib/shapes.js'
const {Triangle, Rectangle, Circle} = require('./lib/shapes');

inquirer
  .prompt([
    {
        type: 'input',
        message: 'Enter up to three characters for your logo.',
        name: 'text'
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
        choices: ['Triangle', 'Circle', 'Rectangle',]
    },
    {
        type: 'input',
        message: 'What color do you want the shape to be?',
        name: 'shapeColor'
    }
  ])
  .then((answers) => {
    console.log("got it")
    logoGenerator(answers.text, answers.textColor, answers.shape, answers.shapeColor);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

  const logoGenerator = function(text, textColor, shape, shapeColor){
    console.log("start function");
    if (shape == "Triangle"){
      var userShape = new Triangle();
      userShape.setColor(shapeColor);
    }
    else if (shape == "Rectangle"){
      var userShape = new Rectangle();
      userShape.setColor(shapeColor);
    }
    else if (shape == "Circle"){
      var userShape = new Circle();
      userShape.setColor(shapeColor);
    }
    console.log(userShape.render());
    console.log(text);

    var logo = `
    <?xml version="1.0" standalone="no"?>
    <svg width="300" height="200" version="1.1" xmlns="LOGO" style="background-color:white">
    ${userShape.render()}
    <text x="108" y="120" font-size="50" fill="${textColor}">${text}</text>
    `
    fs.writeFile('./examples/logo.svg', logo,(err)=> {
      if (err){
        console.error(err);
      }
    });
    console.log("done");
  }