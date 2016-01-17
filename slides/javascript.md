## Radical Javascript
{title:1}

## Rad · i · cal

> relating to the fundamental nature of something

## Our tools

- developer tools

```javascript
console.log("hello");
```

## Variables

```javascript
var x = "howdy";
var iAmUndefined; // please note: JS is camelCase
```

## Functions
{title:1}

<img src="slides-theme/img/eval-apply.jpg" style='width:476px; display:block; margin: 0 auto'>

## The root

<video width="475" height="352" controls>
  <source src="slides-theme/movies/spirit-of-the-computer.mp4" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'>
</video>

## A function

## Why so important?

##  

> Establishing new languages is a powerful strategy for controlling complexity in engineering design

## Two ways of defining

```javascript
function add(a, b) {
  return a + b;
}

var fn = function() {};
```
## Hoisting = great

```javascript

main(document.querySelector("#something"));

function main(el) {
  var val = otherThing(el);
}

function otherThing() {
  someHelper();

  // other details...
}

// more boring helpers...
```

## First-class

First class: use wherever you can use other values

## Callbacks

```javascript
setTimeout(callMeLater, 250, "from the past");

function greet(whereFrom) {
  console.log("greetings %s!", whereFrom);
}
```

## Closures

// functions are closures!

##  

<img src="/media/closures annotated.png">

## Context
{notitle:1}

We can see variables in functions that wrap us (red)

<img src="/media/closures annotated.png">

## Privacy
{notitle:1}

We can't see variables from inner functions (blue)

<img src="/media/closures annotated.png">

## `var` scope

`var` is scoped to closest enclosing function: that is the only rule.

Same with function definitions.


## Coding interview spoiler

```javascript
var elements = document.querySelectorAll("button");

// What is wrong here?
for(var i = 0; i < elements.length; i++) {
  var element = elements[i];
  element.addEventListener("click", function() {
    console.log(element.innerHTML);
  });
}
```

## Guru notes

```javascript
// you can return functions from functions!
var adder = createAdder();
adder(10); // 10
adder(5); // 15

function createAdder() {
  var n = 0;
  return function(m) {
    return n += m;
  }
} 
```


## Comparison

## Yes `==` has issues

So just use `===`

## The *ONE* time to use `==`

## JS loves nothing

```javascript
var a = null;
var b;

// two types of nothing!
```

## Data-structures
{title:1}

<img src="slides-theme/img/algorithms-datastructures.jpg"
     style='width:322px; display:block; margin: 0 auto'>

## Two types

## Ordered

- `Array`

## Array

## Key-value

## Objects, used as dictionaries

```javascript
var enToFr = {};

enToFr.hello = "bonjour";

console.log(enToFr["hello"]);
```

## Statements
{title:1}

## `if`

```javascript
var surprised = false;

if(surprised) {
  console.log("You are problably new to coding");
} else {
  console.log("Yay! If works as expected");
}
```

## `for`

```javascript

for(var i = 0; i < 10; i++) {
  console.log(i);
}

for(var el = document.querySelector("#deep");
    el.parentElement;
    el = el.parentElement) {
}

// quiz: what is el going to be?
```

## Objects
{title:1}

## Alan Kay

> I thought of objects being like biological cells or computers on a network, only able to communicate with messages

## In other words

Little units of code + data, that communicate to solve problem

## Bullet-proof objects in JS

##  

```javascript
var account = BankAccount(50);
account.deposit(5);
account.balance() // 5;

function BankAccount(balance) {
  var self = {};

  self.deposit = function(n) {
    if(balance + n < 0) {
      throw new Error("you don't have an overdraft!");
    }
    balance += n;
  }

  self.balance = function() {
    return balance;
  }

  return self;
}
```

## One way

Many ways to do objects in JS.


