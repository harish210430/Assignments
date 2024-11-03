/*
1. What is scope?
// scope is a way to restrict the access of any variables in certain area of code.

2. What are the different types of scope? Two examples of each type.
// scopes are three types: Global scope, Block scope, Function scope

// Global scope:  let num = 32;
                let no. = 12;

// Block scope: 
    
{
    let fruit = "coconut";
    let game = "ludo";
}

// Function scope:

 function sayHi() {
 let fulName = "Sam Bahadur";
 }
 sayHi();

 function sayJS() {
 var language = "JavaScript";
 }
 sayJS();

3. What are the rules of scope?
// When u r inside a scope and trying to access a value inside diff. scope, to access that u will have to go inside that scope and u can not do that.

4. Why do we need scope?
// To restrict the access of variable in certain area So we need it for Security and Naming collision.

5. What is the difference between var, let and const (keeping scope in mind).
//  let & const are block and function scoped But var is only function scoped.

*/
/*
 What will be the output of the following code with reason (write the error message if any).

// 1.
{
    let username = 'John';
  }
  console.log(username); // username is not defined, Becoz let is block scoped.

// 2.
  {
    var username = 'John';
  }
  console.log(username); // John, Becoz var is Function scoped only.

// 3.
  {
    const username = 'John';
  }
  console.log(username); // username is not defined, Becoz const is block scoped.

// 4.  
  {
    let num = 21;
  }
  let secondNum = 200;
  function add() {
    return num + num2;
  }
  console.log(add()); // num is undefined, Becoz let (num) is block scoped.

// 5.
{
    var num = 21;
  }
  let secondNum = 200;
  function add() {
    return num + num2; // num2 is not defined
  }
  console.log(add()); 

// 6.
for (let i = 0; i < 20; i++) {
    //
  }
  console.log(i); // i is not defined, Becoz let (i) is block scoped.

// 7.
for (var i = 0; i < 20; i++) {
    //
  }
  console.log(i); // 20, Becoz var(i) is not block scoped.

// 8.
for (const i = 0; i < 20; i++) {
    //
  }
  console.log(i); // Assignment to const variable.

// 9.
if (true) {
    let user = 'John';
  }
  console.log(user); // user is not defined, Becoz block scoped.

// 10.
if (true) {
    var user = 'John';
  }
console.log(user); // John, Becoz var is not block scoped, it is function scoped only.

// 11.
if (true) {
    const user = 'John';
  }
  console.log(user); // user is undefined,

// 12.
if (true) {
    const number = 21;
    console.log(number++); // Assignment to const variable, Becoz it declares with value.
  }

// 13.
if (true) {
    const number = 21;
    console.log((number += 21)); // Assignment to const. variable
  }

// 14.
function first() {
    let one = 1;
    function second() {
      let two = 2;
      return one + two; 
    }
  }
  
  console.log(first()); // undefined, Becoz second() has not called So it return undefined then call first();

// 15.
function first() {
    let one = 1;
    function second() {
      let two = 2;
      return one + two; // 3
    }
    second(); 
    
  }
  
console.log(first()); // undefined, Becoz second() return 3 which is inside the first() but first() is not returning Anything So it would be "undefined".

// 16.
function first() {
    let one = 1;
    function second() {
      let two = 2;
    }
    second();
    return one + two;
  }
  
console.log(first()); // Error:two is not defined, Becoz let (two) is function scoped in second().

// 17.
function first() {
    let one = 1;
    function second() {
      let two = 2;
      return one + two; // 3
    }
    return second();
  }
  
console.log(first()); // 3

// 18.
function first() {
    let one = 1;
    function second() {
      let two = 2;
      let one = 100;
      return one + two; // 102
    }
    return second();
  }
console.log(first()); // 102

// 19.
let three = 300;
function first() {
  let one = 1;
  let three = 3;
  function second() {
    let two = 2;
    let one = 100;
    return one + two + three; // 105
  }
  return second(); // 105
}

console.log(first()); // 105
*/
// 20.
let three = 300;
function first() {
  let one = 1;
  let two = 2;
  function second() {
    let one = 100;
    return one + two + three;
  }
  return second(); // 402
}

console.log(first()); // 402