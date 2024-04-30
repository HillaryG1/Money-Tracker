// Import mongoose library
const mongoose = require('mongoose');
// Destructure Schema from mongoose for easier usage
const Schema = mongoose.Schema;

//categories => field => ['type', 'color']
const categories_model = new Schema({
  type:{type:String, default: "Investment"},
  color:{type:String, default:'#FCBE44'}
})

//transactions => field => ['name', 'type', 'amount', 'date']
const transaction_model = new Schema({
  name:{type:String, default:"Anonymous"},
  type:{type:String, default:"Investment"},
  amount:{type:Number},
  date: {type:Date, default:Date.now}
});
// Create models based on the defined schemas
const Categories = mongoose.model('categories', categories_model);
const Transaction = mongoose.model('transaction', transaction_model);
// Export the models for use in other modules
exports.default = Transaction;

module.exports = {
  Categories,
  Transaction
}