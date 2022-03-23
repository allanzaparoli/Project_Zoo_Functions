const data = require ('../data/zoo_data');
const { prices } = data;

function countEntrants(entrants) {

  const child = entrants.filter((element) => element.age < 18).length;
  const adult = entrants.filter((element) => element.age >= 18 && element.age < 50).length;
  const senior = entrants.filter((element) => element.age >= 50).length;
  return {child, adult, senior};
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
  return 0;
  };

  const retorno = countEntrants(entrants);
  const adult = retorno.adult * prices.adult;
  const child = retorno.child * prices.child;
  const senior = retorno.senior * prices.senior;
  return adult + child + senior;
};

console.log(calculateEntry({}));
module.exports = { calculateEntry, countEntrants };
