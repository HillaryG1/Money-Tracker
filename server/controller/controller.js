// Import your Categories model
const { Categories, Transaction } = require('../models/model');
// post: http://localhost:8080/api/categories
async function create_Categories(req, res) {
  try {
    const Create = new Categories({
      type: "Invesment",
      color: "#FCBE44" // dark 
    });

    // Save the created category
    await Create.save();

    return res.json(Create);
  } catch (err) {
    return res.status(400).json({ message: `Error while creating categories ${err}` });
  }
};

// get: http://localhost:8080/api/categories
async function get_Categories(req, res) {
  try {
    let data = await Categories.find({});
    return res.json(data);
  } catch (err) {
    return res.status(400).json({ message: `Error while fetching categories ${err}` });
  };
};


// post: http://localhost:8080/api/transaction
async function create_Transaction(req, res) {
  try {
    if (!req.body) return res.status(400).json("Post HTTP not Provided");
    let { name, type, amount } = req.body;

    const create = await new Transaction({
      name,
      type,
      amount,
      date: new Date()
    });

    await create.save();

    return res.json(create);
  } catch (err) {
    return res.status(400).json({ message: `Error while creating transaction ${err}` });
  };
};

// get: http://localhost:8080/api/transaction
async function get_Transaction(req, res) {
  try {
    let data = await Transaction.find({});
    return res.json(data);
  } catch (err) {
    return res.status(400).json({ message: `Error while fetching transactions ${err}` });
  };
};


// delete: http://localhost:8080/api/transaction
async function delete_Transaction(req, res) {
  try {
    const { id } = req.body; // Assuming the ID is passed in the request body
    const delete_Transaction = await Transaction.findByIdAndDelete(id);
    if (!delete_Transaction) {
      return res.status(404).json({ message: 'Transaction not found' });
    }
    return res.json({ message: 'Transaction deleted successfully', delete_Transaction });
  } catch (err) {
    return res.status(400).json({ message: `Error while deleting transaction ${err}` });
  }
}

// get: http://localhost:8080/api/labels
async function get_Labels(req, res) {
  try {
    const result = await Transaction.aggregate([
      {
        $lookup: {
          from: "categories",
          localField: 'type',
          foreignField: "type",
          as: "categories_info"
        }
      },
      {
        $unwind: "$categories_info"
      }
    ]);
    return res.json(result);
  } catch (error) {
    return res.status(400).json("Lookup Collection Error");
  }
}







module.exports = {
  create_Categories,
  get_Categories,
  create_Transaction,
  get_Transaction,
  delete_Transaction,
  get_Labels
};


