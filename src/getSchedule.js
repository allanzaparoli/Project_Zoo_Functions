const data = require ('../data/zoo_data');
const { hours, species } = data;

function getSchedule(scheduleTarget) {
  const especies = {};
  const horas = hours.Sunday;
  species.forEach((element) => {
  especies[element.name] = element.availability;
  });
  console.log(horas);
  console.log();
  return especies;
}  
console.log(getSchedule());
module.exports = getSchedule;
