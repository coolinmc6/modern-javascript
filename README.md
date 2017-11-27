<a name='top'></a>
# README

**Related Repositories:**

- [https://github.com/coolinmc6/advanced_javascript](https://github.com/coolinmc6/advanced_javascript)

**Section Links:**

1. [Advanced Concepts for Objects and Functions](#section-3)
1. [Think Like a Programmer: DRY Coding](#section-4)
1. [Working with Objects](#section-5)
    1. [ES6 Object Features](#es6-object-features)
1. [The Power of Functions](#section-6)
1. [Think Like a Programmer: Avoiding Globals](#section-7)
1. [The Power of Functions (Continued)](#section-8)
1. [Think Like a Programmer: The Module Pattern](#section-9)
1. [Working with Data: JavaScript Objects and JSON](#section-10)
1. [Think Like a Programmer: Approaches to Programming](#section-11)
1. [Object Oriented Programming in JavaScript](#section-12)
1. [Think Like a Programmer: Starting a Project](#section-13)
1. [Functional Programming Concepts in JavaScript](#section-15)

# Things to look up

1. `dir()`

<a name="section-3"></a>
# Advanced Concepts for Objects
- Functions are Objects
- The object is the fundamental datatype in JavaScript
- Everything except the Primitive datatypes are Objects
- Primitive Data Types:
  - Strings
  - Numbers
  - Booleans
  - Undefined
  - Null
  - Symbols (ES6)
- Strings, for example, use an object wrapper to allow you to use methods like `str.length`
- An Object is a collection of values
  - they could be properties, functions, etc.
- Because functions are objects, we can attach properties to functions just like any other object
- Functions have two internal properties: *Code* and *Call*
- `[[Code]]` is what holds the code
- `[[Call]]` allows you to call the method
- Function Declarations vs. Function Expressions

```js
// Function Expression
function bar() {
	return 3;
}

// Function Declaration
var bar = function() {
	return 3;
}
```
  - the main difference between these two is that function declarations are hoisted (like all variables
  in JavaScript), meaning that you can invoke the function before is has been defined
  - Function expressions are not hoisted

## Functions are Objects

```js
var report1 = function(val) {
	console.log(val);
};

// using the Constructor
var report2 = new Function("val", "console.log(val)");
```
- the above example above is important because it shows that functions are objects. We use `new` keyword when
creating new objects
- objects are passed around by reference; meaning that if you make a copy of an object, you are simply using
working with the reference to an object

```js
var object = {
	firstName: "Colin"
};

var object2 = object;
console.log(object2.firstName)  // Colin
object.firstName = "Steve";
console.log(object2.firstName)  // Steve
```
  - this is an example of copying by reference

## First Class Functions

```js
var sum = function(x, y) {
    return x + y;
}

var run = function(fn, a, b) {
    console.log(fn(a,b));
}

run(sum, 3, 4);

run(function(x,y) {
    return x * y
}, 5,7);
```
- being able to pass around functions is a very useful tool

## Invoking Functions	
- Four Ways to Invoke a Function:
  - as a function
  - as a method
  - as a constructor (new)
  - indirectly using `call()` and `apply()`
- the method in which you invoke a function will determine what `this` is equal to
- with EVERY function, two additional arguments are passed in: `this` and `arguments`
- you shouldn't rely on the `arguments` object (array-like object) because then others that are using
your code won't know what they are supposed to put into your function

## Creating JavaScript Objects
- Defining Functions:

```js
// Object Literal
var obj = {
	firstName: "Steven", 
	lastName: "Hancock"
}

// Object Constructor
var obj = new Object()
obj.firstName = "Steve";
obj.lastName = "Hancock";
```
- the Object Literal method is more popular but the constructor method is also possible
- You can delete a property from an object by: `delete obj.lastName`
- You can see if a property exists on an object: `"lastName" in obj` (returns true/false)
  - Also: `obj.hasOwnProperty("firstName")`

## Understanding this
- `this` is determined at runtime, when a function is invoked
- `this` is determined by HOW a function is invoked, not where the function is defined
- `this` is a reference to an object
  - it will **ALWAYS** be an object
- `this` is not the function; though establihsed when the function is invoked, it is not the function
- the binding of a value to `this` (this binding) can be implicit (set by JS engine) or explicit
(set by you)

## Examining this with Normal Function Invocation
- it doesn't matter where the function is declared, it matters how it was invoked
- when you invoke a normal function, the bind for this is the global object
- 

## Normal Function Invocation Using Strict Mode
- in strict mode, the global object is not available for binding
- that means that `this` will not be bound to window in the browser and `this` is set to undefined

## Examining this with Method Invocation

## Understanding Prototypes

## Understanding the Prototype of Functions

## Using call and apply Function Methods
- the `call()` method => first argument sets the value of `this`, all additional 
arguments are all the additional arguments
- using the call method, all additional arguments are just comma separated
- using `apply()`, the first argument is the object that becomes the value of
`this` and the second argument is an array with all of your arguments

## Using the bind Function Method
- bind is used to determine the value of `this` but bind creates a new function and
already has `this` bound to a particular object
- `var func = function.bind(this, arg1, arg2)`
- `bind` returns a new function

```js
var morningGreet = greeting.bind(user1, "Good Morning");
morningGreet("!");
```
- with `bind()`, we are attaching the user1 object and the term, "Good Morning". Now
we can call `morningGreet()` with the punctuation only
- that bind cannot be overwritten with `call()`. So `morningGreet.call(user2, "!")` won't
overwrite user1 as the object
- 

## Invoking Functions as Constructors: The Magic of new
- The fourth method of invoking functions that is invoking functions using *new*
- a constructor is just a function that is invoked using *new*
- a constructor returns an object
- the purpose of constructors is to create multiple similar objects
- the returned objects share the same prototype which comes from the constructor
- capitalizing the function name indicates that it should be used as a constructor

```js
var Greeting = function() {

};

var greet1 = new Greeting();

var greet2 = new Greeting();

console.log(greet1 == greet2);              // false
console.log(greet1 instanceof Greeting);    // true
```

## Constructor Invocation and the Value of this
- constructor functions should be capitalized



## Higher Order Functions, Callbacks and the Problem with this

## Arrow Functions



[back to top](#top)
<a name="section-4"></a>	
# Think Like a Programmer: DRY Coding

## Abstraction and DRY Coding

```js
var executeWait = function(funct, wait) {
  var timeout, 
      callNow = true;

  return function() {
    var thisVal = this,
        args = arguments;

    var later = function() {
      callNow = true;
    };
    if(callNow) {
      callNow = false;
      funct.aply(thisVal, args);
      timeout = setTimeout(later, wait);
    }
  };
};
```


[back to top](#top)
<a name="section-5"></a>
# Working with Objects

## Working with Objects Introduction
- detecting object properties
- working with property attributes
- ES6 Additions

## Detecting Properties on Objects
- `in`

```js
// in
if("name" in person1) {}

//hasOwnProperty();
if(person1.hasOwnProperty("name")){}

// Object.keys(object);
var properties = Object.keys(person1);
properties; // Array of properties: firstName, lastName, email, etc.; no proto props/methods
```

- Iterating through an object:

```js
for(var prop in person1) {
  console.log("Property Name: " + prop);
  console.log("Value: " + person1[prop]);
}
```

- `person1.propertyIsEnumerable("firstName"); // true`
- `person1.propertyIsEnumerable("toString")  // false;`

## Changing Property Attributes
- by default, properties are enumerable

```js
// prevent object property from being enumerable
// arg1 = the object itself; arg2 = the particular property; arg3 = attribute to change
Object.defineProperty(obj, "type", {enumerable: false})

// prevent object property from being deleted
Object.defineProperty(obj, "type", {configurable: false})
```
- the arguments are: the object, the property to change, and an object that contains the attribute
and the value

## Making Objects Immutable
- immutable => unable to change
- By default, objects are mutable
- Three things that allow us to make an object immutable:
  - writable attribute of properties
  - sealing an object => can't add or delete properties but properties' values can be changed
  - freezing an object => combo of first two

```js

"use strict";

var obj = {
    firstName: "Steven", 
    lastName: "Smith", 
    startDate: "January 10, 2015",
    type: "admin"
};

Object.defineProperty(obj, "startDate", {
    writable: false
});

obj.firstName = "Steve";

obj.startDate = "January 5, 2016";

console.log(obj);
```
- without `"use strict"` we won't get an error but the `startDate` property will NOT be changed

```js
"use strict";

var obj = {
    firstName: "Steven", 
    lastName: "Smith", 
    startDate: "January 10, 2015",
    type: "admin"
};

Object.seal(obj)

// FAIL => cannot add property to sealed object
obj.newProp = true;

// FAIL => cannot delete property to sealed object
delete obj.type;

// SUCCESS => we CAN change properties, though
obj.firstName = "Colin";

console.log(obj);
```
- we cannot add a new property or delete one to a sealed object
- Both throw an error if `"use strict"` is on
- with `Object.freeze(obj)`, we cannot change the object at all

[back to top](#top)
<a name="es6-object-features"></a>
## ES6 Object Features
- Object Literal Extensions
- Object Static Functions
  - Object.setPrototypeOf();
  - Object.assign();
- *Concise Properties* allow us to avoid double typing. If we have a variable whose name is the same
as the property that we are adding to our object, we don't need the colon and variable name at the end

```js
var multiple = 5;

var obj1 = {
    start: 1, 
    end: 100,
    multiple: multiple
};

// ES6
var obj2 = {
    start: 1, 
    end: 1000, 
    multiple
}
```
- *Concise Methods* allows us to drop the `: function`, we can just put the function name then parens

```js
var obj1 = {
    firstName: "Steven",
    lastName: "Smith", 
    fullName: function() {
        console.log(this.firstName + " " + this.lastName);
    }
};

// ES6
var obj1 = {
    firstName: "Steven",
    lastName: "Smith", 
    fullName() {
        console.log(this.firstName + " " + this.lastName);
    }
};
```
- this is another way of setting the prototype of an object

```js
var objProto = {
    fullName() {
        console.log(this.firstName + " " + this.lastName)
    }
};

var obj = {
    firstName: "Steven", 
    lastName: "Smith"
};

Object.setPrototypeOf(obj, objProto);
```
- if we wanted one object to have all the properties of several other objects, we can do the following:

```js
var obj = {
    start: 0
};

var obj1 = {
    a: 5
};

var obj2 = {
    b: 10
};

var obj3 = {
    c: 15
};

Object.assign(obj, obj1, obj2, obj3);
```

[back to top](#top)
<a name="section-6"></a>
# The Power of Functions

## Immediately Invoked Function Expressions (IIFEs)

## Review of Scope

## Understanding Closure


[back to top](#top)
<a name="section-7"></a>
# Think Like a Programmer: Avoiding Globals

## Avoiding Global Variables

## Using the Namespace Pattern

[back to top](#top)
<a name="section-8"></a>
# The Power of Functions (Continued)



[back to top](#top)
<a name="section-9"></a>
# Think Like a Programmer: The Module Pattern

## The Module Pattern Part 1

## The Module Pattern Part 2

## The Module Pattern Part 3

## The Module Pattern Part 4


[back to top](#top)
<a name="section-10"></a>
# Working with Data: JavaScript Objects and JSON

## Introduction to Working With Data

## JSON Basics

## Creating a JSON File

## Loading a JSON File Using XMLHttpRequest

## Testing on a Server


[back to top](#top)
<a name="section-11"></a>
# Think Like a Programmer: Approaches to Programming

## Approaches to Programming


[back to top](#top)
<a name="section-12"></a>
# Object Oriented Programming in JavaScript

## Introduction to Object Oriented Programming

## OOP Theory

## The Constructor Property

## Project: Applying OOP Part 1

## Project: Applying OOP Part 2

## Project: Applying OOP Part 3

## Project: Applying OOP Part 4

## Project: Applying OOP Part 5

## Project: Applying OOP Part 6

## Project: Applying OOP Part 7

## Project: Applying OOP Part 8

## Project: Applying OOP Part 9

## Project: Applying OOP Part 10

## Project: Applying OOP Part 11

## Enumerating Objects with the for in Loop

## Private Data in Constructors

## Creating Safe Constructors

## Can I Modify the Built-in Prototypes

## What About ES6 Classes?



[back to top](#top)
<a name="section-13"></a>
# Think Like a Programmer: Starting a Project

## Starting a Project



[back to top](#top)
<a name="section-15"></a>
# Functional Programming Concepts in JavaScript


