//Function as Declartion:
/*
syntax:
function function_name()
{
    //body of function
} 
function_name() //calling of function
*/
//Type-2 No input and ouyput will be there:
/*function add()
{
    var a=200;
    var b=300;
    var c=a+b;
    return c;
}
var result=add()
console.log(result)
*/

//Type-4 input and output:
function add(a,b)
{
    var c=a+b;
    return c;
}
var result=add(100,200)
console.log(result)



//function as expression
/*
syntax:
var function_name=function()
{
    //body
}
function_name()
*/

//create one function using function as an expression to perform addition between two numbers
//type-1
/*var add=function()
{
    var ab=200;
    var bc=300;
    var cd=ab+bc;
    console.log(cd);
}
add()
*/

/*//type-2:
var add=function(ab,bc)
{
    var cd=ab+bc;
    console.log(cd);
}
add(200,200)
*/

//type-3
var add=function()
{
    var ab=200;
    var bc=300;
    var cd=ab+bc;
    return cd;
}
var cd=add()
console.log(cd);


//arrow function
/*
syntax:
var function_name=()=>
{
    //body
}
function_name() 
*/
//type-1;
var add=()=>
{
    var x=400;
    var y=400;
    var xy=x+y;
    console.log(xy)
}
add()