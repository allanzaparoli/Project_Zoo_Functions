const data = require('../data/zoo_data');
const { hours } = data;
const { species } = data;
function getSchedule(scheduleTarget) {
  const especies = {};
  const horas = {};
  species.forEach((element) => {
    especies [element.name] =  element.availability;
  });
 console.log()
  return especies;
}  
console.log(getSchedule());
module.exports = getSchedule;