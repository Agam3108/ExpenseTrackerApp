const mongoose = require("mongoose");
const transactionSchema = new mongoose.Schema(
  {  
    userId: {
      type: String,
      require: true
    },
    amount: {
      type: Number,
      require: [true, "Amount is required"],
    },
    category: {
      type: String,
      require: [true, "Category is Required"],
    },
    reference: {
      type: String,
    },
    description: {
      type: String,
      require: [true, "Description is Required"],
    },
    date: {
      type: String,
      require: [true, "Date is Required"],
    },
  },
  { timestamps: true }
);
const transactionModel = mongoose.model("transactions");
module.exports=transactionModel ;

