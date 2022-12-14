const data = require('../data/zoo_data');

const { employees } = data;
const isManager = (id) => {
  let result = false;
  employees.forEach((element) => {
    element.managers.forEach((e) => {
      if (e === id) {
        result = true;
      }
    });
  });
  return result;
};

function getRelatedEmployees(managerId) {
  const resultado = isManager(managerId);
  if (resultado) {
    const gerente = employees.filter((element) =>
      element.managers.find((gerenteId) => gerenteId === managerId));
    return gerente.map((element) => `${element.firstName} ${element.lastName}`);
  }
  if (!resultado) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
}
console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));
module.exports = { isManager, getRelatedEmployees };
