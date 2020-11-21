const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const authConfig = require("../config/auth.json");
const Profile = require("../models/profile");
const User = require("../models/user");
const router = express.Router();

function generateToken(params = {}) {
  return jwt.sign({ params }, authConfig.secret, {
    expiresIn: 86400,
  });
}

// REGISTRAR USER
router.post("/register", async (req, res) => {
  const { email } = req.body;

  try {
    if (await User.findOne({ email }))
      return res.status(400).send({ error: "User already exists" });

    // Cria o perfil
    //const profile = await Profile.create({ name: req.body.name });

    // Cria o user
    //const user = await User.create({ ...req.body, profiles: [profile._id] });

    // Atualiza com o profile ID
    //profile.userId = user._id;
    //profile.save();

    //Substituí os passos acima por esses abaixo. Acho que funciona...
    const user = await User.create(req.body);
    const profile = await Profile.create({
      name: req.body.name,
      userId: user.id,
    });

    // Apaga o .password do user pra não ser retornado.
    user.password = undefined;

    return res.send({
      user,
      profile,
      token: generateToken({ id: user.id }),
    });
  } catch (err) {
    console.log(err);
    return res.status(400).send({ error: "Registration failed" });
  }
});

// AUTENTICAR USER
router.post("/authenticate", async (req, res) => {
  const { email, password } = req.body;

  // Procura no banco por um usuário com o mesmo email.
  const user = await User.findOne({ email }).select("+password");
  //console.log(user);

  // Se não encontrar, retorna erro.
  if (!user) return res.status(404).send({ error: "User not found" });

  // Se a senha fornecida pelo user não for válida, retorna erro.
  if (!(await bcrypt.compare(password, user.password)))
    return res.status(400).send({ error: "Invalid password" });

  // Apaga o .password do user pra não ser retornado.
  user.password = undefined;

  //const teste = user.profiles[0];
  //console.log(teste);
  //const profile = await Profile.find().populate("user");
  //console.log(profile);

  res.send({
    user,
    token: generateToken({ id: user.id }),
  });
});

module.exports = (app) => app.use("/auth", router);
