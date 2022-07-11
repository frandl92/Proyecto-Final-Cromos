const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MercadoSchema = new Schema(
    {
        user1Id: {type: String},
        user2Id: {type: String},
        cromo1Id: {type: String},
        cromo2Id: {type: String},
       
    },
    {timestamps: true}


);

const Mercado = mongoose.model("mercado", MercadoSchema);

module.exports = Mercado;