//phone_number validation without regular expression
function validate()
{
    var res=document.getElementById("phone").value
    if(res.length==0)
    {
        document.getElementById("msg").innerHTML="Phone_no should not be empty...!"
        return false
    }
    else if(isNaN(res))
    {
        document.getElementById("msg").innerHTML="Phone_no should contain only number...!"
        return false
    }
    else if(res.length>10)
    {
        document.getElementById("msg").innerHTML="Phone_no should not be more than 10...!"
        return false
    }
    else if(res.length<10)
    {
        document.getElementById("msg").innerHTML="Phone_no should not less than 10...!"
        return false
    }
    else if(res.charAt(0)<7)
    {
        document.getElementById("msg").innerHTML="Phone_no should start  from 7,8,or 9...!"
        return false
    }
    
}   


/*
Validation cases:
in "res" variable we have saved user entered phone number:
Case-1: res.length=0
"Phone_no should not be empty..!!"

Case-2:inNaN(res)--true
"Phone_no should contain only numbers..!!"

Case-3:length<10
"Phone_no should not less than 10 digits..!!"

Case-4:length>10
"Phone_no should not less than 10 digits..!!"

//checking if the data is starting with the digits less than 7
Case-5: res.charAt(0)<7
"Phone_no should start from 7,8 or 9..!!"

Notes-
1) By default onsubmit event will return "true" to the form.
 If onsubmit returns "true" to the form then, the form action will be performed.

2) When the form is submitted, onsubmit event will be called.
When onsubmit event invoked the method which is assigned to onsubmit event
e.g. validate() will be called. I

3) if the user enters the invalid input then validate() will display the error msg 
and will return false to the onsubmit event in the form.

4) When onsumbit event returns false to the form, form stops performing the action.

5) if validate() doesn't return false, then onsubmit event will be true and
form action will be perform.
 */