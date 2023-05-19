console.log("%cHello, world", "color: blue; font-size: 40px");

var petDog = "Rex";
var petCat = "Pepper";
console.log(petDog);
console.log(petCat);

console.log("My pet dog's name is:", petDog);

console.log("My pet cat's name is:", petCat);

var catSound = "purr";
var dogSound = "woof";

console.log(petDog, "says", dogSound);

console.log(petCat, "says", catSound);

catSound = "meow";
console.log(petCat, "now says", catSound);

var score = 7;
console.log("Mid-level skills:", score > 0 && score < 10);

var num1 = 2;
var num2 = 5;
var test1 = num1 % 2;
var test2 = num2 % 2;
var result1 = test1 == 0;
var result2 = test2 == 0;
console.log("Is", num1, "an even number?", result1);
console.log("Is", num2, "an even number?", result2);

var now = "Now in ";
var three = 3;
var d = "D!";
console.log(now + three + d);

var counter = 0;
counter += 5;
counter += 3;
console.log(counter);

// Ejercicio condicionales
// Es lo suficiente mayor?
var age = 10;
if (age >= 65) {
  console.log("You get your income from your pension");
} else if (age < 65 && age >= 18) {
  console.log("Each month you get a salary");
} else if (age < 18) {
  console.log("You get an allowance");
} else {
  console.log("The value of the age variable is not numerical");
}

// Días de la semana.
var day = `Sunday`;
switch (day) {
  case "Monday":
    console.log("Read a book");
    break;
  case "Tuesday":
    console.log("Watch a movie");
    break;
  case "Wednesday":
    console.log("Read a book");
    break;
  case "Thursday":
    console.log("Play basketball");
    break;
  case "Friday":
    console.log("Socialize");
    break;
  case "Saturday":
    console.log("Chill");
    break;
  case "Sunday":
    console.log("Have barbecue");
    break;
  default:
    console.log("There is no such day");
}

// Ejercicios con bucles
// Tarea 1
for (let i = 1; i<=5; i++){
  console.log(i);
}
console.log('Counting completed!');

// Tarea 2
for (let i = 5; i >=1; i--){
  console.log(i);
}
console.log('Countdown finished!');

// Tarea 3
let i = 1;
while (i<=5){
  console.log(i);
  i++;
}
console.log('Couting complete!');

// Tarea 4
i = 5;
while (i>=1){
  console.log(i);
  i -= 1;
}
console.log('Countdown finished!');

// Tarea 5
year = 2018;
while (year<=2022){
  console.log(year);
  year += 1;
}

