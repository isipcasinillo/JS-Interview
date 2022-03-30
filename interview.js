//Comments

// using [ /* */ for multiline] and [ // for single line comments]

// Example

/* this is a multiple line comment
and I can do this because i used the / * * / 
*/

// This is for single line only


// Variables 


// you can declare a variable using var myVariable
// and you can assign a value using the assignment operator '='


// var Myvariable;
// Myvariable = 5;

// most commonly variables are declared and assigned
// var myVariable = 5;

// you can assign strings same as number but must you "" <-- string literals by single or double quotes

// var Myname = "Cyril"

// Variables declared will be undefined except when it is defined which will contain its value

//if you perform a mathematical operation on a undefined variable it will result in NaN => not a number

// if you perform a concatenate operation on a undefined string variable it will result in undefined


// JavaScript uses camelCase for its naming convention
// the every new word after the first word should be capitalized
// such as using var thisShouldBeCamelCased



// with Let variables it can only be defined once
// using let myvariable = 5
// let myvariable = 6 <--- {error} 


// const c;
// c = 1;  <-- {error} cannot reassign values to const

// const c = [1, 2]
// c.push(3) <--- you can modify non-primitive type, you can modify the array/object

// var sum = 2 + 2;
// var difference = 4 - 2;
// var multiply = 8 * 8;
// var quotient = 10 / 5;
// var remainder = 10%3 {equals to 1}

// Number vs Float
// number is 5,6,7
// float is 5.5/6.2/7.6

// var a = 5;
// a += 1 <-- {6}
// a -= 1 <-- {4}


// append values to variable
/* const someAdjective = "stupid!";
let myStr = "Learning to code is ";
myStr += someAdjective;
*/

/* 
const firstName = "Charles";
const firstLetter = firstName[0]; <--- {C}
*/

/* 
const firstName = "Ada";
const lastLetter = firstName[firstName.length - 1] <--- {a}
*/



// .push ->>>> 
// var Myarray = [1 ,2 ,3]
// myarray.push([4])


//.pop()
// var marray = [1,2,3]
// var removedItem = marray.pop()
/// console.log(removedItem) ---> 3



//.shift()
// var myarray = [1,2,3]
// var shiftedItem = myarray.shift()
// console.log(shiftedItem) ---> 1

//.unshift()
// var myarray = [1,2,3]
// var unshiftedItem = myarray.unshift(0)
// console.log(myarray[0]) ---> 0

/* 
  function(){
  console.log('hi')
}
*/

/* 
  function(param1, param2){
  console.log(param1, param2)
}

function functionWithArgs (param1, param2) {
  console.log(param1 + param2)
}

functionWithArgs(1,2) --> 3
*/

/* a function can return a variable
function timesFive (num) {
  return num * 5
};
const answer = timesFive(5);
console.log(answer).  
*/


/* 
const myGlobal = 10;  <-- Global Variable

function fun1() {
  oopsGlobal = 5;   <---- Global Variable because its not declared
}

*/


/* 
function blockLocalScope () {
  let/const myLocalVar = 5     <------ Local Scope
  console.log(myLocalVar
}
*/

/* 
 booleans are exclusive to one another, they cannot have both states active
 
 function (){
 return false
 }
*/


/* 
const myObj = {
  prop1: "val1",
  prop2: "val2"
};

const prop1val = myObj.prop1;
const prop2val = myObj.prop2;
*/

/* 
  you can access obj using bracket notation [] if there is a space in the value
  const
*/

/* 

function phoneticLookup(val) {
  let result = "";

const lookup = {
"alpha": "Adams",
"bravo": "Boston",
"charlie": "Chicago",
"delta": "Denver",
"echo": "Easy",
"foxtrot": "Frank",
}
 result = lookup[val]

  return result;
}

phoneticLookup("charlie");
*/














