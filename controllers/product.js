const Product = require('../models/product');

exports.getAllProducts = (req, res, next) => {
    Product.findAll()
        .then(products => res.json(products))
        .catch(err => res.status(500).json({ message : "Error Detected!", error : err.message }));
}

exports.getProductByID = (req, res, next) => {
    const productId = req.params.productId;

    Product.findByPk(productId)
        .then(product => {
            if (product) {
                res.json(product);
            } else {
                res.json({ message : "No Products Found!" });
            }
        })
        .catch(err => res.status(500).json({ message : "Error Detected!", error : err.message }));
}

exports.postAddProduct = (req, res, next) => {
    const name = req.body.name;
    const price = req.body.price;
    const description = req.body.description;
    const imageUrl = req.body.imageUrl;

    Product.create({
        name : name,
        price : price,
        description : description,
        imageUrl : imageUrl
    })
        .then(product => res.status(201).json(product))
        .catch(err => res.status(500).json({ message : "Error Detected!", error : err.message })); 
            // status code 200 --> indicates just success
            // status code 201 --> indicates success & that we created a resource
}

exports.updateProduct = (req, res, next) => {
    const productId = req.params.productId

    const updatedName = req.body.name;
    const updatedPrice = req.body.price;
    const updatedDescription = req.body.description;
    const updatedImageUrl = req.body.imageUrl;

    Product.findByPk(productId)
        .then(product => {
            product.name = updatedName,
            product.price = updatedPrice,
            product.description = updatedDescription,
            product.imageUrl = updatedImageUrl

            return product.save();
        })
        .then(updatedProduct => res.json(updatedProduct))
        .catch(err => res.status(500).json({ message : "Error Detected!", error : err.message }))
}

exports.deleteProduct = (req, res, next) => {
    const productId = req.params.productId;

    Product.findByPk(productId)
        .then(product => {
            if (product) {
                return product.destroy();
            } else {
                res.json({ message : "No Products Found!" });
            }
        })
        .then(() => res.json({ message : "Product Deleted!" }))
        .catch(err => res.status(500).json({ message : "Error Detected!", error : err.message }))
}