const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reguserSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    type: { type: String, required: true },
  },

  { timestamps: true }
);

const Reguser = mongoose.model("reguser", reguserSchema);

module.exports = Reguser;
