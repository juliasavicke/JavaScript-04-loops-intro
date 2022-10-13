"use strict";
console.log("break.js");

//break;

//continue;

// for (let i = 0; i < 20; i++) {
//   console.log(i);
//   if (i === 9) {
//     break;
//   }
// }
//debugger;
for (let i = 0; i < 20; i++) {
  if (i === 4 || i === 15 || i === 17) {
    continue;
  }
  console.log(i);
}
