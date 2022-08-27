const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");
const Order = require("../models/Order");

const router = require("express").Router();

// CREATE
router.post("/", verifyToken, async (req, res) => {
  try {
    const newOrder = Order(req.body);
    const savedOrder = await newOrder.save();
    return res.status(200).json(savedOrder);
  } catch (err) {
    return res.status(500).json(err);
  }
});

// UPDATE

router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updateOrder = await Order.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    return res.status(200).json(updateOrder);
  } catch (err) {
    return res.status(500).json(err);
  }
});

// DELETE

router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    return res.status(200).json("Deleted Order...");
  } catch (err) {
    return res.status(500).json(err);
  }
});

// GET
router.get("/find/:userId", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const Order = await Order.findOne({ userId: req.params.userId });
    res.status(200).json(Order);
  } catch (err) {
    return res.status(500).json(err);
  }
});

// GET ALL
router.post("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const Orders = await Order.find();
    return res.status(200).json(Orders);
  } catch (err) {
    return res.status(500).json(err);
  }
});

//GET MONTHLY INCOME
router.get("/income", verifyTokenAndAdmin, async (req, res) => {
  try {
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const previousMonth = new Date(new Date.setMonth(lastMonth.getMonth() - 1));
    const income = await Order.aggregate([
      { $match: { createdAt: { $gte: previousMonth } } },
      { $project: { month: { $month: "$createdAt", sales: "$amount" } } },
      {
        $group: {
          _id: "$month",
          total: { $sum: "$sales" },
        },
      },
    ]);
    res.status(200).json(income);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
