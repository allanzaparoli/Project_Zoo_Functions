const data = require('../data/zoo_data');

const { species, employees } = data;

function semDados() {
  let dadosTotal = [];
  employees.forEach((element) => {
    const map = element.responsibleFor.map((responsavel) =>
      (species.find((id) => id.id === responsavel)).name);
    const loc = element.responsibleFor.map((responsavel) =>
      (species.find((id) => id.id === responsavel)).location);
    dadosTotal = [...dadosTotal, { id: element.id,
      fullName: `${element.firstName} ${element.lastName}`,
      species: map,
      locations: loc }];
  });
  return dadosTotal;
}

function getEmployeesCoverage(dados) {
  let dadosFunc; const animalFuncRespons = []; let dadosTotal = [];
  if (!dados) return semDados();
  if (dados.id) dadosFunc = employees.find((element) => element.id === dados.id);
  if (dados.name) {
    dadosFunc = employees.find((element) => element.firstName === dados.name
    || element.lastName === dados.name);
  }
  if (!dadosFunc) throw new Error('Informações inválidas');
  animalFuncRespons.push(dadosFunc); animalFuncRespons.find((element) => {
    const localAnimal = element.responsibleFor.map((responsavel) =>
      (species.find((id) => id.id === responsavel)).name);
    const loc = element.responsibleFor.map((responsavel) =>
      (species.find((id) => id.id === responsavel)).location);
    dadosTotal = { id: element.id,
      fullName: `${element.firstName} ${element.lastName}`,
      species: localAnimal,
      locations: loc }; return dadosFunc;
  }); return dadosTotal;
}
console.log(getEmployeesCoverage());
module.exports = getEmployeesCoverage;
