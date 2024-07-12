/*Type casting:
converting one datatype into other datatype.
 */
//converting all the datatype into number datatype:

//converting string to number datatype using number():
var n="kodnest"
console.log(n) //kodnest
console.log(typeof(n)) //string
var m=Number(n)
console.log(m) //NaN-"Not a Number"
console.log(typeof(m)) //number

var n="123"
console.log(n) //"123"
console.log(typeof(n)) //string
var m=Number(n)
console.log(m) //123
console.log(typeof(m)) //number


//converting
//1.string-boolean-"true","false"--->number
var ab="true"
console.log(ab) //true
console.log(typeof(ab)) //string
var ab=Number(ab)
console.log(ab) //NaN
console.log(typeof(ab)) //Number

//2.string-null-"null"----->number


//3.string-empty string("")--->number
var ab=""
console.log(ab) 
console.log(typeof(ab)) //string
var ab=Number(ab)
console.log(ab) //0
console.log(typeof(ab)) //Number

//converting boolean to number using Number():
var a=true
console.log(a) //true
console.log(typeof(a)) //boolean
var b=Number(a)
console.log(b) //1
console.log(typeof(b)) //number

var a=false
console.log(a) //false
console.log(typeof(a)) //boolean
var b=Number(a)
console.log(b) //0
console.log(typeof(b)) //number

//Converting array to number using Number():
var arr=[10,20,30,40]
console.log(arr) //[10,20,30,40]
console.log(typeof(arr)) //object
var num=Number(arr)
console.log(num) //NaN
console.log(typeof(num)) //Number

//converting null datatype to number datatype using Number():
var nu=null
console.log(nu)
console.log(typeof(nu)) //object
var mu=Number(nu)
console.log(mu) //0
console.log(typeof(mu)) //Number

//converting undefined datatype to number datatype using Number():
var un
console.log(un) //undefined
console.log(typeof(un)) //undefined
var un=Number(un)
console.log(un) //NaN
console.log(typeof(un)) //Number 