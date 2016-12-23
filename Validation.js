/**
 * Created by Lenovo on 12/23/2016.
 */
function validation(){
    var val1 = document.myform.fname;
    var val2 = document.myform.pwd;
    if(val1.value == "" )
    {
        //alert("hello");
        document.getElementById('error').innerHTML = '<font color="red">enter the email id</p>';
    }
    if(val2.value == "" )
    {
        document.getElementById("error").innerHTML = "<font color='red'>invalid username or  password</p>";
    }
    else
    {
        //alert("password   "+val2);
        //document.getElementById("error").innerHTML = "<font color='green'>your elgible for the operation</p>";
        localStorage.setItem("userEmailId",val1.value);
        window.location.href = "DashBoard.html";
    }
    return false;
}
function validate()
{
    var val1 = document.myform.fname;

    if(val1.value == "" )
    {
        //alert("hello");
        document.getElementById('error').innerHTML = '<font color="red">enter the email id</p>';
    }
    else
    {
        //alert("not null");

        document.getElementById('error').innerHTML = '<font color="green">valid</p>';

    }
    return false;
}
