const data = require('../data/zoo_data');
const { prices } = data;

const entrants = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];

function countEntrants(entrants) {

  const child = entrants.filter((element) => element.age < 18).length;
  const adult = entrants.filter((element) => element.age >= 18 && element.age < 50).length;
  const senior = entrants.filter((element) => element.age >= 50).length;
  return {child, adult, senior};
}

function calculateEntry(entrants) {
  if(!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const retorno = countEntrants(entrants);
  const adult = retorno.adult * prices.adult;
  const child = retorno.child * prices.child;
  const senior = retorno.senior * prices.senior;
  return adult + child + senior;
}

console.log(calculateEntry({}));
module.exports = { calculateEntry, countEntrants };
