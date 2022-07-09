const Mercado = require("../models/mercado.models");

const patchCromos = async (req, res, next) => {
    try {
      const { id } = req.params;
  
      const patchCromo = new Cromo(req.body);  
      patchCromo._id = id;
      const cromoData= await Cromo.findByIdAndUpdate(id,patchCromo)

 

      if (cromoData.imagen) {
        deleteFile(cromoData.imagen);
        }

      if (req.file) {
        patchCromo.imagen = req.file.path;
      }
  
      
      return res.status(200).json({ nuevo: patchCromo, vieja: cromoData });
    } catch (error) {
      return next(error);
    }
  };

  const spliceCromos = async (req, res, next) => {
    try {
      const { id } = req.params;
  
      const spliceCromo = new Cromo(req.body);  
      spliceCromo._id = id;
      const cromoData= await Cromo.findByIdAndDelete(id,spliceCromo)

 

      if (cromoData.imagen) {
        deleteFile(cromoData.imagen);
        }

      if (req.file) {
        patchCromo.imagen = req.file.path;
      }
  
      
      return res.status(200).json({ nuevo: patchCromo, vieja: cromoData });
    } catch (error) {
      return next(error);
    }
  };

  mmodule.exports = { patchCromos,spliceCromos}