const express = require("express");

const router = express.Router();
const upload = require("../../middlewares/file")
const {  isRegistered, isAdmin } = require("../../middlewares/auth.middleware");

const  {getAllCromos, getCromoByID, getCromoByNombre, createCromos, deleteCromos, patchCromos} = require("../controllers/cromos.controllers");


router.get("/", getAllCromos);
router.get("/id/:id", getCromoByID);
router.get("/nombre/:nombre", getCromoByNombre);
router.post("/",  createCromos);
router.delete('/:id', [isAdmin], deleteCromos);
router.patch('/:id',  patchCromos)

module.exports = router;
