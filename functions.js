//  #1  Declare Two Variables
var a = 1;
var b = 1;

//**  #2 Function - add
function add (number1, number2){
  return number1 + number2;
}
var sum = add(a,b);
console.log(sum);

//*#3 Function -
function subtract (number1,number2){
  return number1 - number2;
}
var difference = subtract(a,b);
console.log(difference);
//*  #4
 function multiply (number1,number2){
  return number1 * number2;
 }
 var product = multiply (a,b);
 console.log(product);
//* #5 Function - checkDifference
function checkDifference(number){
  var result = "My football team lost " + number + " times this week.";
  return result;
}
checkDifference();
console.log(checkDifference(difference));

//**  #6 Function - checkSum
function checkSum(number){
  return "I can add:" + number + "numbers";
}
  var result = "I CAN ADDZ " + number + " NUMBERS";
  return result;
}
console.log(checkSum(sum));

/*#7 Function - checkProduct

 *  This function checks the value stored at `product` and
 *  multiplies it by the number stored at `difference` and
 *  then prints the result to the console.
 */
//option 1 scenic route
function checkProduct(number1, number2){
  var result = number1 * number2;
  return result;

}
checkProduct();
console.log('product x difference = ', checkProduct(product, difference));

//option 2 shorter route
function checkProduct(){
  return product * difference;
}
checkProduct();

checkProduct();
console.log('product x difference = ', checkProduct());

/**
 *  #8
 *  Function - addThenSubtract
 *
 *  This function takes three `Number` arguments named by you,
 *  then adds the first two arguments together.
 *  Then with the sum of that operation, subtract
 *  the value at the third argument. _This function should
 *  make use of your previous functions_.
 *
 *  **example:**
 *      addThenSubtract(4, 5, 7); //-> returns 2 because 4 + 5 - 7 = 2
 */
var c = 3;
function addThenSubtract(number1, number2, number3){
  var addUp = number1 + number2;
  var minus = addUp - number3;
  return minus;

}
addThenSubtract();
console.log('addThenSubtract 3 numbers = ', addThenSubtract(a, b, c));

//or pass in your own number values:
console.log('addThenSubtract 3 numbers = ', addThenSubtract(88, 7, 3));

/**
 *  #9
 *  Function - addThenMultiply
 *
 *  This function takes three `Number` arguments named by you,
 *  then adds the first two arguments together.
 *  Then with the sum of that operation multiply it by the third argument.
 *  _This function also should make use of your previous functions_.
 *
 *  Store the return of this function to a variable named `howMany`
 */

function addThenMultiply(number1, number2, number3){
  var addUp = number1 + number2;
  var multiply = addUp * number3;
  return multiply;
}
addThenMultiply();
var howMany = addThenMultiply(a,b,c);
console.log("howMany", howMany);
//or pass in your own numbers
var howMany = addThenMultiply(1,3,2);
console.log("howMany", howMany);

/**
 *  #10
 *  Function - createFullName
 *
 *  @param Datatype: String firstName
 *  @param Datatype: String lastName
 *  @return Datatype: String
 *
 * This function takes two String arguments `firstName` and `lastName`.
 * This function `returns` back a string which represents someone's full name.
 *
 * Call this function and pass your first and last name into it.
 * Store the return value to a variable named `myFullName`
 */

function createFullName(firstName, lastName){
  var result = firstName + " " + lastName;
  return result;
}
createFullName();

var myFullName = createFullName("Grace", "Hopper");
console.log("The person who coined the term debugging is", myFullName);
/**
 *  #11
 *  Function - verifyDrinkingAge
 *
 *  @param Datatype: Number age
 *  @return Datatype: Boolean
 *
 *  This function takes one Number argument `age`.
 *  This function returns the `Boolean` value `true` or `false` if `age` is
 *  lower than the legal drinking age in the state of Hawaii.
 *
 *  **Call this function and pass in a number value.
 *  Store the return value to a variable named** `canDrinkBeer`
 */

function verifyDrinkingAge(age){
  if(age >= 21){
    return true;
  }else{
    return false;
  }
}
verifyDrinkingAge();
var canDrinkBeer = verifyDrinkingAge(101);
console.log('Can I have a swig of that drink?', canDrinkBeer);


/**
 *  #12
 *  Function - throwParty
 *
 *  This function checks the value stored at the `canDrinkBeer` variable and
 *  if the value is `false` it should print to a message to the screen,
 *  "The Party will have tons of Cake!" otherwise this message
 *  should be "This Party will have an open bar".
 */

//option 1 
function throwParty(drinkUp){
  if(drinkUp === false){
    return "The Party will have tones of Cake!";
  }else{
    return "This party will have an open bar";
  }
}
throwParty();
console.log(throwParty(canDrinkBeer));

//option 2
function throwParty(){
  if(canDrinkBeer === false){
    return "The Party will have tones of Cake!";
  }else{
    return "This party will have an open bar";
  }
}
throwParty();
console.log(throwParty());

/**
 *  #13
 *  Function - eatFood
 *
 *  This function takes 3 arguments
 *  `firstName`, `lastName`, `food` and prints out a message to your screen.
 *  Internally this function will make use of the `createFullName`
 *  function you created earlier.
 *
 *  **example input:**
 *      if someone called your program like this `eatFood( "John", "Papa", "Pizza" )`
 *  **example output:**
 *     "John Papa loves to eat Pizza"
 *
 *  **example input:**
 *      if someone called your program like this `eatFood( "Peter", "Bojangles", "California Burritos" )`
  *  **example output:**
 *      "Peter Bojanglesloves loves to eat California Burritos"
 */
//option 1 scenic route
function eatFood(firstName, lastName, food){
  var person = firstName + " " + lastName;
  var result = person + " loves to eat " + food;
  return result;
}
eatFood();
console.log(eatFood("Biggie", "Smalls", "Spam Musubis"));

//option 2 shorter route
function eatFood(firstName, lastName, food){
  return firstName + " " + lastName + " loves to eat " + food;
}
eatFood();
console.log(eatFood("David", "Ige", "Chicken Katsu"));

/**
 *  #14
 *  Function - repeater
 *
 *  This function will return a string to that repeats one of the phrases
 *  below `X` amount of times, where `X` is the value stored at `howMany`.
 *  Inside of this function it will check if
 *  the value of `canDrinkBeer`, if the value is true
 *  the message will be `"Bacon Pancakes, makin' Bacon Pancakes..."`
 *  othewise the message will be `"Let it go.... LET IT GOOOOOOoOoOoOo..."`
 */

function repeater(number, drinkUp){
  for (var i = 0; i<number; i++){
    if(drinkUp === true){
      console.log("Bacon Pancakes, makin' Bacon Pancakes");
    }else{
      console.log("Let it go... LET IT GOOOOOOoOoOoOo...");
    }
  }
}
repeater(howMany, canDrinkBeer);
