const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");

const {
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
} = require("./verifyToken");
const { restart } = require("nodemon");

router.get("/usertest", (req, res) => {
  res.send("user test is successful");
});

router.post("userposttest", (req, res) => {
  const username = req.body.username;
  console.log(username);
});

// UPDATE
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  // if has password in body, create new encrypt password
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString();
  }

  // update user with new infomation
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    return res.status(200).json(updatedUser);
  } catch (err) {
    return res.status(500).json(err);
  }
});

// DELETE USER
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    return res.status(200).json("User has been deleted .... ");
  } catch (err) {
    return res.status(500).json(err);
  }
});

// GET USER ID
router.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    // the query of mongodb will always async - await function
    const user = await User.findById(req.params.id);
    const { password, ...info } = user._doc;

    return res.status(200).json(info);
  } catch (err) {
    return res.status(500).json(err);
  }
});

//GET ALL USER
router.get("/", verifyTokenAndAdmin, async (req, res) => {
  const query = req.query.new;
  try {
    const users = query
      ? await User.find().sort({ _id: -1 }).limit(5)
      : await User.find();
    return res.status(200).json(users);
  } catch (err) {
    return res.status(500).json(err);
  }
});

// GET USER STATS
router.get("/stats", verifyTokenAndAdmin, async (req, res) => {
  const date = new Date();
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
  try {
    const data = await User.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      {
        $project: {
          month: {
            $month: "$createdAt",
          },
        },
      },
      {
        $group: {
          _id: "$month",
          total: {
            $sum: 1,
          },
        },
      },
    ]);
    res.status(200).json(data);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
