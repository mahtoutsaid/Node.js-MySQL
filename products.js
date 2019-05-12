
var mysql = require('mysql');


var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Ksdv@2008',
  database : 'bamazon_db'
});
 
connection.connect();
 
connection.query('SELECT * FROM products', function (error, results, fields) {
  if (error) throw error;
  console.log(results[1].id);
});
 
connection.end();


// Load the NPM Package inquirer
var inquirer = require("inquirer");

// Create a "Prompt" with a series of questions.
inquirer
  .prompt([
    // Here we create a basic text prompt.
    {
      type: "input",
      message: "What the ID of the produc?",
      choices: [1, 2, 3, 4, 5],
      product : 'prod'
    },
    // Here we create a basic password-protected text prompt.
    {
      type: "input",
      message: " How many units of the product they would like to buy?",
      name: "quantity"
    }
    // // Here we give the user a list to choose from.
    // {
    //   type: "list",
    //   message: "Which Pokemon do you choose?",
    //   choices: ["Bulbasaur", "Squirtle", "Charmander"],
    //   name: "pokemon"
    // },
    // // Here we ask the user to confirm.
    // {
    //   type: "confirm",
    //   message: "Are you sure:",
    //   name: "confirm",
    //   default: true
    // }
  ])
  .then(function(inquirerResponse) {
    // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
    if (inquirerResponse.confirm) {
      console.log("\nWelcome " + inquirerResponse.prod);
      console.log("Your " + inquirerResponse.quantity + " is ready for battle!\n");
    }
    else {
      console.log("\nThat's okay " + inquirerResponse.username + ", come again when you are more sure.\n");
    }
  });