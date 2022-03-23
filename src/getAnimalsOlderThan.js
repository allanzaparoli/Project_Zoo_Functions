const data = require ('../data/zoo_data');
const { species } = data;

const getAnimalsOlderThan = (animal, age) => {
  const especies = species.find((element) => element.name === animal);
  const idade = especies.residents.every((element) => element.age > age);
  return idade;
};

console.log(getAnimalsOlderThan('lions', 6));

module.exports = getAnimalsOlderThan;
