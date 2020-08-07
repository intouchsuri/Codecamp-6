// Operator
// CONCATENATE String

let numFirst = 20;
let numSecond = 15;
let numSum;

console.log(typeof numFirst);
console.log(typeof numSecond);

let strConcate;
let strFirst = `20`;
let strSecond = `15`;
let strThird = `Siam`;
let strFourth = `sound`;

strConcate = numFirst + numSecond;
strConcate = numFirst + numSecond;

console.log(strConcate);
strConcate = String(numFirst) + String(numSecond);
console.log(strConcate);

console.log(strFirst + strSecond);

sum = strFirst + strSecond;
console.log(sum);

sum = Number(strFirst) + Number(strSecond);
console.log(sum);

let booleanFirst = ``;
let booleanSecond = `-1`;
let booleanThird = `99`;
let booleanFourth = 1 / 0;

console.log(`\n`);
console.log(`แสดงผล Boolean`);
console.log(Boolean(booleanFirst));
console.log(Boolean(booleanSecond));
console.log(Boolean(booleanThird));
console.log(Boolean(booleanFourth));
console.log(Boolean(strFirst));

console.log(`30 * 15 = ` + `30` * `15`);

console.log(`\n`);
console.log(`Operator 2 for String`);

console.log(`Rock ` + `star`);
console.log(strThird + strFourth);
console.log(`การทำงานของ operator +`);
console.log(`50` + `60`);
console.log(40 + `60`);
console.log(`40` + 15);

console.log(`\nการทำงานของ operator อื่นๆ กับ string`);
console.log(`50` - `60`);
console.log(`50` * `60`);
console.log(`50` / `60`);

console.log(`Operator 2 for Number`);
console.log(`\nModulation`);
console.log(80 % 3);
console.log(3 % 2);
console.log(2 % 2);
console.log(1.5 % 2);
console.log(3.945325 % 2);

console.log(`\nPower`);
let numPower1 = 10;
let numPower2 = 5;
let numPower3 = -3;
let numPower4 = 0.5;
console.log(5 ** 10);
console.log(841 ** -3);
console.log(100 ** 0.3);
console.log(`${numPower1} \*\* ${numPower3} = ` + numPower1 ** numPower3);
console.log(`${numPower1} \*\* ${numPower4} = ` + numPower1 ** numPower4);
console.log(`${numPower3} \*\* ${numPower4} = ` + numPower3 ** numPower4);
console.log(`${numPower3} \*\* ${numPower2} = ` + numPower3 ** numPower2);

numPower1++;
console.log(`numPower1 \+\+ = ` + numPower1);
++numPower1;
console.log(`\+\+ numPower1  = ` + numPower1);

numPower1--;
console.log(`numPower1 \-\- = ` + numPower1);
--numPower1;
console.log(`\-\- numPower1  = ` + numPower1);

numPower1 += 3;

console.log(`\nnumPower1  = 10 `);
console.log(`numPower1  \+= 3 ` + numPower1);
console.log(`numPower1  =+ ใช้งานไม่ได้`);

numPower1 -= 3;
console.log(`numPower1  \-= 3 ` + numPower1);
numPower1 *= 3;
console.log(`numPower1  \*= 3 ` + numPower1);
numPower1 /= 3;
console.log(`numPower1  \/= 3 ` + numPower1);
