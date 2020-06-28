const express = require("express");
const router = express.Router();
const Sheet = require("../models/Sheet.js");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.post("/saveSheet", (request, response, next) => {
  console.log("from backend: ", request.body);
  const {
    name,
    date,
    gender,
    birthDate,
    personalTopics,
    firstScan,
    secondScan,
    customNotes,
    furtherNotes,
    nextSteps,
  } = request.body.sheetData;

  Sheet.create({
    name: name,
    date: date,
    gender: gender,
    birthDate: birthDate,
    personalTopics: personalTopics,
    firstScan: {
      chakraOne: firstScan.chakraOne,
      chakraTwo: firstScan.chakraTwo,
      chakraThree: firstScan.chakraThree,
      chakraFour: firstScan.chakraFour,
      chakraFive: firstScan.chakraFive,
      chakraSix: firstScan.chakraSix,
      chakraSeven: firstScan.chakraSeven,
    },
    secondScan: {
      chakraOne: secondScan.chakraOne,
      chakraTwo: secondScan.chakraTwo,
      chakraThree: secondScan.chakraThree,
      chakraFour: secondScan.chakraFour,
      chakraFive: secondScan.chakraFive,
      chakraSix: secondScan.chakraSix,
      chakraSeven: secondScan.chakraSeven,
    },
    customNotes: customNotes,
    furtherNotes: furtherNotes,
    nextSteps: nextSteps,
  })
    .then((response) => {
      console.log("Sheet created: ", response);
      response.status(201).json({ message: "Created sheet successfully!" });
    })
    .catch((error) => {
      response.json(error);
    });

  //response.send("x");
});

module.exports = router;
