const studentModel = require("../models/studentModel");

exports.getListStudent = async function getListStudent() {
  let stud = await studentModel.find();
  return stud;
};
exports.getStudentById = async function getStudentById(id) {
    let stud = await studentModel.findById(id);
    return stud;
  };
  