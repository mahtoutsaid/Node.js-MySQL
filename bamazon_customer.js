
var mysql = require('mysql');
var inquirer = require('inquirer')

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: "Ksdv@2008",
    database: 'bamazon_db'
});

connection.connect(function (error) {
    if (error) throw error

    console.log(" ");

    showProducts();
});

function showProducts() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log("Product Id #: " + res[i].id + "|" +
                "Name of product: " + res[i].product_name + "|" +
                "Name of department : " + res[i].department_name + "|" +
                "Price: " + "$" + res[i].price + "|" +
                "Stock: " + res[i].stock_quantity);
            console.log("-----------------------------------------------------------------------------------------------------");
        }
        itemOrdered();
    });

};

function itemOrdered() {
    inquirer.prompt([{
                name: "itemId",
                type: "input",
                message: "Enter Product ID Number to Buy:"
            },
            {
                name: "quantity",
                type: "input",
                message: "How many units of the product would like to buy?"
            },
        ])
        .then(function (inquirerResponse) {

            connection.query("SELECT * FROM products", function (err, res) {
                if (err) throw err;

                var itemToBuy;
                for (var i = 0; i < res.length; i++) {
                    if (res[i].id === parseInt(inquirerResponse.itemId)) {
                        itemToBuy = res[i];
                    }
                }

                if (itemToBuy.stock_quantity > parseInt(inquirerResponse.quantity)) {

                    connection.query(
                        "UPDATE products SET ? WHERE ?",
                        [{
                                stock_quantity: itemToBuy.stock_quantity - parseInt(inquirerResponse.quantity)
                            },
                            {
                                id: itemToBuy.id
                            }
                        ],
                        function (error, res) {
                            if (error) throw error;

                            console.log(res)
                        }
                    );

                    connection.query("SELECT * FROM products", function (error, results) {
                        if (error) throw error
                        console.log(results)
                        console.log("^^^^^     Your total is : " + "$ " + parseInt(inquirerResponse.quantity) * itemToBuy.price + " / Thank you! Come back again     ^^^^^");
                    });
                } else {
                    console.log("@@@@@    " + "Insufficient quantity!" + "   @@@@@");
                    inquirer.prompt([{
                                type: "confirm",
                                message: "Would you like to change the quantity, or order something else?",
                                name: "confirm",
                                default: true
                            },


                        ])
                        .then(function (inquirerResponse) {
                            if (inquirerResponse.confirm) {

                                itemOrdered();

                            } else {
                                console.log("***  " + " We are sory. We could not complete your order" + "  ***");
                            }
                        });
                }
            });
        });
};