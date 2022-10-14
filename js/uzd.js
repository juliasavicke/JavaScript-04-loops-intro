"use strict";
console.log("uzd.js");

function uzd1() {
  for (let i = 2; i <= 10; i++) {
    if (i % 2 === 0) {
      console.log("i === ", i);
    }
  }
}

function getLaugh() {
  let laugh = "";
  for (let i = 0; i < 5; i++) {
    laugh = laugh + "ha";
  }
  console.log(laugh);
}

function uzd4() {
  let x = 9;
  while (x >= 1) {
    console.log("hello" + x);
    x = x - 1;
  }
  for (let i = 9; i >= 1; i--) {
    console.log("hello" + i);
  }
}

//uzd1(); // nuo 2 iki 10 lyginiai
//getLaugh(); // 'hahahahaha'
//uzd4(); //hello9 hello8...

function uzd7() {
  let i = 0;
  let htmlString = "";
  let listEl = document.getElementById("list");
  while (i < 11) {
    //ciklo body
    console.log(`<li>${i}</li>`);
    htmlString += `<li>${i}</li>`;
    //step
    i++;
  }
  console.log("htmlString ===", htmlString);
  listEl.innerHTML = htmlString;
}

//uzd7();

function uzd8() {
  let sk = 0;
  let i = 0;
  for (i = 0; i <= 160; i++) {
    if (i % 4 === 0) {
      sk++;
      //console.log(i);
    }
  }
  console.log(sk);
}
//uzd8();

function uzd9() {
  let myString = "";
  for (let i = -10; i <= 35; i++) {
    if (i === 35) {
      myString += `${i}.`;
    } else {
      myString += `${i}, `;
    }
  }
  console.log(myString);
}
//uzd9();

function uzd10() {
  let sum = 0;
  for (let i = 10; i <= 20; i++) {
    console.log(
      `Ciklas nr: ${i}. prie ${sum} pridedu ${i}. ir gaunu ${sum + i}`
    );
    sum = sum + i;
  }
  console.log("Galutinis rezultatas: ", sum);
}
//uzd10();

function uzd11(aukstis) {
  //let aukstis = 5;
  let eilute = "";
  for (let i = 1; i <= aukstis; i++) {
    eilute = " ".repeat(aukstis - i) + "+".repeat(i + i - 1);
    console.log(eilute);
  }
}
//uzd11(10);

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function uzd12() {
  let i = 0;
  let htmlString = "";
  let listEl = document.getElementById("list");
  while (i < 3) {
    //ciklo body

    let rnd = getRndInteger(2, 10);
    console.log(`<li>${rnd}</li>`);
    htmlString += `<li>${rnd}</li>`;
    //step
    i++;
  }
  console.log("htmlString ===", htmlString);
  listEl.innerHTML = htmlString;
}

//uzd12();

function uzd13() {
  for (let i = 12; i <= 24; i++) {
    console.log(i * 3);
  }
}

//uzd13();

function uzd14() {
  for (let i = 3; i <= 25; i++) {
    if (i % 2 === 0) {
      console.log("lyginis ", i);
    }
  }
}

//uzd14();

function uzd15() {
  for (let i = 3; i <= 25; i++) {
    if (i % 2 === 0) {
      console.log("lyginis ", i);
    } else if (i % 3 === 0) {
      console.log("3 kartotinis ", i);
    }
  }
}

//uzd15();

// Edabit =====================================

function edabit1(num) {
  console.log(num + 1);
  return num + 1;
}

//edabit1(4);

function edabit2(num1, num2) {
  console.log(num1 * num2);
  return num1 * num2;
}
//edabit2(3, 5);

function edabit3(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum = sum + i;
  }
  console.log("sum: ", sum);
  return sum;
}
//edabit3(3);

function edabit4(num) {
  let binary = toString(num);
  console.log("binary ===", binary);
}
//edabit4(5);
