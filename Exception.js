//Example:1
/*
var fun=function()
{
    try{
    var a=10
    var b=0
    console.log(a/b)   
    }
    catch(e)
    {
        console.log("Exception Handled")
    }
}
fun()
*/

//Note:In javascript if any number is didvied by zero then, it will result infinity


//Example-2
var fun=function()
{
    var name="AKASH"
    try{
        var str=name.toLowerCase() //inbuilt method used to convert all characters in lower case
        alert(str)
    }
    catch(e)
    {
        alert("Inside catch block")
    }
    finally
    {
        alert("Inside finnaly block")
    }
}
fun()
