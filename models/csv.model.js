const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const csvSchema = new Schema(
  {
    name: { type: String, required: true },
    number: { type: Number, required: true}
  },

  { timestamps: true }
);

const Csvuser = mongoose.model("csvuser", csvSchema);

module.exports = Csvuser;