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

        for (var i = 0, len = json_array.user.length; i < len; ++i) {
            //alert("in parsing the json");
            var user = json_array.user[i];
            var row = table.rows;
            //email id column
            var columns = row[0].cells;
            console.log(columns.length+" useremail "+user.email_id);
            var td = document.createElement("td");
            var emailId = document.createElement("INPUT");
            emailId.type = "email";
            emailId.id = "emailId";
            emailId.name = "emailId";
            emailId.setAttribute("value",user.email_id);
            emailId.setAttribute("onclick","return validate();");
            td.appendChild(emailId);
            var parnode = columns[1].parentNode;
            parnode.replaceChild(td,columns[1]);
            // full name column
             columns = row[1].cells;
            console.log(columns.length+" username "+user.fullName);
            var td = document.createElement("td");
            var fullname = document.createElement("INPUT");
            fullname.type = "text";
            fullname.id = "fname";
            fullname.name = "fname";
            fullname.setAttribute("value",user.fullName);
            fullname.setAttribute("onclick","return validate();");
            td.appendChild(fullname);
            var parnode = columns[1].parentNode;
            parnode.replaceChild(td,columns[1]);
            //Date of Birth
            columns = row[2].cells;
            console.log(columns.length+" username "+user.dateOfBirth);
            var td = document.createElement("td");
            var dob = document.createElement("INPUT");
            console.log('..............getting date');
            console.log(user.dateOfBirth);
            var daob = new Date(user.dateOfBirth);
            dob.type = "date";
            dob.id = "dob";
            dob.name = "dob";
            console.log("ddob  "+daob);
            //dob.value = user.dateOfBirth;
            dob.setAttribute("value",user.dateOfBirth);
            dob.setAttribute("onclick","return validate();");
            td.appendChild(dob);
            var parnode = columns[1].parentNode;
            parnode.replaceChild(td,columns[1]);
            //Bank Name
            columns = row[3].cells;
            console.log(columns.length+" username "+user.bankName);
            var td = document.createElement("td");
            var bname = document.createElement("INPUT");
            bname.type = "text";
            bname.id = "dob";
            bname.name = "dob";
            bname.setAttribute("value",user.bankName);
            bname.setAttribute("onclick","return validate();");
            td.appendChild(bname);
            var parnode = columns[1].parentNode;
            parnode.replaceChild(td,columns[1]);
            //Branch Of the Bank
            columns = row[4].cells;
            console.log(columns.length+" username "+user.bankBranch);
            var td = document.createElement("td");
            var branch = document.createElement("INPUT");
            branch.type = "text";
            branch.id = "bBranch";
            branch.name = "bBranch";
            branch.setAttribute("value",user.bankBranch);
            branch.setAttribute("onclick","return validate();");
            td.appendChild(branch);
            var parnode = columns[1].parentNode;
            parnode.replaceChild(td,columns[1]);
            //accountNumber
            columns = row[5].cells;
            console.log(columns.length+" username "+user.accountNumber);
            var td = document.createElement("td");
            var accountNumber = document.createElement("INPUT");
            accountNumber.type = "text";
            accountNumber.id = "accnum";
            accountNumber.name = "accnum";
            accountNumber.setAttribute("value",user.accountNumber);
            accountNumber.setAttribute("onclick","return validate();");
            td.appendChild(accountNumber);
            var parnode = columns[1].parentNode;
            parnode.replaceChild(td,columns[1]);
            //mobileNumber
            columns = row[6].cells;
            console.log(columns.length+" username "+user.mobileNumber);
            var td = document.createElement("td");
            var mobileNumber = document.createElement("INPUT");
            mobileNumber.type = "text";
            mobileNumber.id = "mobNum";
            mobileNumber.name = "mobNum";
            mobileNumber.setAttribute("value",user.mobileNumber);
            mobileNumber.setAttribute("onclick","return validate();");
            td.appendChild(mobileNumber);
            var parnode = columns[1].parentNode;
            parnode.replaceChild(td,columns[1]);
            //accountType
            columns = row[7].cells;
            console.log(columns.length+" username "+user.accountType);
            var td = document.createElement("td");
            var accountType = document.createElement("INPUT");
            accountType.type = "text";
            accountType.id = "accType";
            accountType.name = "accType";
            accountType.setAttribute("value",user.accountType);
            accountType.setAttribute("onclick","return validate();");
            td.appendChild(accountType);
            var parnode = columns[1].parentNode;
            parnode.replaceChild(td,columns[1]);
            //adharNumber
            columns = row[8].cells;
            console.log(columns.length+" username "+user.adharNumber);
            var td = document.createElement("td");
            var adharNumber = document.createElement("INPUT");
            adharNumber.type = "text";
            adharNumber.id = "adharNum";
            adharNumber.name = "adharNum";
            adharNumber.setAttribute("value",user.adharNumber);
            adharNumber.setAttribute("onclick","return validate();");
            td.appendChild(adharNumber);
            var parnode = columns[1].parentNode;
            parnode.replaceChild(td,columns[1]);
            //role
            columns = row[9].cells;
            console.log(columns.length+" username "+user.role);
            var td = document.createElement("td");
            var role = document.createElement("INPUT");
            role.type = "text";
            role.id = "role";
            role.name = "role";
            role.setAttribute("value",user.role);
            role.setAttribute("onclick","return validate();");
            td.appendChild(role);
            var parnode = columns[1].parentNode;
            parnode.replaceChild(td,columns[1]);

        }
    });
}
function loadJSONState(callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'states_city.json', true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
// Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}
function loadCity(state)
{
    loadJSONState(function (response) {
// Parse JSON string into object
        var table = document.getElementById("userDetails");
        var json_array = JSON.parse(response);
        console.log(json_array);
        var statesArray = json_array.states;
        console.log(statesArray+"    len "+statesArray.length);
        var table = document.getElementById("slotRequire");

        for(var i=0; i< statesArray.length;i++)
        {

            var statesel = statesArray[i].stateName;
            var citiesState = statesArray[i].cities;
            if(statesel.toString() == state.value)
            {
                var rows = table.rows;
                var columns = rows[3].cells;
                var td = document.createElement("td");
                var citySelector = document.createElement("select");
                citySelector.id = "cityName";
                var option = document.createElement("option");
                option.setAttribute("value","- - Choose Your City - -");
                option.text = "- - Choose Your City - -";
                citySelector.appendChild(option);
                for(var j=0;j<citiesState.length;j++)
                {
                    var option = document.createElement("option");
                    console.log(citiesState[j].cityName+"=  citiesState[j].cityName");
                    option.setAttribute("value",citiesState[j].cityName);
                    option.text = citiesState[j].cityName;
                    citySelector.appendChild(option);
                }
                td.appendChild(citySelector);
                var parnode = columns[1].parentNode;
                parnode.replaceChild(td,columns[1]);
            }
        }

    });
}
