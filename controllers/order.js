const Models = require('../utils/all_Models');

exports.getAllOrders = (req, res, next) => {
    Models.orderModel.findAll()
        .then(orders => res.status(200).json(orders))
        .catch(err => res.status(500).json({ message : "Error Detected!", error : err.message }));
}

exports.getOrderById = (req, res, next) => {
    const orderId = req.params.orderId;

    Models.orderModel.findByPk(orderId)
        .then(order => {
            if (order) {
                res.status(200).json(order);
            } else {
                res.status(400).json({ message : "No Orders Found!" });
            }
        })
        .catch(err => res.status(500).json({ message : "Error Detected!", error : err.message }));
}

exports.postAddOrder = (req, res, next) => {
    const id = req.body.id;
    const customerId = req.body.customerId;
    const shippingAddress = req.body.shippingAddress;
    const totalPrice = req.body.totalPrice;

    Models.orderModel.create({
        customerId : customerId,
        shippingAddress : shippingAddress,
        totalPrice : totalPrice
    })
        .then(order => res.status(201).json(order))
        .catch(err => res.status(500).json({ message : "Error Detected!", error : err.message })); 
}


// I've set Many-to-Many Relationship between Order & Product (through OrderProduct)
// I now want to add a product to Order,
    // If a product already exists in the order, simply increase its quantity
    // Else make a new addition of the product to the Order
    
exports.addProductToOrder = (req, res, next) => {
    const orderId = req.params.orderId;
    const productId = req.params.productId;
    const quantity = req.body.quantity || 1; // If no Quantity is Mentioned, it'll use 1

    Models.orderModel.findByPk(orderId)
        .then(order => {
            if(order) {
                Models.productModel.findByPk(productId)
                    .then(product => {

                        // if we find the the desired product already in the OrderProduct table...we just update it
                        if(product) {
                            Models.orderProductModel.findOne({ where : {
                                orderId : orderId,
                                productId : productId
                            } })

                            .then(orderedProduct => {
                                if(orderedProduct) {
                                    orderedProduct.quantity += quantity;
                                    orderedProduct.save()
                                        .then(() => res.status(201).json({ message : "Product updated on Order Successfully" }))
                                        .catch(err => res.status(500).json({ message : "Product Failed to Add in Order", error : err.message }));

                                // else, if we dont find the product listed in the OrderProduct Table, we create its ADD on the table
                                } else {
                                    Models.orderProductModel.create({
                                        orderId : orderId,
                                        productId : productId,
                                        quantity : quantity
                                    })
                                        .then(() => res.status(201).json({ message : "Product added to Order Successfully" }))
                                        .catch(err => res.status(500).json({ message : "Product Failed to Add in Order", error : err.message }));
                                }
                            })

                            .catch(err => res.status(500).json({ message : "Error Detected!", error : err.message })); 

                        } else {
                            res.json({ message: 'Order Not Found' });
                        }
                    })

                    .catch(err => res.status(500).json({ message : "Error Detected!", error : err.message })); 
            } else {
                return res.status(400).json({ message : "Order Not Found" })
            }
        }) 
        .catch(err => res.status(500).json({ message : "Error Detected!", error : err.message }));            
}