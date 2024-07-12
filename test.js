//phone_number validation using regular expression and test():
//test() always return output -true/false
function validate()
{
    var res=document.getElementById("phone").value
    var bool=/^[7-9]{1}[0-9]{9}$/.test(res)
    if(bool==false)
    {
        document.getElementById("msg").innerHTML="Invalid Phone Number...!"
        return false
    }
}


/*
if test==true means data is valid
when data is invalid test() will return false and the false will get 
saved in variable bool
*/
