//Diffenence Between var,let,const
{
 var n=10
console.log(n)
var n=2000
console.log(n)
}
//console.log(n)
/*
1."var" doesn't Have Black Scope means the variable which are declared inside the block 
using "var" keyword can be accessed outside the block as well

2. Reinitialization the variable inside the same scope is allowed
*/

{
let a=100
console.log(a)
//let a=4000 Error-'a' has already been declared
//console.log(a)
}
//console.log(a) Error-a is not defined

/*
1."let" doesn't Have Black Scope means the variable which are declared inside the block 
using "let" keyword cannot accessed outside the block

2. Reinitialization the variable inside the same scope is Not allowed
*/


{
const b=200
console.log(b)
//const b=5000 Error-'b' has already been declared
//console.log(b)
}
//console.log(b) Error-b is not defined

/*
1."conts" doesn't Have Black Scope means the variable which are declared inside the block 
using "conts" keyword cannot accessed outside the block

2. Reinitialization the variable inside the same scope is Not allowed
*/
