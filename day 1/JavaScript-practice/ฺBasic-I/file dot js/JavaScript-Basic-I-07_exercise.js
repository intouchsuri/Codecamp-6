console.log(`JavaScript-Basic-I-07_exercise \n`);

// console.log(`0` ? `hello` : "");
// if ("0") console.log(`hi`);

let myName = String(prompt(`ระบุุชื่อ`));
let ans;
// myName === `intouch` ? (ans = `เก่งมาก`) : (ans = `คุณไม่รู้จักชื่อฉัน`);
// console.log(ans);

if (myName === `intouch`) {
  ans = `เก่งมาก`;
} else {
  ans = `คุณไม่รู้จักฉัน`;
}
console.log(ans);
