const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const HTTPSTATUSCODE = require("../../utils/httpstatuscode");
const Cromo = require("../models/cromos.models");

const register = async (req, res, next) => {
  try {
    const newUser = new User(req.body);
    const newUserDB = await newUser.save();
    return res.json({
      status: 201,
      message: HTTPSTATUSCODE[201],
      data: null,
    });
  } catch (error) {
    return next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const userInfo = await User.findOne({ email: req.body.email });
    if (bcrypt.compareSync(req.body.password, userInfo.password)) {
      userInfo.password = null;

      const token = jwt.sign(
        {
          id: userInfo._id,
          email: userInfo.email,
        },
        req.app.get("secretKey"),
        {
          expiresIn: "2h",
        }
      );

      return res.json({
        status: 200,
        message: HTTPSTATUSCODE[200],
        data: { user: userInfo, token: token },
      });
    }
  } catch (error) {
    return next(error);
  }
};

const getUsuarioID = async (req, res, next) => {
  try {
    const id = req.params.id;
    const usuarioByID = await User.findById(id)
      .populate("album")
      .populate("repetido");
    return res.json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      Usuario: usuarioByID,
    });
  } catch (error) {
    return next(error);
  }
};

const getAllUsuarios = async (req, res, next) => {
  try {
    const allUsuarios = await User.find()
      .populate("album")
      .populate("repetido");
    return res.json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      Usuario: allUsuarios,
    });
  } catch (error) {
    return next(error);
  }
};

const patchUsuarios = async (req, res, next) => {
  try {
    const { id } = req.params;

    const patchUsuario = new User(req.body);
    patchUsuario._id = id;
    const usuarioData = await User.findByIdAndUpdate(id, patchUsuario)
      .populate("album")
      .populate("repetido");

    patchUsuario.album = [...usuarioData.album, ...patchUsuario.album];

    patchUsuario.repetido = [...usuarioData.repetido, ...patchUsuario.repetido];

    if (usuarioData.imagen) {
      deleteFile(usuarioData.imagen);
    }

    if (req.file) {
      patchUsuario.imagen = req.file.path;
    }

    const usuarioDB = await User.findByIdAndUpdate(id, patchUsuario);

    return res.status(200).json({ nuevo: usuarioDB, vieja: usuarioData });
  } catch (error) {
    return next(error);
  }
};


const quitarCromo = async (req, res, next) => {
  try {
    const { id } = req.params;

    const deleteCromo = req.body.deleteCromo;
    console.log(deleteCromo);
    console.log(id)
   
   
    const usuarioData = await User.findByIdAndUpdate(id, deleteCromo)
      
      console.log(usuarioData.repetido);

     const find = usuarioData.repetido.find(element => element === deleteCromo)
    //  console.log(find);
    const index = deleteCromo.repetido.indexOf(find)
    const remp = deleteCromo.repetido.splice(index,1)
    console.log(remp)
    console.log(deleteCromo.repetido)

   
    const usuarioDB = await User.findByIdAndUpdate(id, deleteCromo);

    return res.status(200).json({ nuevo: usuarioDB, vieja: usuarioData });
  } catch (error) {
    return next(error);
  }
};


const deleteUsuario = async (req, res, next) => {
  try {
    const { id } = req.params;

    const usuarioBorrado = await User.findByIdAndDelete(id);

    return res.status(200).json(usuarioBorrado);
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  register,
  login,
  getAllUsuarios,
  patchUsuarios,
  getUsuarioID,
  deleteUsuario,
  quitarCromo
};
