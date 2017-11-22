<a name='top'></a>
# README

**Related Repositories:**

- [https://github.com/coolinmc6/advanced_javascript](https://github.com/coolinmc6/advanced_javascript)

**Section Links:**

1. [Advanced Concepts for Objects and Functions](#section-3)
1. [Think Like a Programmer: DRY Coding](#section-4)
1. [Working with Objects](#section-5)
1. [The Power of Functions](#section-6)
1. [Think Like a Programmer: Avoiding Globals](#section-7)
1. [The Power of Functions (Continued)](#section-8)
1. [Think Like a Programmer: The Module Pattern](#section-9)
1. [Working with Data: JavaScript Objects and JSON](#section-10)
1. [Think Like a Programmer: Approaches to Programming](#section-11)
1. [Object Oriented Programming in JavaScript](#section-12)
1. [Think Like a Programmer: Starting a Project](#section-13)

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

## Using the bind Function Method

## Invoking Functions as Constructors: The Magic of new

## Constructor Invocation and the Value of this

## Higher Order Functions, Callbacks and the Problem with this

## Arrow Functions



[back to top](#top)
<a name="section-4"></a>	
# Think Like a Programmer: DRY Coding




[back to top](#top)
<a name="section-5"></a>
# Working with Objects




[back to top](#top)
<a name="section-6"></a>
# The Power of Functions



[back to top](#top)
<a name="section-7"></a>
# Think Like a Programmer: Avoiding Globals



[back to top](#top)
<a name="section-8"></a>
# The Power of Functions (Continued)



[back to top](#top)
<a name="section-9"></a>
# Think Like a Programmer: The Module Pattern



[back to top](#top)
<a name="section-10"></a>
# Working with Data: JavaScript Objects and JSON



[back to top](#top)
<a name="section-11"></a>
# Think Like a Programmer: Approaches to Programming



[back to top](#top)
<a name="section-12"></a>
# Object Oriented Programming in JavaScript




[back to top](#top)
<a name="section-13"></a>
# Think Like a Programmer: Starting a Project





[back to top](#top)