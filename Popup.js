alert("check all the field befor submit...!!")

confirm("would u link to submit..??")

var choice=prompt("Enter your choice 1.Add 2.Sub 3.Mul 4.Div")
console.log(choice)
var a=Number(prompt("Enter First Number"))  // prompt will take user input String only
var b=Number(prompt("Enter Second Number")) // thats why we will convert Explict-Number
switch(choice)
{
    case "Add":console.log(a+b);
    break;
    case "Sub":console.log(a-b);
    break;
    case "Mul":console.log(a*b);
    break;
    case "Div":console.log(a/b);
    break;
    default:console.log("Invalid choice");
}