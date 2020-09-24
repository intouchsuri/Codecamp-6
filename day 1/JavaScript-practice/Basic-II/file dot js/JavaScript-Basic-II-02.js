console.log(`JavaScript-Basic-II-02 Loop`);
console.log(`Loop While`);

function whileElement1() {
  let i = 1;
  let whileEle = document.querySelector(`#loop`);
  let j = Number(prompt(`Loop Number`));
  while (i <= j) {
    console.log(`count ${i}`);
    whileEle.innerHTML += `count ${i} <br>`;
    i++;
  }
  whileEle.innerHTML += `Finish`;
  console.log(`Finish`);
}

// whileElement1();

function forFunction1() {
  let htmlEle = document.querySelector(`#loop`);
  let i = Number(prompt(`Loop Number`));
  for (i; i > -1; i--) {
    htmlEle.innerHTML += `count ${i} <br>`;
    console.log(`count ${i}`);
  }
  htmlEle.innerHTML += `finish`;
  console.log(`finish`);
}

// forFunction1();

function forFunction2() {
  let htmlEle = document.querySelector(`#loop`);
  for (i = 1; i < 1000; i *= 2) {
    htmlEle.innerHTML += `i = ${i} <br>`;
  }
  htmlEle.innerHTML += `Finish <br>`;
  htmlEle.innerHTML += `${i} <br> เป็นการใช้งานนอกขอบเขตเมื่อประกาศตัวแปรด้วย var แต่ i ยังแสดงผล`;
}

// forFunction2();

function forFunction3() {
  let htmlEle = document.querySelector(`#loop`);
  for (let i = 2; i < 13; i += 1) {
    htmlEle.innerHTML += `สูตรคูณ แม่ ${i} <br>`;
    for (let j = 1; j < 13; j += 1) {
      htmlEle.innerHTML += `${i} x ${j} = ${i * j} <br>`;
    }
    htmlEle.innerHTML += `<hr>`;
  }
}

// forFunction3();

function forFunction4() {
  let htmlEle = document.querySelector(`#loop`);
  let i;

  for (i = 1; i < 10; i += 1) {
    htmlEle.innerHTML += `round ${i} <br>`;
    if (i == 5) {
      break;
    }
  }
  htmlEle.innerHTML += `Finish @ 5`;
}

//forFunction4();

function showmessage1() {
  let htmlEle = document.querySelector(`#loop`);
  let i = 10,
    j = 0;
  while (i > j) {
    htmlEle.innerHTML += `ใส่ข้อความ ${i} <br>`;
    console.log(`${i}`);
    i -= 1;
  }
}

//showmessage1();

let user = `noi`;
function showMessage2() {
  let htmlEle = document.querySelector("#loop");
  let user = `intouch`;
  htmlEle.innerHTML += `my name is ${user}`;
}

// showMessage2();

function showName(name, age) {
  let htmlEle = document.querySelector(`#loop`);
  htmlEle.innerHTML += `my name is ${name}. I am ${age} year old <br>`;
}
// showName(`intouch`, 30);
// showName(user, user);

function showName2(name, age) {
  name = `* ${name} *`;
  age = "--" + age + "--";
  let htmlEle = document.querySelector(`#loop`);
  htmlEle.innerHTML = "my name " + name + ` age ` + age;
}
// showName2(`intouch`, 20);

let sayhi = function () {
  let htmlEle = document.querySelector(`#loop`);
  htmlEle.innerHTML = "say hi intouch <br>";
};

//console.log(sayhi());

let evenOdd = function (num) {
  return num === 0 ? `Zero` : num % 2 === 0 ? `even` : `Odd`;
};
let sayhi2 = function (say) {
  let htmlEle = document.querySelector(`#loop`);
  htmlEle.innerHTML = `${say}`;
};

//sayhi2(evenOdd(10));

// Callback Function
let showHtml = function (show) {
  let htmlEle = document.querySelector(`#loop`);
  htmlEle.innerHTML = `${show}`;
};
let showOk = function () {
  console.log(`yes`);
  return `Yes i am`;
};

let showCancel = function () {
  console.log(`no`);
  return `No i am not`;
};

let ask = function (question, answer1, answer2) {
  return confirm(question) ? answer1() : answer2();
};

// showHtml(ask(`Do you agree`, showOk, showCancel));

let showHtml2 = (show) => {
  let htmlEle = document.querySelector(`#loop`);
  htmlEle.innerHTML += `${show} <br> `;
  console.log(show);
};

let showOk2 = () => `yes ok 2 from show Html 2`;
let sum = (a, b) => a + b;

//showHtml2(showOk2());
//showHtml2(sum(5, 7));
