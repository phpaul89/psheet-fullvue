const express = require("express");
const router = express.Router();
const Sheet = require("../models/SheetModel.js");

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
  } = request.body.patientSheetData;

  Sheet.create({
    name: name,
    date: date,
    gender: gender,
    birthDate: birthDate,
    personalTopics: personalTopics,
    firstScan: [
      { name: firstScan[0].name, value: firstScan[0].value },
      { name: firstScan[1].name, value: firstScan[1].value },
      { name: firstScan[2].name, value: firstScan[2].value },
      { name: firstScan[3].name, value: firstScan[3].value },
      { name: firstScan[4].name, value: firstScan[4].value },
      { name: firstScan[5].name, value: firstScan[5].value },
      { name: firstScan[6].name, value: firstScan[6].value },
    ],
    secondScan: [
      { name: secondScan[0].name, value: secondScan[0].value },
      { name: secondScan[1].name, value: secondScan[1].value },
      { name: secondScan[2].name, value: secondScan[2].value },
      { name: secondScan[3].name, value: secondScan[3].value },
      { name: secondScan[4].name, value: secondScan[4].value },
      { name: secondScan[5].name, value: secondScan[5].value },
      { name: secondScan[6].name, value: secondScan[6].value },
    ],
    customNotes: customNotes,
    furtherNotes: furtherNotes,
    nextSteps: nextSteps,
  })
    .then((success) => {
      console.log("Sheet created: ", success);
      response.status(201).json({ message: "Created sheet successfully!" });
    })
    .catch((error) => {
      response.json(error);
    });

  //response.send("x");
});

router.get("/openSheet", (request, response, next) => {
  Sheet.find({ name: "John Doe" })
    .then((sheets) => {
      console.log("These sheets exist: ", sheets);
      response.status(201).json(sheets);
    })
    .catch((error) => {
      response.json(error);
    });

  // Sheet.findOne({ name: "John Doe" })
  //   .then((sheet) => {
  //     console.log("querying this sheet: ", sheet);
  //     response.status(201).json(sheet);
  //   })
  //   .catch((error) => {
  //     response.json(error);
  //   });
});

module.exports = router;
