const router = require("express").Router();
const User = require("../models/User");

const {verifyTokenAndAdmin, verifyTokenAndAuthorization } = require("./verifyToken")

router.get("/usertest", (req, res) => {
  res.send("user test is successful");
});

router.post("userposttest", (req, res) => {
  const username = req.body.username;
  console.log(username);
});

router.put(":/id", verifyTokenAndAuthorization, async (req, res) => {
  if(req.body.password) {
    req.body.password = CryptoJS.AES.ecrypt(
      req.body.password, process.env.PASS_SEC).toString()
  }
  
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id, {
        $set: req.body
      },
      {
        new: true}
    );
    return res.status(200).json(updatedUser)
  } catch (err) {
    return res.status(500).json(err)
  }
}



module.exports = router;
