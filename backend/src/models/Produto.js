const { Schema, model } = require("mongoose");
const ProdutoSchema = new Schema(
  {
    nome: {
      type: String,
      required: true
    },
    cod: {
      type: Number,
      unique: true,
      required: true
    },
    preco: {
      type: String,
      required: true
    },
    descricao: {
      type: String,
      required: true
    },
    estoque: {
      type: Number,
      required: true
    },
    fornecedor: {
      type: String,
      required: true
    }
  },

  {
    timestamps: true
  }
);
module.exports = model("Produto", ProdutoSchema);
