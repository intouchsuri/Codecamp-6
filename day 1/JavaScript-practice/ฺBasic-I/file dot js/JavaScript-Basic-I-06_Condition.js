// JavaScript-Basic-I-06_Condition

console.log(`JavaScript-Basic-I-06_Condition`);

// let age = prompt(`input you age : `);
// if (age > 18 && age < 60) {
//   console.log(`welcome to SiamSound`);
// } else {
//   console.log(`nottttt`);
// }

// let year = prompt(`input this year : `);
// if (year = 2019) {
//   console.log(`college`);
// } else {
//   console.log(`nottttt`);
// }

// let year = prompt(`input this year : `);
// if (year == 2019) console.log(`college`);
// else console.log(`nottttt`);

// let score = prompt(`input you score :`);
// if (score < 0) console.log(`pless put new score`);
// else if (score < 50) console.log(`not pass:`);
// else if (score < 60) console.log(`grade is D`);
// else if (score < 70) console.log(`grade is C`);
// else if (score < 80) console.log(`grade is B`);
// else if (score <= 100) console.log(`grade is A`);
// else if (score > 100) console.log(`pless put new score`);

// let score = prompt(`input you score :`);
// score < 0
//   ? console.log(`please put new score`)
//   : score < 50
//   ? console.log(`not pass:`)
//   : score < 60
//   ? console.log(`grade is D`)
//   : score < 70
//   ? console.log(`grade is C`)
//   : score < 80
//   ? console.log(`grade is B`)
//   : score <= 100
//   ? console.log(`grade is A`)
//   : console.log(`please put new score`);
// console.log(typeof score);

let score = Number(prompt(`input you score ......`));
let showGrade = "";

showGrade =
  score < 0
    ? `input you score again`
    : score < 50
    ? `Yon Not Pass`
    : score < 60
    ? `Grade D`
    : score < 70
    ? `Grade C`
    : score < 80
    ? `Grade B`
    : score <= 100
    ? `Grade A`
    : `Input Score Again`;
console.log(showGrade);
