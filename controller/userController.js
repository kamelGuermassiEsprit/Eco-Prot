const Partie = require("../model/partie");
const User = require("../model/user");
const bcrypt = require("bcrypt");

async function add(req, res, next) {
  try {
    const salt = await bcrypt.genSalt();
    console.log(salt);
    req.body.password = await bcrypt.hash(req.body.password, salt);
    const user = new User({
      email: req.body.email,
      passwordHash: req.body.password,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      disabled: req.body.disabled,
      role: req.body.role,
    });
    await user.save();
    res.status(200).send("user added successfully ");
  } catch (err) {
    console.log(err);
  }
}

async function login(req, res, next) {
  try {
    const existingUser = await User.findOne({
      email: req.body.email,
    });
    /* const user = await User.find({
      email: req.body.email,
      passwordHash: req.body.password,
    }); */
    if (!existingUser) {
      res.status(501).send("user Not exist");
    } else {
      const passwordCorrect = await bcrypt.compare(
        req.body.password,
        existingUser.passwordHash
      );
      console.log(passwordCorrect);
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

async function getall(req, res, next) {
  try {
    const data = await Joueur.find();
    res.json(data);
  } catch (err) {
    console.log(err);
  }
}

async function getbyid(req, res, next) {
  try {
    const data = await Joueur.findById(req.params.id);
    res.json(data);
  } catch (err) {
    console.log(err);
  }
}

async function deletebyid(req, res, next) {
  try {
    const data = await Joueur.findByIdAndDelete(req.params.id);
    res.json(data);
  } catch (err) {
    console.log(err);
  }
}

async function attaque(req, res, next) {
  try {
    const j1 = await Joueur.findById(req.params.id1);
    const j2 = await Joueur.findById(req.params.id2);
    score1 = j1.score + 10;
    sante2 = j2.sante - 20;

    const j1u = await Joueur.findByIdAndUpdate(req.params.id1, {
      score: score1,
    });
    const j2u = await Joueur.findByIdAndUpdate(req.params.id2, {
      sante: sante2,
    });
    res.send(j1u + "a attaque" + j2u);
  } catch (err) {
    console.log(err);
  }
}

async function addpartie(req, res, next) {
  try {
    const partie = new Partie({
      nom: req.body.nom,
      joueur_1: req.params.id1,
      joueur_2: req.params.id2,
      etat: "EN COURS",
    });
    await partie.save();
    res.status(200).send("add good partie");
  } catch (err) {
    console.log(err);
  }
}
async function addpartiesocket(data) {
  try {
    const partie = new Partie({
      nom: data.nom,
      joueur_1: data.id1,
      joueur_2: data.id2,
      etat: "EN COURS",
    });
    console.log("jjjjj" + JSON.stringify(data));
    const ju1 = await Joueur.findByIdAndUpdate(data.id2, {
      sante: 100,
      score: 0,
    });
    const ju2 = await Joueur.findByIdAndUpdate(data.id3, {
      sante: 100,
      score: 0,
    });
    await partie.save();
    //res.status(200).send("add good partie");
  } catch (err) {
    console.log(err);
  }
}

async function affichesocket(data) {
  try {
    console.log("kkkk" + JSON.stringify(data));
    const j1 = await Joueur.findById(data.id1);
    const j2 = await Joueur.findById(data.id2);

    r = { j1: j1, j2: j2 };
    return r;
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  add,
  login,
  /*  getall,
  getbyid,
  deletebyid,
  attaque,
  addpartie,
  addpartiesocket,
  affichesocket, */
};
