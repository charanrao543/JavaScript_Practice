/*
Opertors in js
1.Arithmatic operator
2.Relational operator
3.Logical operator
4.Ternary operator
5.String
 */

//Arithmatic operator
console.log("Arithmatic operator")
console.log(10+20)
console.log(10-20)
console.log(10*20)
console.log(10/20)

//Relational operator
console.log("Relational operator")
        var a=100
        var b=25
        console.log(a<b)
        console.log(a>b)
        console.log(a<=b)
        console.log(a>=b)
        console.log(a==b)

//Logical operator
console.log("Logical operator") 
      var x1=10,y1=20
      console.log(x1>y1&&x1==y1)
      console.log(x1<y1||x1==y1)   
      
      
//Ternary operator      
console.log("Ternary operator") 
        console.log("Example-1")
        var x=10,y=30
        var z=(x>y||y!=x)?x+20:x-5
        console.log(z) //30
/* .If the condition is true expression-1 will be evaluated and returned and return eg.(x+20)=30
   .If the condition is false expression-2 will be evaluated and returned.eg.(x-5) */

   console.log("Example-2")
   var x=10,y=30
   var z=(x<=y&&y!=x)?"y-20":"x+y"
   console.log(z) //y-20

//string operator(+):
console.log("string operator(+)") 
        console.log("string"+" "+"operator") //string operator
        console.log("Hello"+100) //Hello100
        console.log(100+null) //100
        console.log(100-null) //100
        console.log(100-"") //NaN






