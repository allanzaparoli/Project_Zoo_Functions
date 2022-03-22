const data = require('../data/zoo_data');
const { species, employees } = data;
function getEmployeesCoverage(dados) {
  const localizacao = [];
  const nomeAnimalFuncRespons = [];
  let dadosFunc;
  let dadosId;
  let animalFuncRespons;
  let nomeCompletoFunc;

  let obj = []
  
  if (!dados) {
    employees.forEach((element) => {
      const map = element.responsibleFor.map((responsavel) => (species.find((id) => id.id === responsavel)).name);
      const loc = element.responsibleFor.map((responsavel) => (species.find((id) => id.id === responsavel)).location);
      obj = [ ...obj, {id: element.id, fullName: `${element.firstName} ${element.lastName}`, species: map, locations: loc } ];
    });
    return obj;
  };
  if (dados.id) {
    dadosFunc = employees.find((element) => element.id === dados.id);
  }
  if (dados.name) {
    dadosFunc = employees.find((element) => element.firstName === dados.name || element.lastName === dados.name);
  }
  if (!dadosFunc) {
    throw new Error('Informações inválidas');
  }
  dadosId = dadosFunc.id;
  nomeCompletoFunc = `${dadosFunc.firstName} ${dadosFunc.lastName}`;
  animalFuncRespons = dadosFunc.responsibleFor;
  animalFuncRespons.forEach((element) => {
    const localAnimal = species.find((e) => e.id === element)
    nomeAnimalFuncRespons.push(localAnimal.name);
    localizacao.push(localAnimal.location);
  });

  return {id: dadosId, fullName: nomeCompletoFunc, species: nomeAnimalFuncRespons, locations: localizacao};

}
console.log(getEmployeesCoverage());
module.exports = getEmployeesCoverage;
