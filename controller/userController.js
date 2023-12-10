const Partie = require("../model/partie");
const User = require("../model/user");
const bcrypt = require("bcrypt");

async function getall(req, res, next) {
  try {
    const data = await User.find();
    res.json(data);
  } catch (err) {
    console.log(err);
  }
}
async function createAcount(req, res, next) {
  try {
    console.log("create acount");
    const salt = await bcrypt.genSalt();
    req.body.password = await bcrypt.hash(req.body.password, salt);
    const user = new User({
      email: req.body.email,
      passwordHash: req.body.password,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      disabled: false,
      role: "simple",
    });
    await user.save();
    res.status(200).send("user added successfully ");
  } catch (err) {
    console.log(err);
  }
}

async function login(req, res, io) {
  try {
    const existingUser = await User.findOne({
      email: req.body.email,
    });
    if (!existingUser) {
      res.status(501).send("user Not exist");
    } else {
      const passwordCorrect = await bcrypt.compare(
        req.body.password,
        existingUser.passwordHash
      );

      if (!passwordCorrect) {
        res.status(401).send("Wrong password");
      } else {
        res.status(200).send("OK");
      }
    }
  } catch (err) {
    console.log(err);
  }
}

async function getbyid(req, res, next) {
  try {
    const data = await User.findById(req.params.id);
    res.json(data);
  } catch (err) {
    console.log(err);
  }
}

async function deletebyid(req, res, next) {
  try {
    const data = await User.findByIdAndDelete(req.params.id);
    res.json(data);
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  createAcount,
  login,
  getall,
  getbyid,
  deletebyid,
};
