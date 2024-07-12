class Fan
{
    constructor(name,wings)
    {
        this.name=name
        this.wings=wings
    }
    rotate()
    {
        console.log("Fan is Rotating")
    }
}
var f1=new Fan("Bajaj",3)
console.log(f1)
f1.rotate()
console.log(typeof(f1))