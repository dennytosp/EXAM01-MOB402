const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const studentSchema = new Schema({
  id: { type: ObjectId },
  name: { type: String},
  mobile: { type: Number, required: true },
  dob: { type: Date, required: true },
  address: { type: String, required: true },
});

module.exports = mongoose.model("Student", studentSchema);
