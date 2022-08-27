const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");
const Cart = require("../models/Cart");

const router = require("express").Router();

// CREATE
router.post("/", verifyToken, async (req, res) => {
  try {
    const newCart = Cart(req.body);
    const savedCart = await newCart.save();
    return res.status(200).json(savedCart);
  } catch (err) {
    return res.status(500).json(err);
  }
});

// UPDATE

router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const updateCart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    return res.status(200).json(updateCart);
  } catch (err) {
    return res.status(500).json(err);
  }
});

// DELETE

router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    return res.status(200).json("Deleted cart...");
  } catch (err) {
    return res.status(500).json(err);
  }
});

// GET
router.get("/find/:userId", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId });
    res.status(200).json(cart);
  } catch (err) {
    return res.status(500).json(err);
  }
});

// GET ALL
router.post("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const carts = await Cart.find();
    return res.status(200).json(carts);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
