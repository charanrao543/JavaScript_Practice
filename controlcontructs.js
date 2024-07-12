//Examples 
//if-else
var a=100
var b=200
if(a>b)
{
    console.log("a is greater")
}
else
{
    console.log("b is greater")
}

//else-if ladder
var x=100
var y=200
var z=300
if(x>y&&x>z)
{
    console.log("x is greater")
}
else if(y>x&&y>z)
{
    console.log("y is greater")
}
else
{
    console.log("z is greater")
}


//for-loop:
arr=[10,20,30,40,50]  //iterable object
console.log(arr)
for(i=0;i<arr.length;i++)
{
    console.log(i) //index values
    console.log(arr[i]) //values
}


//for-of loop: //iterable object
for(var k of arr)
{
    console.log(arr) 
    console.log(k) //arr[k] is not defined in for-of loop
}


//for-in loop: //non iterable object
var Fan=
{
    "name":"bajaj",
    "price":2000,
}
//console.log(Fan)
//console.log(typeof(Fan))
for(var k in Fan)
{
    //console.log(Fan[k]) //values
    //console.log(k) //keys
    console.log(Fan) //key:value pair

}
