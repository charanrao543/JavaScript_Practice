class Parent{
    constructor(work)
    {
        this.work=work
    }
    parent_fun()
    {
        return "Parent is "+ this.work  
    }
}
class Child extends Parent
{
    constructor (a,b)
    {
        super(a)
        this.b=b
    }
    child_fun()
    {
        return this.parent_fun()+" "+"Child is "+this.b
    }
}
var c1=new Child("Working","Playing")
console.log(c1.child_fun())