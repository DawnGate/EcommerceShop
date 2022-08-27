const Product = require("../models/Product");
const {
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
} = require("./verifyToken");
const router = require("express").Router();

// CREATE
router.post("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    return res.status(200).json(savedProduct);
  } catch (err) {
    return res.status(500).json(err);
  }
});

// UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const newProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    return res.status(200).json(newProduct);
  } catch (err) {
    return res.status(500).json(err);
  }
});

// DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    return res.status(200).json("The product has been deleted...");
  } catch (err) {
    return res.status(500).json(err);
  }
});

//GET PRODUCT
router.get("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    return res.status(200).json(product);
  } catch (err) {
    return res.status(500).json(err);
  }
});

// GET ALL PRODUCT
router.get("/", async (req, res) => {
  try {
    const qNew = req.query.new;
    const qCategory = req.query.category;
    let products;
    if (qNew) {
      products = await Product.find().sort({ createAt: -1 }).limit(1);
    } else if (qCategory) {
      products = await Product.find({ categories: { $in: [qCategory] } });
    } else {
      products = await Product.find();
    }
    return res.status(200).json(products);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
