var express = require('express');
var router = express.Router();
var studentController = require("../controllers/studentController");

router.get("/stud", async function (req, res, next) {
  let stud = await studentController.getListStudent();
  res.json(stud);
});

// GET detail
router.get("/stud/:id", async function (req, res, next) {
    let { id } = req.params;
    let stud = await studentController.getStudentById(id);
    res.json(stud);
  });
  
  
module.exports = router;
