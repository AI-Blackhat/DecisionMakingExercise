// 1a.
// let randomNum = Math.random (); // 0 through 0.99999
// randomNum *= 6; // 0 to 5.99999
// let randomNum = Math.floor((Math.random(*5))); // gets rid of decimal
// randomNum++;
// console.log(randomNum);

// or

// let randomNum = Math.floor((Math.random()*5)+1);
// console.log(randomNum);

// or long way
let randomNum = Math.random();
randomNum *= 5;
randomNum = Math.floor(randomNum);
randomNum++;
console.log(randomNum);

// 1b
// Note: ==== compares face value and data type
// Note: || is "or" The OR operator checks if at least one condition is true
if (randomNum >= 4) {
    console.log("Greater than or equal to 4");
}   else if (randomNum === 3 || randomNum === 2) {
        console.log("Equal to 2 or 3");
} else {
    console.log("Equal to 1");
}

// 1c

if (randomNum !== 3) {
    console.log("Not equal to 3");
}

// 1d
// The AND logical operator checks if both values are true
if (randomNum !== 3 && randomNum !==5){
    console.log("NOT equal to 3 AND not equal to 5");
}

// or
if (randomNum !== 3 && 5){
    console.log("NOT equal to 3 AND not equal to 5");
}

// 1e
if (randomNum === 2 || randomNum === 4) {
    console.log("Equal to 2 or equal to 4");
}

//BONUS
// 2
console.log(randomNum);
/*
if (randomNum >= 4) {
    console.log("Greater than or equal to 4");
} else {
    console.log("Less than 4");
}
*/

randomNum = (randomNum >= 4) ? "Greater than or equal to 4" : "Less than 4";
console.log(randomNum);

// or

randomNum >= 4 ? console.log("Greater than or equal to 4") : console.log("Less than 4");

// 3
// Switch Statement takes a parameter/argument and returns something based on the CASE (Or the match) that the parameter/argument goes with.
// In this example, if randomNum is 1, it will display "One" (String of One) in the terminal, if randomNum is 2 it will display "Two" (String of Two)

switch (randomNum) {
    case 1:
        console.log("One");
    break; // Break keywords are needed between each case so that the code for the case that follows does NOT also run
    case 2:
        console.log("Two");
    break;
    case 3:
        console.log("Three");
    break;
    case 4:
        console.log("Four");
    break;
    case 5:
        console.log("Five");
    // There is no need for a Break at the end of a switch statement since there are no other cases.
}
