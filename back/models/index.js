const User = require("./User");
const Order = require("./Order");
const Cadeteria = require("./Cadeteria");
const Product = require("./Product");

User.belongsTo(Cadeteria);

Order.belongsTo(Cadeteria);

Order.belongsTo(User);

/* 
////
Product.belongsTo(Order)
Order.hasMany(Product)
 */

module.exports = {
  User,
  Order,
  Cadeteria,
  Product,
};
