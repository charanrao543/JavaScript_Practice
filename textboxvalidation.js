function validate()
{
    var res=document.getElementById("fname").value
    if(res.length==0)
    {
        document.getElementById("msg").innerHTML="first name should not be empty...!"
        return false
    }
    if(res.length<3)
    {
        document.getElementById("msg").innerHTML="f-name must be more than 3 characters...!!"
        return false
    }
    if(res.length>15)
    {
        document.getElementById("msg").innerHTML="f-name should not be more than 15 characters...!! "
        return false
    }
}

