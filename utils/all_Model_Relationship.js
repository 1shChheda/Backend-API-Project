const Models = require('../utils/all_Models');

exports.Model_Relationship = () => {
    Models.orderModel.belongsToMany(Models.productModel, { through: Models.orderProductModel });
    Models.productModel.belongsToMany(Models.orderModel, { through: Models.orderProductModel });
}