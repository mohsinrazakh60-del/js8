//Chapter 25-30

//Question1:
var num = 7.45939
console.log(num);
console.log(Math.round(num));
console.log(Math.ceil(num));
console.log(Math.floor(num));

//Question2:
var num = -6.92384
console.log(num);
console.log(Math.round(num));
console.log(Math.ceil(num));
console.log(Math.floor(num));

//Question3:
var number = -43
console.log(parseFloat(number))

//Question4:
var dice = Math.round(Math.random() * 6)
console.log(dice)

//Question5:
var toss = Math.round(Math.random() * 2)
if (toss == 1) {
    console.log("head")
}else{
    console.log("tail")
}

//Question6:
var ran = Math.round(Math.random() * 100)
console.log(ran)

//Question6:
var weight = +prompt("Enter your weight in kilograms")
console.log(weight,"kgs")

//Question8:
var secretNum = Math.round(Math.random() * 10);
var userNum = +prompt("Guess the number betwwen 1 to 10");
if (userNum == secretNum) {
    alert("Bingo, Answer is correct!")
}else if (userNum + 1 == secretNum || userNum - 1 == secretNum ) {
    alert("Close enough to correct number")
}else {
    alert("Wrong")
}