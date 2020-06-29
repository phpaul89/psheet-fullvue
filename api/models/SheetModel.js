const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sheetSchema = new Schema(
  {
    name: String,
    date: String,
    gender: String,
    birthDate: String,
    personalTopics: String,
    firstScan: [{ name: String, value: Number }],
    secondScan: [{ name: String, value: Number }],
    customNotes: String,
    furtherNotes: String,
    nextSteps: String,
  },
  {
    timestamps: true,
  }
);

const Sheet = mongoose.model("Sheet", sheetSchema);
module.exports = Sheet;
