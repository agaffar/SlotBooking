/**
 * Created by Lenovo on 12/27/2016.
 */
function regValidation() {
    // body...
    var regex = /^[A-Za-z\s]{1,}$/;
    var regex1= /^[a-zA-Z0-9]+$/;
    var Regemail=/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
    var phreg=/^[0-9]+$/;
    var BName=document.myForm.bName.value;
    var pwd1 = document.myForm.pwd.value;
    var pwd2 = document.myForm.cnfpwd.value;
    if (!document.myForm.emailid.value.match(Regemail))
    {
        alert("Not a valid e-mail address");
        document.getElementById("emailErr").innerHTML = '<font color="red">enter the valid email id</p>';
        document.myForm.emailid.focus();
        return false;
    }
    else if(document.myForm.emailid.value == "")
    {
        document.getElementById("emailErr").innerHTML = '<font color="red">enter the valid email id</p>';
    }
    else
    {
        document.getElementById("emailErr").innerHTML = "";

    }
    if(!document.myForm.fullName.value.match(regex))
    {
        alert("please enter correct full name");
        document.myForm.fullName.focus();
        return false;
    }

    if(!document.myForm.bName.value.match(regex1))
    {
        alert("please enter correct  BName");
        document.myForm.bName.focus();
        return false;
    }
    if(!document.myForm.accType.value.match(regex))
    {
        alert("please enter correct  acc type Occupation");
        document.myForm.accType.focus();
        return false;
    }
    if(!document.myForm.mobNum.value.match(phreg)|| document.myForm.Phno.value.length!=10)
    {
        alert("please enter proper phone number");
        document.myForm.mobNum.focus();
        return false;
    }
    if((!document.myForm.pwd.value.match(regex1)) && (document.myForm.pwd.value==""))
    {
        alert("please enter valid password");
        document.myForm.pwd.focus();
        return false;
    }
    if(pwd1 != pwd2)
    {
        alert("Both the passwords doesn't match");
        document.myForm.cnfpwd.focus();
        return false;
    }
    return true;
}

/*
if(document.myForm.Gender[0].checked==false && document.myForm.Gender[1].checked==false)
{
    alert("please select your Gender");
    document.myForm.Gender[0].focus();
    return false;
}*/
/* if(!document.myForm.FatName.value.match(regex))
 {
 alert("please enter correct father name");
 document.myForm.FatName.focus();
 return false;
 }
 */
/*
if(!document.myForm.address.value.match(regex1))
{
    alert("please enter correct  address");
    document.myForm.address.focus();
    return false;
}*/
