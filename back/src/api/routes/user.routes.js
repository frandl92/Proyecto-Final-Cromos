const express = require("express");
const router = express.Router();

const { register, login, getAllUsuarios, patchUsuarios, getUsuarioID, deleteUsuario } = require("../controllers/user.controller");

router.post("/register", register);
router.post("/login", login);
router.get("/users", getAllUsuarios);
router.patch("/:id", patchUsuarios);
router.get("/:id", getUsuarioID);
router.delete("/:id", deleteUsuario)

module.exports = router;
