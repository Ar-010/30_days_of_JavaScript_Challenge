console.log("Dealing with data")
const accountid="1234"
//value does not change.
console.log(accountid)
let emailid="zaiab@malika.com"
console.log(emailid)
//it work in block's so In the same block we can not make two same variable declaration .for example:
{
let emailid1="tango" // now it will work as it works in block.
console.log(emailid1)
}
emailid1="tango" // It is here not treated as a let variable instead something else. it is a variable but a global one
console.log(typeof(emailid1))
console.log(emailid1)
//let variable value can change.
emailid="mangluuu"
console.log(emailid)
var accountpassword="123"
console.log(accountpassword)
/*
----------------------------------------------------------------------------------------------------------------------------------
| var                                        | let                                      | const                                    |
|--------------------------------------------|------------------------------------------|------------------------------------------|
| The scope of a var variable                | The scope of a let variable              | The scope of a const variable            |
| is functional or global scope.             | is block scope.                          | is block scope.                          |
|--------------------------------------------|------------------------------------------|------------------------------------------|
| It can be updated and re-declared          | It can be updated but                    | It can neither be updated or             |
| in the same scope.                         | cannot be re-declared in                 | re-declared in any scope.                |
|                                            | the same scope.                          |                                          |
|--------------------------------------------|------------------------------------------|------------------------------------------|
| It can be declared                         | It can be declared                       | It cannot be declared                    |
| without initialization.                    | without initialization.                  | without initialization.                  |
|--------------------------------------------|------------------------------------------|------------------------------------------|
| It can be accessed without initialization  | It cannot be accessed                    | It cannot be accessed                    |
| as its default value is "undefined".       | without initialization.                  | without initialization, as it            |
|                                            |                                          | cannot be declared without               |
|                                            |                                          | initialization.                          |
|--------------------------------------------|------------------------------------------|------------------------------------------|
| These variables are hoisted.               | These variables are hoisted              | These variables are hoisted              |
|                                            | but stay in the temporal                 | but stay in the temporal                 |
|                                            | dead zone until the                      | dead zone until the                      |
|                                            | initialization.                          | initialization.                          |
*/
//Output:
{
let accountname="Harshit"
var accountcity="Bombay"
var accontemail="tanishk@gmail.com"
let state;//either you put colon or not it doesn't matter.
console.table([accountname,accountcity,accontemail,state])



}

/*
It is recommended to use var or const or mostly let or const for declaring a variable.
*/

/*
  Summary: 
  There are three ways to declare a variable:
  1. `const` - A block-scoped variable that cannot be reassigned or redeclared.
  2. `let` - A block-scoped variable that can be reassigned but not redeclared in the same scope (recommended).
  3. `var` - A function-scoped variable that can be reassigned and redeclared (not recommended due to its function scope and hoisting behavior).

  To output values, we use:
  1. `console.log()` - Outputs the value to the console.
  2. `console.log([value1, value2, ...])` - Outputs multiple values to the console.
*/
