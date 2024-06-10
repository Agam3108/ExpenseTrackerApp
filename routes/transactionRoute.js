const express = require("express");
const { addTransaction, getAllTransaction } = require("../controllers/transactionController");

const router = express.Router();

router.post('/addTransaction',addTransaction)

  router.post("/edit-transaction",editTransaction);
  router.post("/delete-transaction",deleteTransaction);

router.post ('/get-transaction',getAllTransaction);
module.exports = router;
