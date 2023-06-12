const Order = require('../models/order');

exports.getAllOrders = (req, res, next) => {
    Order.findAll()
        .then(orders => res.status(200).json(orders))
        .catch(err => res.status(500).json({ message : "Error Detected!", error : err.message }));
}

exports.getOrderById = (req, res, next) => {
    const orderId = req.params.orderId;

    Order.findByPk(orderId)
        .then(order => {
            if (order) {
                res.status(200).json(order);
            } else {
                res.json({ message : "No Orders Found!" });
            }
        })
        .catch(err => res.status(500).json({ message : "Error Detected!", error : err.message }));
}

exports.postAddOrder = (req, res, next) => {
    const id = req.body.id;
    const customerId = req.body.customerId;
    const shippingAddress = req.body.shippingAddress;
    const totalPrice = req.body.totalPrice;

    Order.create({
        id : id,
        customerId : customerId,
        shippingAddress : shippingAddress,
        totalPrice : totalPrice
    })
        .then(order => res.status(201).json(order))
        .catch(err => res.status(500).json({ message : "Error Detected!", error : err.message })); 
}