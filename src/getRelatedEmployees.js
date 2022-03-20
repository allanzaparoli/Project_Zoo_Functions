const data = require('../data/zoo_data');
const { employees, species } = data;

const isManager = (id) => {
  let result = false;
  employees.forEach((element) => {
    element.managers.forEach((element) => {
      if (element === id) {
        result = true;
      };
    });
  });
  return result;
};

function getRelatedEmployees(managerId) {
  const resultado = isManager(managerId);
  if (resultado) {
    const gerente = employees.filter((element) => {
      return element.managers.find((gerenteId) => gerenteId === managerId)
    });
    return gerente.map((element) => `${element.firstName} ${element.lastName}`);
  } else { 
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  };
};
console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'))
module.exports = { isManager, getRelatedEmployees };
