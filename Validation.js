/**
 * Created by Lenovo on 12/23/2016.
 */
function loadJSON(callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'SampleData.json', true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
// Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}

function validation(){
    var val1 = document.myform.fname;
    var val2 = document.myform.pwd;


        loadJSON(function (response) {
// Parse JSON string into object
            var jsonObject = JSON.parse(response);;
            if(localStorage.hasOwnProperty("jsonObject"))
            {
                console.log("has");
                jsonObject = JSON.parse(localStorage.getItem("jsonObject"));
            }
            else {
                jsonObject = JSON.parse(response);
                jsonObject =localStorage.setItem("jsonObject",JSON.stringify(jsonObject));

            }
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

                for(var i=0;i<jsonObject.user.length;i++)
                {
                    var user = jsonObject.user[i];
                    //alert("jsonObject.user.length=="+jsonObject.user.length);

                    console.log(user.email_id);

                    if(user.email_id == val1.value)
                    {
                        localStorage.setItem("userEmailId",val1.value);
                        localStorage.setItem("userRole",user.role);

                        if(user.role == "employee")
                        {
                            console.log("employee");
                            alert("employeee");
                            window.location.href = "EmployeeDashBoard.html";
                        }
                        else
                        {
                            window.location.href = "DashBoard.html";
                        }

                    }

                }

            }
        });


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
function registerValidation()
{

}