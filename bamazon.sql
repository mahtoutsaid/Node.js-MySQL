DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;
USE bamazon_db;

CREATE TABLE products(
      	id INT NOT NULL AUTO_INCREMENT,
		product_name VARCHAR(255) NOT NULL, 
		department_name VARCHAR(255) NOT NULL,
		price INT NOT NULL, 
		stock_quantity INT NOT NULL,
		PRIMARY KEY(id)
);

INSERT INTO products(product_name, department_name, price, stock_quantity) VALUES
                    ('Flash Driver', 'Electronics', 30, 200 ),
					('Chair', 'Furniture', 130, 30),
					('Shirt', 'Clothes', 20, 25),
					('Chocolate', 'Food', 3, 10),
					('Bancket', 'Furniture', 70, 6 ),
					('DVD Player', 'Electronics', 55, 26),
					('Jacket', 'Clothes', 250, 33),
					('Tie', 'Clothes', 25, 17),
					('Computer', 'Electronics', 1400, 7),
					('Slinky', 'Toys', 5, 0);
