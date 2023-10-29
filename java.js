
// Section 1

let rectangularH = 23
let rectangularW = 20

let result = rectangularH * rectangularW
console.log(`The area of the rectangle is: ${result} `)

//  Section 2

let celsius = 21;

let F = celsius * 1.8 + 32;

let C = (F-32) * 5/9

console.log(`The dgree in celsuis is ${celsius}
The dgree in Fahrenheit is ${F}
The dgree in celsius again is ${C}`);


// Section 3

let hour = 6;
let sec = hour * 3600;

console.log(`${hour} hours = ${sec} Seconds`);

// Section 4

let grade = 75;

if (grade >= 95){
    console.log("Your Grade is A+");
}else if (grade >= 90){
    console.log("Your Grade is A");
}else if (grade >= 85){
    console.log("Your Grade is B+");
}else if (grade >= 80){
    console.log("Your Grade is B");
}else if (grade >= 75){
    console.log("Your Grade is C+");
}else if (grade >= 70){
    console.log("Your Grade is C");
}else if (grade >= 65){
    console.log("Your Grade is D+");
}else if (grade >= 60){
    console.log("Your Grade is D");
}else {
    console.log("You Have failed");
}

