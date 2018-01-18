<a name='top'></a>
# README

**Next Steps**
- Redo Section 12 with notes (OOP in JS) => complete all exercises and follow along, take notes
- Revisit the Module Pattern (Section 9)
  + get notes and understand the basics of the module pattern
  + complete exercises
  + create your own module and understand it
+ Complete Closure and Namespace exercises (Section 8)
+ Wrap-up remaining exercises

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

## First Class Functions (L9)

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

## Invoking Functions	(L10)
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

## Invoking Functions as Constructors: The Magic of new (L20)
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

## Arrow Functions (L23)

## Quiz 1:
- first-class functions => functions are treated as values and can be assigned to variables and
passed around
- function expressions are NOT hoisted
- Object properties can many data types, like: Strings, Numbers, Functions, Objects, Arrays
- you can use `in` and `hasOwnProperty` to determine if a property exists in an object
- JavaScript objects have access to properties and methods that exist in the object's prototype chain
- `call()` takes arguments as just a list of arguments while `apply()` takes an array of arguments
- the `bind()` function returns a function
- use a constructor if you want to create multiple, similar objects


[back to top](#top)
<a name="section-4"></a>	
# Think Like a Programmer: DRY Coding

## Abstraction and DRY Coding (L25)

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

## Detecting Properties on Objects (L28)
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

## Immediately Invoked Function Expressions (IIFEs) (L33)
- IIFE's are used in almost every framework

```js
// Function Declaration
function powerDecl(num) {
  console.log(num * num);
}

// Function Expression
var powerExp = function(num) {
  console.log(num * num);
}

powerDecl(2)

powerExp(2)
```
- function expressions give more flexibility

```js

// We can also immediately invoke a function expression:
// Function Expression
var powerExp = function(num) {
  console.log(num * num);
}(2);

// Or for a Function Declaration
(function powerDecl(num) {
  console.log(num * num);
}(2))

// IIFE with anonymous function
(function (num) {
  console.log(num * num);
}(2))
```
- if you only need a function once, here is an example of a quick IIFE:

```js
var sum = function (a,b) {
    return a + b;
}(1,2);

var square = function(a) {
    return a * a;
}(sum);

(function(print) {
    console.log(print)
}(square));
```


## Review of Scope
- Scope can be defined as a set of rules that determine where identifiers (variables, functions etc) 
are accessible within your code.
- globally scoped identifiers should be avoided
- When JavaScript encounters an indentifier, it searches in the enclosing function for that identifier.
If it's not there, it continues up the *scope chain* until the global scope. If not in global scope, it
throws an error
- One exception to functional scope is when variables are declared with the keyword `let`. 
`let` creates block scope.

## Understanding Closure (L35)
- a closure is the local variables for a function - kept alive after the function has returned
- Closure is when a function is able to remember and access its lexical scope even when that function
is executing outside its lexical scope
- A closure is a function having access to the parent scope, even after the parent function has closed 

[back to top](#top)
<a name="section-7"></a>
# Think Like a Programmer: Avoiding Globals

## Avoiding Global Variables (L36)
- **The Problem with Global Variables**
  - global variables can be changed anywhere
  - global variables pollute the global namespace shared by everyone. This can cause collisions
  - Reliance on global variables avoids better programming patterns

## Using the Namespace Pattern (L37)
- JavaScript doesn't yet have support for namespacing
- setting up a namespace involves setting up one global object that contains all the variables and
functions associated with a particular page, functionality, etc.
- In the example below, we have some code with many global variables and functions:

```js
// PRE-Namespacing
// notice the global variables and functions
var prompt = "Welcome,",
    prompt2 = "How are you?",
    prompt3 = "Good to see you again.",
    counter = 0,
    users = [];

var greeting = function(user){
    var greeting = prompt + " ";
    if (newUser(user)) {
        greeting += prompt2;
    } else {
        greeting += prompt3;
    }
    console.log(greeting);
    counter++;
};

var newUser = function(user) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].toUpperCase() === user.toUpperCase()) {
            return false;
        }
    }
    addUser(user);
    return true;
};

var addUser = function(user) {
    users.push(user);
};

var numberOfGreetings = function() {
    console.log("Total number of greetings: " + counter);
};
```
- Here is how we fix that:

```js
// POST Namespacing

// creates a global object OR sets it equal the existing MYAPP object
var MYAPP = MYAPP || {};

// we wrap the entire block of code in an IIFE that takes one variable, our global object MYAPP
// we pass MYAPP into this IIFE down below
(function(namespace) {

  // these variables are NOT placed onto the MYAPP object - they become somewhat like a private
  // property meaning that the internal methods have access BUT not outside this IIFE
  // So we couldn't do: MYAPP.prompt and expect to see it
  var prompt = "Welcome,",
      prompt2 = "How are you?",
      prompt3 = "Good to see you again.",
      counter = 0,
      users = [];

  // We DO add greeting to the MYAPP object using dot notation
  namespace.greeting = function(user){
      var greeting = prompt + " ";
      if (newUser(user)) {
          greeting += prompt2;
      } else {
          greeting += prompt3;
      }
      console.log(greeting);
      counter++;
  };

  // newUser is a essentially a "private" method here
  var newUser = function(user) {
      for (let i = 0; i < users.length; i++) {
          if (users[i].toUpperCase() === user.toUpperCase()) {
              return false;
          }
      }

      // Remember - we are referencing the function on the namespace object, namespace.addUser
      namespace.addUser(user);
      return true;
  };

  // addUser is now on the global MYAPP object
  namespace.addUser = function(user) {
      users.push(user);
  };

  // numberOfGreetings is now on the global MYAPP object
  namespace.numberOfGreetings = function() {
      console.log("Total number of greetings: " + counter);
  };
})(MYAPP); // this is where we pass MYAPP into our IIFE
```



[back to top](#top)
<a name="section-8"></a>
# The Power of Functions (Continued)

## Exercise 4: Closure Exercise
- to complete the exercise WITHOUT global variables means that we must enclose our code
in an IIFE

```js
// IIFE Structure
(function() {

})();
```
- this is what I ultimately came up with:

```js

(function() {
  var elem = document.querySelector('#logo');

  var clicked = false;

  elem.addEventListener('click', function() {
    if(!clicked) {
      console.log('this is the first time youve clicked on this')
      clicked = true;
    } else {
      console.log('You have already clicked on this');
    }
  })  
})();
```
- Avoiding globals seems to be as easy as just wrapping it in an IIFE.

## Exercise 5: Namespace Pattern Exercise



[back to top](#top)
<a name="section-9"></a>
# Think Like a Programmer: The Module Pattern
- a module is a chunk of code that handles a discrete set of tasks
- most everything created in Node is built by creating modules
- a module is a different way of thinking about your code => you break your code apart in a logical way
- 

## The Module Pattern Part 1

## The Module Pattern Part 2
- the module pattern is very similiar to the namespace pattern.
- The namespace pattern seeks to avoid global variables, as does the module pattern
- Advantages and Goals of the Module Pattern
  - easier to have multiple developers working on the project
  - the code becomes much more reusable
  - the code is easier to understand
  - the code is easier to manage
- with the module pattern, we need to make some methods/properties public; if we don't, then 
everything is private and we can't access it
- in this part, we turn the code into an IIFE and then determine which functions are public

## The Module Pattern Part 3
- this is where we start breaking up the code into separate files and designate them as modules
- What parts do we want to break apart?
- The work we did in Part 2 is technically a module, which, as of now, largely resembles the
namespace pattern
- We are going to end up with two different global variables: MAINAPP and UTIL

```js
var UTIL = (function(u) {

  // Paste in Code for this module

})(UTIL || {});
```
- it's not complete yet but we have to determine WHICH functions we want to make public.
- He sets aside room at the bottom for his public functions:

```js
// Public Methods and Properties
u.$ = $;
u.assignEvent = assignEvent;
// etc

return u;
```
- notice the pattern

```js
var UTIL = (function(u) {

  // Paste in Code for this string-associated functions/properties

})(UTIL || {});
```
- notice how it is essentially the SAME code. They each start with `var UTIL = ` ...
- they are all IIFE's
- the `var UTIL` does not mess it up because we are passing in `UTIL || {}`. So if UTIL is
not yet initialized, an empty object is created...if UTIL exists, we are just adding our
methods/properties to that object

## The Module Pattern Part 4
- a submodule could be: `UTIL.dom` or `UTIL.string`
- `var sub = u.dom = u.dom || {}`;
- we can then change all of our public properties/methods to make it a sub-module:

```js
// Old Code
u.$ = $;
u.assignEvent = assignEvent;
// etc.

// New Code
sub.$ = $;
sub.assignEvent = assignEvent;
```
- we still return the full module, `u`, but we've made those properties sub-modules
- we do the same for the string module: `var sub = s.string = s.string || {}` and...

```js
// Public Properties and Methods
sub.numChar = numChar;
sub.breakOut = breakout;

return s;
```
- we can create dependencies:

```js
// Dependencies
var strU = u.string
```
- and then replace anywhere it would've been `UTIL.string.numChar` with `strU.numChar`;
- after setting all that up, we have to then import them into our main.js file
- what was originally:

```js
var MAINAPP = (function(nsp) {

  // CODE

})(MAINAPP || {});
```
- is now:

```js
var MAINAPP = (function(nsp, $, domU, strU) {

  // CODE
  
})(MAINAPP || {}, UTIL.dom.$, UTIL.dom, UTIL.string);
```
- we then have to update the methods inside the main.js file that are referencing our string and dom
"public" methods


[back to top](#top)
<a name="section-10"></a>
# Working with Data: JavaScript Objects and JSON

## Introduction to Working With Data
- **Separation of Concerns:** Separate data from Code
- Reasons for separating data from code
  + availability of the data
  + location of the data
  + separation of concerns => keep things separate in your code that don't need to together
  + Manageability
- Working with External Data Creates Two Main Needs
  + Loading the Data
  + Making the Data Usable

## JSON Basics
- JSON = **J**ava**S**cript **O**bject **N**otation
  + JSON is text structured like a JavaScript Object
  + JSON is used to store and exchange data. You can store a JavaScript object as text
  + You can convert JavaScript objects to JSON (stringify) and JSON to JavaScript object (parse)
  using the JavaScript JSON Object
- JSON Syntax
  + Data is in name/value pairs separated by a colon
  + the Name MUST be enclosed in **double quotes**
  + Data is separated by commas
  + Curly braces `{}` hold objects
  + Square brackets `[]` hold arrays
- JSON Values Must Be One of These Data Tyeps
  + string (double quotes)
  + number
  + object
  + array
  + boolean
  + null
  + **No undefined**

```js
var json = '{"name": "Steven"}';
console.log(json);
var obj = JSON.parse(json);
console.log(obj);
var str = JSON.stringify(obj);
console.log(str);
```

## Creating a JSON File
- create new JSON file: `data.json`

```json
{
  "numQuestions": 3,
  "randomPresentation": true,
  "questions": [
    {
      "stem": "question 1",
      "weight": 1,
      "type": "fill-in",
      "answer": "answer 1"
    },
    {
      "stem": "question 2",
      "weight": 1,
      "type": "true-false",
      "answer": "false"
    },
    {
      "stem": "question 3",
      "weight": 1,
      "type": "true-false",
      "answer": "false"
    }
  ],
  "title": "Lesson Quiz"
}
```

## Loading a JSON File Using XMLHttpRequest
- the XML HTTP request object is the heart of AJAX
- Steps for Using the XMLHttpRequestObject
  + Create a new object
  + Change the Mime type to JSON
    * if loading a local JSON file
  + Use the open method and specify the http verb and file path
  + Define a callback for the request
  + Send the request
  + **Note:** jQuery is what I use and ES6 has `fetch` now
- 

## Testing on a Server
- Setting up a Local Server
  + Grunt
  + Gulp
  + CodeKit
  + Mamp

[back to top](#top)
<a name="section-11"></a>
# Think Like a Programmer: Approaches to Programming

## Approaches to Programming
- Common Programming Paradigms
  + Imperative
  + Procedural
  + Object-Oriented
  + Functional
- Java was written for OOP paradigm
- JavaScript can adapt to many paradigms
- Paradigms and Design Patterns help you organize yuor code
- **Design pattern** - a tried and tested solution to a common programming problem. 
It is a best practice
  + namespace pattern, IIFE, callbacks

[back to top](#top)
<a name="section-12"></a>
# Object Oriented Programming in JavaScript

## Introduction to Object Oriented Programming
- Object => data and behaviors packaged together
- In traditional OOP, you must create a class to create an object
- In JS, when we create an object, you can also link that object to other objects (prototype chain)
- Advantages of Using an Object Oriented Approach
  + Reduce errors that can occur when you update your code
  + Make your code more readable
  + Objects can become reusable pieces so it makes your code reusable

## OOP Theory
- Inheritance
  + An object being able to inherit methods and properties from another object
  + Giving one object access to another objects' methods and properties
  + *Enables Code Reuse!**
- Encapsulation
  + Enclosing all functionalities of an object (data and methods) within that object, so the objects
  internal workings are hidden from the rest of the application
  + *Governs the Creation of Our Objects!*

## Review: Setting the Prototype (L51)
- Setting the Prototype
  + By Default (Object) => the default JavaScript Object
  + Constructor function
  + Object.create(*prototype*)
  + Object.setPrototypeOf(obj, *prototype*) (only available in ES6)
  + Class Structure

```js
// Our Prototype
var objProto = {
    greet: function() {
        console.log(this.greeting + " World!");
    }
}

var Greeting = function(term) {
    this.greeting = term;
}

Greeting.prototype = objProto;


// Constructor
var obj1a = new Greeting("Hi");
var obj1b = new Greeting("hi");

// Object.create()
var obj2 = Object.create(objProto);
obj2.greeting = "Hello";

// Object.setPrototypeOf()
var obj3 = {
    greeting: 'Hello'
};

Object.setPrototypeOf(obj3, objProto);

obj3.greet()

```

## The Constructor Property

## Project: Applying OOP Part 1
- quick intro to how he will explain OOP

## Project: Applying OOP Part 2
- Question Types:
  + multiple choice
  + Fill-in
- Properties
  + type
  + question text
  + id
  + distractors
  + correct response
  + feedback
  + result
- Methods
  + populate
  + checkAnswer
  + displayQuestion
  + hideQuestion
  + displayFeedback
  + hideFeedback

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

## Starting a Project (L70)
- make a plan on how you will proceed
  + break apart the items that are required to complete the project
- Write the functionality using psuedocode
- If necessary, build a prototype
- Begin working on small pieces
- Test those small pieces
- Combine the pieces
- Test
- Refactor


[back to top](#top)
<a name="section-15"></a>
# Functional Programming Concepts in JavaScript

## Functional Programming Introduction (L72)
- "Functional programming is the process of building software by composing pure functions, 
avoiding shared state, mutable data, and side-effects. Functional programming is declarative
rather than imperative, and application state flows through pure functions." - Eric Elliot
- Functional Programming Concepts
  + Avoid Side Effects
  + Avoid Mutations
  + Avoid Shared State
  + Use Pure Functions
  + Use Function Composition
  + Use Declarative Code Instead of Imperative Code

## Avoiding Side Effects and Using Pure Functions
- a side-effect is an observable effect outside of a function
- If the functions below (fun1, fun2, fun3) have side-effects, how sure can you be that
`x` won't be affected?

```js
var x = 1;

fun1();

console.log(x)

fun2();

console.log(x)

fun3();

console.log(x)

```

- Here is an example of a function with side-effects and an example without side-effects:

```js
// WITH Side-Effects
let count = 0;

let increment = function() {
  count++;
  return count;
}


// WITHOUT Side-Effects => this function does not alter anything outside of its scope
// this is a pure function
let increment = function(num) {
  return num + 1;
}
```

- What are Pure Functions?
  + the function depends on the input provided and not on external *data that changes*
  + the function doesn't cause side effects. It doesn't cause change beyond its scope
  + Given the same input, the function will always return the same output
    * notice how that isn't the case if you are simply changing an outside variable that
    other functions can alter
- Side Effects
  + changing a value globally (variable, property or data structure)
  + changing the original value of a function's argument
  + throwing an exception
  + printing to the screen or logging
  + triggerin an external process
  + invoking other functions that have side-effects
- How can you code without side-effects? You can't => you need side effects but functional 
programming seeks to minimize and manage them

## Avoiding Shared State (L74)
- state, generally, refers to the current condition of something

> A program is considered stateful if it is designed to remember data from events or user
interactions. The remembered information is called the state of program.

> A JavaScript program stores data in variabels and objects. The contents of these storage
locations at any given moment while the program is running is considered.

> Shared state is any variable, object, or memory space that exists in a shared scope, 
or as the property of an object being passed between scopes. A shared scope can include
global scope or closure scopes 

## Avoiding Mutable Data
- objects in JavaScript are mutable, meaning that I can change parts of it and properties, but
I cannot reassign it.
- So I can sort an array but I can't do:

```js
const num = 50;
num = 100;
```
- to clone an object:

```js
const cloneObj = function(obj) {
  return JSON.parse(JSON.stringify(obj));
}
```
- cloning an object allows us to make data immutable


## Function Composition Parts 1 & 2
- Functions vs. Procedures
- Functions in Functional Programming
  + functions have an input
  + functions return a value
  + functions are simplified to a single task
- putting functions together to accomplish a task is functional composition
- Breadking Down Reduce
  + `[filterArticles, breakout, capitalize, noPunct, trim]`
  + trim(x)
  + noPunct(trim(x))
  + capitalize(noPunct(trim(x)))
  + breakout(capitalize(noPunct(trim(x))))
  + return filterArticles(breakout(capitalize(noPunct(trim(x)))))
- Here is the compose function:

```js
// Without logs
const compose = function(...fns) {
    return function(x) {
        return fns.reduceRight(function(v, f) {
            return f(v);
        }, x);
    }
};

// With logs
const compose = function(...fns) {
    console.log('My functions: ', fns) // array of all the functions I passed in
    console.log('My functions with spread: ', ...fns) // all my functions just laid out
    console.log('\n');
    return function(x) {
        console.log('This is x: ' + x); // is the argument passed into the original function
        console.log('\n');
        let count = 1;
        // it then runs reduceRight with x as starting value
        return fns.reduceRight(function(v, f) {
            console.log('Iteration #' + count);
            console.log('f = ' + f.name + ' ==> ' + f)
            console.log('v = ' + v);
            console.log('\n');
            count++
            return f(v);
        }, x);
    }
};
```

- Compose function output:

```
My functions:  (5) [ƒ, ƒ, ƒ, ƒ, ƒ]
My functions with spread:  arr => arr.filter(noArticles) str => str.split(" ") str => str.toUpperCase() str => str.replace(/[?.,!]/g,'') str => str.replace(/^\s*|\s*$/g, '')


This is x: Innovation distinguishes between a leader and a follower.


Iteration #1
f = trim ==> str => str.replace(/^\s*|\s*$/g, '')
v = Innovation distinguishes between a leader and a follower.


Iteration #2
f = noPunct ==> str => str.replace(/[?.,!]/g,'')
v = Innovation distinguishes between a leader and a follower.


Iteration #3
f = capitalize ==> str => str.toUpperCase()
v = Innovation distinguishes between a leader and a follower


Iteration #4
f = breakout ==> str => str.split(" ")
v = INNOVATION DISTINGUISHES BETWEEN A LEADER AND A FOLLOWER


Iteration #5
f = filterArticles ==> arr => arr.filter(noArticles)
v = INNOVATION,DISTINGUISHES,BETWEEN,A,LEADER,AND,A,FOLLOWER
```

- see `L77-functional-programming/Composition2-final` directory for more. Pipe and Compose
functions make a lot more sense now

## Imperative Programming VS Declarative Programming
- Imperative programming is a programming style that tells the computer how to accomplish some
task
- Declarative programming expresses the logic of a program without identifying the control flow.
Control flow is abstracted away, so declarative code only needs to specify what to do

```js
// declarative
return fns.reduce(function(v, f) {
  return f(v);
}, x);

// imperative
let result;
for(let i = 0; i < fns.length; i++) {
  if(i === 0) {
    result = fns[i](x);
  }
  result = fns[i](result)
}
```


## Functional Programming Example (L79)

## Quiz


## Functional Programming Techniques (L80)

## Using Reduce, Map, and Filter (L81)
- None of the methods reduce, map or filter alter the array
- reduce and reduceRight: combines the elements of an array using the function you specify
- map passes each element of the array to the function you provided and returns a new array that 
consists of the values returned by that function
- filter returns a new array that is a subset of the existing array
- 

```js

// Pipe
const pipe = function(...fns) {
  return function(x) {
    return fns.reduce(function(v, f) {
      return f(v);
    }, x);
  }
};

```

## Getting Your Feet Wet With Currying (L83)

- Arity refers to the number of parameters a function has
- `function test(num1, num2)` => arity of 2
- `let test = function(arr,val,index) {}` => arity of 3
- Functions with arity of 1 can be composed together
- Easy to understand example of currying:

```js
const curryGreeting = function(greeting) {
  return function(name) {
    console.log(greeting + name);
  }
}

const welcomeGreet = curryGreeting('Welcome');

welcomeGreet('Steve');
welcomeGreet('Mary');
```
- this makes the code more reusable as we don't have to hardcode "Welcome" into the
greeting function.
- We create a second function called `welcomeGreet` which only takes one parameter, a name

## Understanding Recursion (L84)
- Recursion is a function that calls itself

```js
const factorial = function(num) {
  if(num == 1) {
    return 1;
  }
  return num * factorial(num - 1);
}

// Factorial with arrow function
const factorial2 = num => (num ==== 1) ? 1 : num * factorial(num - 1);
```


## Functional Libraries for JavaScript
- Ramda 
- Lodash
  + based upon underscore
- Immutable
- functional.js






















