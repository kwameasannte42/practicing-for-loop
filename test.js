//number 1
const myArray = [];
for (let i = 1; i <= 10; i++) {
    myArray.push(i)
}
console.log(myArray);

//number 2
const ourArray = [];
let i = 1;

while (i <= 10) {
  ourArray.push(i); i++;
}
console.log(ourArray);

//number 3
const thisArray = [];
for (let i = 11; i <= 21; i += 2) {
    thisArray.push(i);
}
console.log(thisArray);

//number 4
const lastArray = [];
for (let i = 15; i >= 1; i--) {
    lastArray.push(i)
}
console.log(lastArray);