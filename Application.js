/**
 * Created by Lenovo on 12/21/2016.
 */
function Redirect(menuClicked)
{
    if(menuClicked.value == "todaySlot")
    {
        window.location.href='TodaySlot.html';
    }
    else if(menuClicked.value == "editProfile"){
        window.location.href='Profile.html'

    }
    else if(menuClicked.value == "slotBooking"){
        window.location.href='Slot2Book.html'

    }
    else if(menuClicked.value == "slotsHistory"){
        window.location.href='SlotHistory.html'

    }
    return false;
}
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

function readData() {

    loadJSON(function (response) {
// Parse JSON string into object
        var table = document.getElementById("userDetails");
        var json_array = JSON.parse(response);
        console.log(json_array);

       /* for (var i = 0, len = json_array.user.length; i < len; ++i) {
            alert("in parsing the json");*/
            var user = json_array.user[0];
            var userEmail = user.email_id;
            var fullname = user.fullName;
            var row = table.rows;
            var columns = row[0].cells;
            var emailId = document.createElement("INPUT");
            emailId.type = "email";
            emailId.id = "emailId";
            emailId.name = "emailId";
            emailId.value = userEmail;
            columns[1].innerHTML = userEmail;
        //alert("in parsing the json ="+userEmail+" name = "+fullname);
        //document.getElementById("emailtd").innerHTML = userEmail;
        //document.getElementById("fullName").innerHTML = fullname;


        //}
    });
}

