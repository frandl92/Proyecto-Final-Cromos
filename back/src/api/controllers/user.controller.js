const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const HTTPSTATUSCODE = require("../../utils/httpstatuscode");

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
    const usuarioByID = await User.findById(id);
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
    const allUsuarios = await User.find();
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
    const usuarioData= await User.findByIdAndUpdate(id,patchUsuario)

  //   patchMesa.autor =[...mesaData.autor, ...patchMesa.autor]

    if (usuarioData.imagen) {
      deleteFile(usuarioData.imagen);
      }

    if (req.file) {
      patchUsuario.imagen = req.file.path;
    }

  //   const CromoDB = await Mesa.findByIdAndUpdate(id, patchMesa);
    
    return res.status(200).json({ nuevo: patchUsuario, vieja: usuarioData });
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
  deleteUsuario
};
