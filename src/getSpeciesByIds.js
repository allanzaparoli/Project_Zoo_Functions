const data = require('../data/zoo_data');

const { species } = data; // mesma coisa que escrever data.species
// agora posso escrever apenas species para acessar data.species
const getSpeciesByIds = (...ids) => {
  const especies = species.filter((animalId) => ids.find((element) => element === animalId.id));
  return especies;
};
console.log(getSpeciesByIds());

module.exports = getSpeciesByIds;
