//Write a RE for the following patterns:

var reg1=function()
{
    var str="Kodnest Technologies"
//a) search a character "t" in the given "Kodnest Technologies"
    var res1=str.search("t")   //Regular Expression-search()

//b) To replace the character "T" with character "C" in the given string str.
    var res2=str.replace("T","C")  //Regular Expression-replace()

//c) To replace the character "T" with character "C" in the given string str by ignoring the case
    var res3=str.replace(/T/ig,"C") //Regular Expression-replace(), Quantifiers-i,g(global)

//d) To match the substring "ol" in the given string.
    var res4=str.match(/ol+/g) //ol
    var res5=str.match(/ol*/g) //o,ol,o

//Quantifier i- it will replace only first one t by ignoring the case.
//Quantifier g-it will replace all the t.   


    //sending the data from js to html file
    document.getElementById("one").innerHTML=res1
    document.getElementById("two").innerHTML=res2
    document.getElementById("three").innerHTML=res3
    document.getElementById("four").innerHTML=res4
    document.getElementById("five").innerHTML=res5


}
reg1()

/*
Regular Expression are used to perform the pattern matching-
a)search()-
=this replace search for the specified character or a string in the given string.
b) replace()-
=replace the character in the given string with specified character.
c)match()-
=matches the string or character in the given string.

few Quantifier in Regular Expression
g:this quantifier is used to do the global match.
i:this Quantifier is used to ignore the case.
few Quantifire in Regular Expression
+: This modifier will match the exact substring in the given string
*: This modifier will match substring as well as the first character of the substring in the given string
*/