let jsonData33 = require('./task2.json');
console.log(jsonData33);
console.dir(Array.isArray(jsonData33));



function unique(arr) {
    let result = []; 
    for (let user of arr) {
      if (!JSON.stringify(result).includes(user.name)) {
        result.push(user);
      }
    }
    console.log(result.length);
    return result;  
  }

//console.log(unique(jsonData33));


// let result = [];
// for (let user of jsonData33) {
//   if ((user.name=='Mrs. Dennis Schulist')) {
//       result.push(user);
//   }
// }
// console.log(result);