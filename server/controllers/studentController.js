var studentServices = require("../services/studentServices");

exports.getListStudent = async function getListStudent() {
  return await studentServices.getListStudent();
};
exports.getStudentById = async function getStudentById(id) {
  return await studentServices.getStudentById(id);
};
