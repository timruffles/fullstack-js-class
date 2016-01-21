"use strict";


// Here's some example notes

// I can use console to output things
console.log("This is the console - I can output strings here!");

console.log("I can use '%s' to write complex messages easily", "placeholders");

console.log({
  even: "objects",
  can: [
    "be logged",
    "and I can dynamically inspect them in the Javascript console!",
  ],
});

// only runs in non-strict mode
//
// someVariable = "hello";
// console.log(window.someVariable + " is a global");


// in strict mode, globals are explicit
window.globalVariable = "yes";


var someVariable = "in camelcase"; // not in snake_case PascalCase

var hello;

// string version of undefined = 'undefined'
console.log(hello + " <- should be undefined");

// logging a variable directly pretty-prints it
console.log(hello);

console.log(add(10, 5) , "has worked before definition due to hoisting");


console.log(greeting, "expect to see 'error not declared!");
var greeting = "hi";

function add(a,b) {
  return a+ b;
}


// demo of function hoisting
main();

try {
  insideFunction();
} catch(e) {
  console.log("should fail - as we can't see the inside function: " + e);
}

function main() {

  console.log("calling main should work - due to hoisting");
  
  function insideFunction() {
    
  }
  
}


// closures

var accountOne = bankAccount(100);
var accountTwo = bankAccount(50);

// two separate versions of the 'newAccount' function
console.log("balances: ", accountOne("balance"), accountTwo("balance"));

accountOne("deposit", 15);
accountTwo("deposit", -15);
console.log("balances: ", accountOne("balance"), accountTwo("balance"));

try {
  accountTwo("withdraw", -15);
} catch(e) {
  console.error("expected a method missing: " + e);
}

function bankAccount(balance) {
  // ^^scope^^ = { balance: 100 } (just for inituition - this is what the interpreter does for us)
  //
  return newAccount;
    
  function newAccount(message, param) {
    switch(message) {
      case "balance": return balance;
      case "deposit": return balance += param;
      default:
        throw new Error("MethodMissing:" + message);
    }
  }
}


closureDemo();

function closureDemo() {
  // INTERPRETER ONLY INTUITION
  // var element;
  // var elements;
  // var i;
  // ^^scope^^ = { element: undefined }
  // END INTERPRETER ONLY INTUITION
  
  // closure demo
  console.log('closure challenge');

  var elements = document.querySelectorAll("button");

  for(var i = 0; i < elements.length; i++) {
    var element = elements[i];

    // we create a new function each time, BUT
    // they refer to the SAME enclosing scope (the invocation of closureDemo)
    addEventListener(element, "click", function broken() {
      console.log("You clicked button: " + element.innerHTML);
    });

    var newHelper = helper(element, i);
    addEventListener(element, "click", newHelper); /* same as , helper(element, i) */
    addEventListener(element, "click", helper(element, i));
  }

  function helper(el, i) {
     console.log("helper called with", el, i);
     return function innerFunction() {
      console.log("You clicked button: ",  el.innerHTML, "at index", i);
     }
  }

  // ^^scope^^ = { i: 5, element: elements[4] }
}

function addEventListener(el, evt, fn) {
  el.addEventListener(evt, function() {
    fn();    
  });
}


// comparison


var isTrueDoubleEqualToOne = 1 == true;
var isFalseDoubleEqualToOne = 1 == false;
console.log(isTrueDoubleEqualToOne, isFalseDoubleEqualToOne);

var emptyArray = [] == false;
var emptyString = "" == false;
console.log(emptyArray, emptyString);

// O(N)
var longString = "\t\t\t\t\t\t\t\t     \r\r\r\r\r\r   " == false;
console.log(longString);

var tripleEqualOneTrue = 1 === true;

console.log("undefinedEqeqeqNull", null === undefined);
console.log("undefinedEqeqNull", null == undefined);

withOptional(null);

function withOptional(arg) {
  // annoying and long
  if(arg === null || arg === undefined) {
    console.log("eqeqeq empty");
  }
  if(arg == null) {
    console.log("eqeq null");
  }
}

console.log("comparison of objects - always identity", {} == {});
console.log("comparison of arrays - always identity", [] == []);
console.log("comparison of structured objects - can JSONify", 
  JSON.stringify([]) === JSON.stringify([]));


//
// ARRAYS
//

var aList = [1,2,3,4,5,5];

aList[5];
aList[Infinity]; // undefined

aList.slice(1) // return a new array

// stacks/queues
var queue = [];
queue.push(1); // [1]
queue.pop(1);  // 1, queue now = []


// ES5 array additions
var users = [
  {name: "amy", views: 10},
  {name: "bob", views: 5},
  {name: "sue", views: 3},
];

// TASK: pick out all users' names
var names = [];
for(var i = 0; i < users.length; i++) {
  var user = users[i];
  names.push(user.name);
};

var mappedNames = users.map(function(user) {
  return user.name; 
});
var mappedNames = users.map((user) => user.name)

// frequent visitors
var frequent = users.filter(function(user) {
  return user.views > 4; 
});

// reduce / fold
var totalViews = users.reduce(function(sum, user) {
  return sum + user.views;
}, 0);

// ARRAY AKA list in python
//
var englishList = ["cheese","mushrooms","eggs"];


function asEnglishList(xs) {
  switch(xs.length) {
  case 0: return ""
  case 1: return xs[0];
  default: return xs.splice(xs.length - 2).join(", ")
     + " and " + xs[xs.length - 1]
  }
}


//
// KEY-value - dict
//

var plainObjectMap = {};

var anArray = [1,2,3];
plainObjectMap[anArray] = 1;

var myMap = new Map;
myMap.set("a", 1);
myMap.set("b", 2);
console.log("Map real dictionary, size:", myMap.size);
myMap.set(anArray, 1);
myMap.set([1,2,3], 2);

console.log("two different arrays, same string rep ", 
    myMap.get(anArray),
    myMap.get([1,2,3]));
























































