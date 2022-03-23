const data = require('../data/zoo_data');

const { employees } = data;
const { species } = data;
function getOldestFromFirstSpecies(id) {
  const idFuncionario = employees.find((element) => element.id === id);
  const idAnimal = idFuncionario.responsibleFor[0];
  const especies = species.find((element) => element.id === idAnimal);
  const animais = especies.residents;
  const IdadeAnimais = animais.map((element) => element.age);
  const animalVelho = Math.max(...IdadeAnimais);
  const dadosAnimalVelho = animais.find((element) => element.age === animalVelho);
  return [dadosAnimalVelho.name, dadosAnimalVelho.sex, dadosAnimalVelho.age];
}
console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
module.exports = getOldestFromFirstSpecies;
