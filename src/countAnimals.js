const data = require('../data/zoo_data');
const { species } = data;


const countAnimals = (animal) => {
  if (!animal) {
    const resultado = {};
    species.forEach((element) => {
      resultado[element.name] = element.residents.length;
    });
    return resultado;
  }
  if (!animal.sex) {
    const findAnimal = species.find((element) => element.name === animal.specie);
    return findAnimal.residents.length;
  }
  if (animal.sex) {
    const findAnimal = species.find((element) => element.name === animal.specie);
    const sex = findAnimal.residents.filter((element) => element.sex === animal.sex);
    return sex.length;
  }
};
console.log(countAnimals());

module.exports = countAnimals;