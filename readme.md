# REST APIs for Simple Online Store

This repository contains a set of REST APIs that implement an online store backend for managing orders and products.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Database Configuration](#database-configuration)
- [Contributing](#contributing)

## Introduction

The REST APIs for Simple Online Store provide a backend solution for managing orders and products. The APIs allow users to perform CRUD operations on orders and products, including creating orders, adding products to orders, retrieving order details, managing products, and more.

## Features

- Retrieve a list of all orders
- Retrieve an order by ID
- Create a new order
- Add a product to an order
- Retrieve a list of all products
- Retrieve a product by ID
- Create a new product
- Update an existing product
- Delete a product

## Technologies Used

- Node.js
- Express.js
- Sequelize (ORM)
- MySQL (Database)
- XAMPP (Local Development Environment)
- Body-parser (Middleware for parsing JSON)
- Nodemon (Development server)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/1shChheda/REST-APIs-Simple-Online-Store.git

2. Install the dependencies:

   ```bash
   cd REST-APIs-Simple-Online-Store
   npm install

3. Set up the database:

    - Install XAMPP or any other MySQL server
    - Create a new database and update the database configuration in the ".env" file

4. Start the server:

    ```bash
    npm start

## Usage
 - The server will start running at http://localhost:5000

## API Endpoints

The following are the available API endpoints:

### Orders
- GET /orders - Retrieve a list of all orders.
- GET /orders/:orderId - Retrieve an order by ID.
- POST /orders - Create a new order.
- POST /orders/:orderId/products/:productId - Add a product to an order.

### Products
- GET /products - Retrieve a list of all products.
- GET /products/:productId - Retrieve a product by ID.
- POST /products - Create a new product.
- PUT /products/:productId - Update an existing product.
- DELETE /products/:productId - Delete a product.

## Database Configuration
- To configure the database, update the database configuration in the .env file with your MySQL database details:

    ```bash
    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=your_password
    DB_NAME=your_database_name

## Contributing
Contributions to the REST APIs for Simple Online Store are welcome. Feel free to open issues and submit pull requests.