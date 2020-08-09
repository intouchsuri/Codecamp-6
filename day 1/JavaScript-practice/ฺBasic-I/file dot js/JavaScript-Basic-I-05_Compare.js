// Compare

// String Compare

let strA = `intouch`;
let strB = `Intouch`;

console.log(strA === strB);

console.log(`A` < `a`);
console.log(`Z` < `a`);
console.log(`Siam` < `siam`);
console.log(`sound` < `siam`);
console.log(5 < `a`);

console.log(true != false);
console.log(true === `true`);
console.log(true == `true`);

console.log(1 == `1`);
console.log(1 === `1`);

// วิธีการแบบนี้้ไม่นิยมเพราะว่าการเขียนโปรแกรมให้ระวังเรื่องประเภทข้อมูล
console.log(`12` > 10);

// ดังนั้นควรใช้งาน แบบ === จะเหมาะสมกว่าเพื่อตรวจสอบประเภทข้อมูลด้วย
console.log(`12` == 12);
console.log(`12` === 12);
console.log(`12` != 12);
console.log(`12` !== 12);

console.log(null == undefined);
console.log(null === undefined);

// ข้อควรระวังการเปรียบเทียบ null
console.log(null <= 0);
console.log(null <= 1);
console.log(null <= 10);
