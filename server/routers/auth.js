const router = require("express").Router();

const User = require("../models/User");

const CryptoJs = require("crypto-js");

const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJs.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString(),
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      return res.status(401).json("Wrong credentials!");
    }
    const hashedPassword = CryptoJs.AES.decrypt(
      user.password,
      process.env.PASS_SEC
    );
    const originalPassword = hashedPassword.toString(CryptoJs.enc.Utf8);
    if (originalPassword !== req.body.password) {
      return res.status(401).json("Wrong credentials!");
    }

    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SEC,
      { expiresIn: "3d" }
    );

    const { password, ...info } = user._doc;
    return res.status(200).json({ ...info, accessToken });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});



module.exports = router;
