"use strict";
console.log("for.js");

function myFor() {
  for (let i = 0; i <= 10; i++) {
    console.log(i);
  }
}

function myFor1() {
  for (let i = 14; i <= 35; i++) {
    console.log(i);
  }
}

//myFor1();

function myFor2() {
  for (let i = 0; i <= 100; i = i + 3) {
    console.log(i);
  }
}

//myFor2();

function myFor3() {
  for (let i = 50; i > 24; i--) {
    console.log(i);
  }
}

//myFor3();

function myFor4() {
  for (let i = 0; i <= 15; i++) {
    let rez = Math.floor(Math.random() * 10) + 1;
    console.log(i, rez);
  }
}
//myFor4();

function myFor4() {
  let rezSum = "";
  for (let i = 0; i <= 15; i++) {
    let rez = Math.floor(Math.random() * 10) + 1;
    console.log(i, rez);
    rezSum = Number(rezSum) + Number(rez);
    console.log("rezSum ===", rezSum);
  }
  let avg = rezSum / 15;
  console.log("avg ===", avg);
}
//myFor4();

function myFor5() {
  for (let i = 47; i <= 68; i++) {
    if (i % 2 === 0) {
      console.log("i ===", i);
    }
  }
}
//myFor5();

function myFor6() {
  let rezSum = "";
  for (let i = 0; i <= 10; i++) {
    rezSum = Number(rezSum) + Number(i);
    console.log("rezSum ===", rezSum);
  }
}
//myFor6();

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function myFor7() {
  for (let i = 0; i <= 15; i++) {
    let rez = getRndInteger(2, 12);
    console.log(i, rez);
  }
}
//myFor7();

function myWhile8() {
  let i = 0;
  let rez = "";
  while (rez != 12) {
    //ciklo body
    console.log("i === ", i);
    //step
    rez = getRndInteger(2, 12);
    console.log("rez === ", rez);
    i++;
  }

  console.log("i galutinis === ", i);
}
//myWhile8();

function myWhile9() {
  let i = 0;
  let rez = "";
  while (rez < 6) {
    //ciklo body
    console.log("i === ", i);
    //step
    rez = getRndInteger(2, 12);
    console.log("rez === ", rez);
    i++;
  }

  console.log("i galutinis === ", i);
}
//myWhile9();
