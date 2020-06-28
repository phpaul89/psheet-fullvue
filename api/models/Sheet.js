const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sheetSchema = new Schema(
  {
    name: String,
    date: String,
    gender: String,
    birthDate: String,
    personalTopics: String,
    firstScan: {
      chakraOne: Number,
      chakraTwo: Number,
      chakraThree: Number,
      chakraFour: Number,
      chakraFive: Number,
      chakraSix: Number,
      chakraSeven: Number,
    },
    secondScan: {
      chakraOne: Number,
      chakraTwo: Number,
      chakraThree: Number,
      chakraFour: Number,
      chakraFive: Number,
      chakraSix: Number,
      chakraSeven: Number,
    },
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
