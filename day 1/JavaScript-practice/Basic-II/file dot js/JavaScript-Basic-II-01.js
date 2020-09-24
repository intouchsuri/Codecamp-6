console.log(`JavaScript Basic II \n`);

// let age = Number(prompt(`อายุผู้สมัครงาน`));

// if (age < 18 || age > 60) {
//   console.log(`อายุ ${age} ไม่สามารถรับสมัครงานได้`);
// } else {
//   console.log(`อายุ ${age} ยินดีรับเข้าทำงาน`);
// }

// age < 18 || age > 60
//   ? console.log(`อายุ ${age} ไม่สามารถรับสมัครงานได้`)
//   : console.log(`อายุ ${age} ยินดีรับเข้าทำงาน`);

// console.log(0 || "" || null);
// console.log(0 > 1 || 0 > 5 || `ok`);
// let f;
// console.log(f || `f ไม่แสดงผล`);

// let userName = String(prompt("Username"));
// let passWord = String(prompt(`Password`));

// userName || passWord
//   ? console.log(`ตรวจสอบชื่อผู้ใช้และระหัสผ่าน`)
//   : console.log(`กรุณากรอก Username และ Password`);

// let currentName = String(prompt(`กรอกชื่อ`));
// let defaultName = String(prompt(`กรอก default`));
// let userName = currentName || defaultName || `ไม่มีชื่อ`;

// console.log(userName);
// let userName;
// currentName && defaultName
//   ? console.log(`รอตรวจสอบข้อมูล`)
//   : console.log(`ไม่จริง`);

// if (currentName && defaultName) {
//   console.log(`รอตรวจสอบข้อมูล`);
// }

// console.log(Boolean(0) && Boolean(1));
// console.log(1 && `0` && null);
// console.log(1 && 0 && null);
// console.log(1 && null && `0`);
// console.log(1 && 5 && `0` && "0k");
// console.log(`เทสตัวไหน fault`);
// console.log(1 && console.log(`1`) && 0);

// console.log(Boolean(console.log(`0`)));

// let x = Number(prompt(`input x`));
// if (x > 0) console.log(`มากกว่า 0`);
// console.log(x > 0 && `x มากกว่า 0`);

// console.log(typeof (console.log("1")));

// let toggle = false;
// toggle = !toggle;
// console.log(toggle);
// toggle = !toggle;
// console.log(toggle);

// function toggleTextBox() {
//   let state = document.querySelector("#int1").disabled;
//   document.querySelector("#int1").disabled = !state;
// }

// function toggleTextBox() {
//   document.querySelector(`#int1`).disabled = !document.querySelector(`#int1`).disabled;
// }

let nameLogin = String(prompt(`insert Username`));

if (nameLogin == ``) {
  console.log(`ยกเลิก`);
} else if (nameLogin == `admin`) {
  let passLogin = String(prompt(`insert Password`));
  if (passLogin == `siamsound`) {
    console.log(`Welecome to Site`);
  } else if (passLogin == "") {
    console.log(`Cancel`);
  } else {
    console.log(`Password Wrong`);
  }
} else {
  console.log(`ผมไม่รู้จักคุณ`);
}
