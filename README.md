# Node.js-MySQL

# 1* MYSQL

### Use database:
The folowing image shows :
* mysql> source bamazon.sql (Use database bamazon)
* show tables (table products in amazon database)
* Show columns from products (Discribe the products table)
* Select * from products(All informations in products table)

![image](https://user-images.githubusercontent.com/26509205/57565856-de572180-7379-11e9-9cd2-8a8f3f9717c3.png)

# 2* Node.js
   - npm init -y (install  package.json)
   - npm install request mysql (install request and mysql package)
   - Edit the package.json file - take out the carot(^) 
   - Make an bamazon_customer.js file
   - Terminal run bamazon_customer.js (node bamazon_customer.js)
   
   ![image](https://user-images.githubusercontent.com/26509205/57566280-802d3d00-737f-11e9-9efe-f86cea7bfa30.png)
  
# 3* How the program running

#### I - Connecting to the Database
      

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

    console.log(" "); // Space between the line command and the next result (products table informations)

    showProducts(); // After the connection etablised, all the porducts table informations apprear
                    // this functiion add just to compare you next result the porducts table informations 
});
        

       ### Function ShowProducts
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
                      itemOrdered(); // At the same time the function { itemOrdered()} called
                });

           };
           
 ![image](https://user-images.githubusercontent.com/26509205/57566867-0e0c2680-7386-11e9-9a67-561da9a31421.png)
       
    
  
