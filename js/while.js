"use strict";
console.log("while.js");

//atspausdinti as esu while 10 kartu

function myWhile() {
  let i = 0;
  let htmlString = "";
  let listEl = document.getElementById("list");
  while (i < 11) {
    //ciklo body
    console.log(`<li>item ${i}</li>`);
    htmlString += `<li>item ${i}</li>`;
    //step
    i++;
  }
  console.log("htmlString ===", htmlString);
  listEl.innerHTML = htmlString;
  listEl.textContent = "laba diena";
}
//myWhile();

// atspausdinti skaicius nuo 14 iki 35
// atspausdinti skaicius nuo 0 iki 100 kas 3 skaiciu
// atspausdinti skaicius nuo 50 iki 24

function myWhile1() {
  console.groupCollapsed("myWhile1");
  let i = 14;
  while (i < 35) {
    //ciklo body
    console.log("as esu while1", i);
    //step
    i++;
  }
  console.groupEnd();
}
//myWhile1();

function myWhile2() {
  console.groupCollapsed("myWhile2");
  let i = 0;
  while (i < 100) {
    //ciklo body
    console.log("as esu while2", i);
    //step
    i = i + 3;
  }
  console.groupEnd();
}
//myWhile2();

function myWhile3() {
  let i = 50;
  console.groupCollapsed("myWhile3");
  while (i > 24) {
    //ciklo body
    console.log("as esu while3", i);
    //step
    i--;
  }
  console.groupEnd();
}
//myWhile3();

function myWhile4() {
  let i = 0;
  let cikluSkaicius = 0;
  console.group("myWhile4");
  while (i <= 100) {
    if (i % 3 === 0) {
      console.log(i);
    }
    i++;
    cikluSkaicius++;
  }
  console.groupEnd();
  console.log("ciklu: ", cikluSkaicius);
}
//myWhile4();

function doWhile() {
  let i = 15;
  do {
    console.log(i);
    i--;
  } while (i > 24);
}
//doWhile();
