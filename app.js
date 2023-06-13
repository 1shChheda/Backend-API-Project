const express = require('express');

const bodyParser = require('body-parser');

// const feedRoutes = require('./routes/feed');

require('dotenv').config(); // necessary to load the environment variables from the ".env" file into the "process.env" object

const PORT = process.env.PORT || 5000; // if "PORT" env variable will have any value set, it'll use that value ... else it'll use 5000

const app = express();

const orderRoutes = require('./routes/order');

const productRoutes = require('./routes/product');

const sequelize = require('./utils/database');

// app.use(bodyParser.urlencoded()); // for "x-www-form-urlencoded" <form>

app.use(bodyParser.json()); // for "application/json" data // in short, Parse request bodies as JSON

app.use('/products', productRoutes);

app.use('/orders', orderRoutes);

require('./utils/all_Model_Relationship').Model_Relationship();

sequelize.sync()
    .then(() => {

        app.listen(PORT, () => {
            console.log(`Server is running at port ${PORT}...`);
        });

    })
    .catch(err => console.log({ error : err.message }))