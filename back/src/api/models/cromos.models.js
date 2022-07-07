const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CromosSchema = new Schema(
  {
    posicion: { type: Number, required: true },
    imagen: { type: String, required: true },
    nombre: { type: String, required: true },
    nacionalidad: { type: String, required: true },
    rol: { type: String, required: true },
    lenguaje: { type: String, required: false },
    frase: { type: String, required: false },
    status: { type: String, required: false },
  },
  { timestamps: true }
);

const Cromo = mongoose.model("cromos", CromosSchema);

module.exports = Cromo;