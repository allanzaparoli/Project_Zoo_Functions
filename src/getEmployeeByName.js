const data = require('../data/zoo_data');

const { employees } = data;
const getEmployeeByName = (name) => {
  if (name) {
    return employees.find((element) => element.firstName === name)
    || employees.find((element) => element.lastName === name);
  } return {};
};
console.log(getEmployeeByName('Burl'));
module.exports = getEmployeeByName;
