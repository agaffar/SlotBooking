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
        window.location.href='Profile.html';

    }
    else if(menuClicked.value == "slotBooking"){
        window.location.href='Slot2Book.html';

    }
    else if(menuClicked.value == "slotsHistory"){
        window.location.href='SlotHistory.html';

    }
    else if(menuClicked.value == "logout"){
        alert("logging out.....");
        if(localStorage.hasOwnProperty("userEmailId"))
        {
            localStorage.removeItem("userEmailId");
        }
    window.location.href='index.html';


}
    return false;
}
function getLoginData()
{
    var user = localStorage.getItem("userEmailId");
    var userLabel = document.createElement("label");
    userLabel.innerHTML = user;
    document.getElementById("user").innerHTML = user;
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
        if(!localStorage.hasOwnProperty("jsonObject"))
        {
            localStorage.setItem("jsonObject", JSON.stringify(json_array));
        }
        else
        {
            json_array = JSON.parse(localStorage.getItem("jsonObject"));
        }
        console.log(json_array);

        for (var i = 0, len = json_array.user.length; i < len; ++i) {
            //alert("in parsing the json");
            var userEmailId = localStorage.getItem("userEmailId");

            var user = json_array.user[i];
            console.log("iiiiiiiiii = "+user.email_id+" userEmailId= "+userEmailId);

            if(user.email_id == userEmailId)
            {
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
        //console.log(json_array);
        var statesArray = json_array.states;
        //console.log(statesArray+"    len "+statesArray.length);
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
                citySelector.setAttribute("onchange","return loadBranch(state,this,bName);");
                var att =  document.createAttribute("required");
                citySelector.setAttribute("required","true");

                var option = document.createElement("option");
                option.setAttribute("value","- - Choose Your City - -");
                option.text = "- - Choose Your City - -";
                citySelector.appendChild(option);
                for(var j=0;j<citiesState.length;j++)
                {
                    var option = document.createElement("option");
                    //console.log(citiesState[j].cityName+"=  citiesState[j].cityName");
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
function loadBranch(state,city,bank)
{
    loadJSONState(function (response) {
// Parse JSON string into object
        var table = document.getElementById("userDetails");
        var json_array = JSON.parse(response);
        //console.log(json_array);
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
                var columns = rows[5].cells;
                console.log("columns.len = "+columns.length);
                var td = document.createElement("td");
                var branchSelector = document.createElement("select");
                branchSelector.id = "bBranch";
                branchSelector.setAttribute("onchange","");
                branchSelector.setAttribute("required","true");

                var option = document.createElement("option");
                option.setAttribute("value","- - Choose Your Bank Branch - -");
                option.text = "- - Choose Your bank branch - -";
                branchSelector.appendChild(option);
                for(var j=0;j<citiesState.length;j++)
                {
                    if(citiesState[j].cityName == city.value)
                    {
                        var banks = citiesState[j].banks;
                        for(var k=0;k<banks.length;k++)
                        {
                            if(banks[k].bankName == bank.value)
                            {
                                var branchesArray = banks[k].branches;
                                for(var branch=0;branch<branchesArray.length;branch++)
                                {
                                    var option = document.createElement("option");
                                    //console.log(branchesArray[branch]+"=  branchesArray[branch]");
                                    option.setAttribute("value",branchesArray[branch]);
                                    option.text = branchesArray[branch];
                                    branchSelector.appendChild(option);
                                }
                                td.appendChild(branchSelector);
                                var parnode = columns[1].parentNode;
                                parnode.replaceChild(td,columns[1]);

                            }
                        }

                    }

                }

            }
        }

    });
    return false;
}
function bookDSlot() {
    var custName = document.getElementById("cname").value;
    var accNumber = document.getElementById("accNum").value;
    var custstate = document.getElementById("state").value;
    var custCity = document.getElementById("cityName").value;
    var custBank = document.getElementById("bName").value;
    var custBankBranch = document.getElementById("bBranch").value;
    var custemailId = document.getElementById("emailId").value;
    var custmobnum = document.getElementById("mobnum").value;
    var custadhNum = document.getElementById("adhNum").value;
    var slotDatetest = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
    var day = slotDatetest.getDate();
    var month = slotDatetest.getMonth() + 1;
    var year = slotDatetest.getFullYear();
    var slotDateTime = year + "-" + month + "-" + day;
    var tokenId = day + custBank + "" + custadhNum;
    //document.write("<b>" + day + "/" + month + "/" + year + "</b>");
    var jsonObject = {};
    jsonObject.tokenId = tokenId;
    jsonObject.custName = custName;
    jsonObject.accNumber = accNumber;
    jsonObject.custstate = custstate;
    jsonObject.custBank = custBank;
    jsonObject.custBankBranch = custBankBranch;
    jsonObject.custemailId = custemailId;
    jsonObject.custmobnum = custmobnum;
    jsonObject.custadhNum = custadhNum;
    jsonObject.slotDateTime = slotDateTime;
    var jsonObject1 = JSON.parse(localStorage.getItem("jsonObject"));

    console.log("before loop "+jsonObject1.user.length);
    var userEmailId = localStorage.getItem("userEmailId");

    for (var i = 0, len = jsonObject1.user.length; i < len; ++i) {
            //alert("in parsing the json");
            var user = jsonObject1.user[i];
            console.log(" useremail "+user.email_id);

            if(user.email_id == custemailId && user.email_id == userEmailId ){
                user.slots.push(jsonObject);
            }
            jsonObject1.user[i] = user;
        }
        console.log(jsonObject1);
        localStorage.setItem("jsonObject", JSON.stringify(jsonObject1));
    var jsonObject2 = JSON.parse(localStorage.getItem("jsonObject"));
    console.log(jsonObject2);
    window.location.href = "TodaySlot.html";

      /*  var txtFile = "/SampleData.json";
        var file = new File(txtFile,"write");
        var str = JSON.stringify(json_array);

        log("opening file...");
        file.open();
        log("writing file..");
        file.writeln(str);
        file.close();*/
        /*var txtFile = "/customerSlots.json";
         var file = new File(txtFile,"write");
         var str = JSON.stringify(userSlots);

         //Save the file contents as a DataURI
         var dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(str);

         //Write it as the href for the link
         var link = document.getElementById('link').href = dataUri;*/
    return false;
}
function loadSlotData()
{
    var jsonObject = JSON.parse(localStorage.getItem("jsonObject"));
    console.log(jsonObject);
    var userEmailId = localStorage.getItem("userEmailId");

    var divContent = document.getElementById("menuContent");
    var divContentNew = document.createElement("div");
    divContentNew.id = "menuContent";

    for(var i=0;i<jsonObject.user.length;i++) {
        if(jsonObject.user[i].email_id == userEmailId)
        {
            var email_indicate = document.createElement("p");
            email_indicate.innerHTML = jsonObject.user[i].email_id;
            divContentNew.appendChild(email_indicate);
            var slots = jsonObject.user[i].slots;
            console.log(slots.length);
            /*  Object.entries(slots).forEach(
             console.log(key, value)
             );*/
            var table = document.createElement("table");

            for (var j = 0; j < slots.length; j++) {
                var eachJsonObj = slots[j];
                console.log(eachJsonObj);
                for (var key in eachJsonObj) {
                    console.log(key + "=============key");
                    var tr = document.createElement("tr");
                    if (eachJsonObj.hasOwnProperty(key)) {
                        console.log(key + " -> " + eachJsonObj[key]);
                        var td1 = document.createElement("td");
                        tr.appendChild(td1);
                        td1.innerHTML = key.toString();
                        td1.setAttribute("Label",key.toString());
                        var td2 = document.createElement("td");
                        var col = document.createElement("INPUT");
                        col.id = key.toString();
                        col.setAttribute("value", eachJsonObj[key]);
                        col.setAttribute("type", "text");

                        td2.appendChild(col)
                        tr.appendChild(td2);
                    }
                    table.appendChild(tr);
                }
                divContentNew.appendChild(table);
            }
        }
    }
    var parnode = divContent.parentNode;
    parnode.replaceChild(divContentNew,divContent);
}
function GetUsersJson()
{
    loadJSON(function (response) {
// Parse JSON string into object
        var json_array = JSON.parse(response);
        localStorage.setItem("jsonObject", JSON.stringify(json_array));
        var jsonObject = JSON.parse(localStorage.getItem("jsonObject"));
        alert(jsonObject);
        console.log(jsonObject);
    });
    return false;
}
function ShowSlots()
{
    var userEmailId = localStorage.getItem("userEmailId");
    loadJSON(function(response){
        var json_array = JSON.parse(response);
        var table = document.getElementById("slotsBooked");
        if(!localStorage.hasOwnProperty("jsonObject"))
        {
            localStorage.setItem("jsonObject", JSON.stringify(json_array));
        }
        else
        {
            json_array = JSON.parse(localStorage.getItem("jsonObject"));
        }
        console.log(json_array);
        for(var i=0;i<json_array.user.length;i++)
        {
            var user = json_array.user[i];
            if(user.email_id == userEmailId)
            {
                var slots = user.slots;
                var tr = document.createElement("tr");
                for(var j=0;j<slots.length;j++)
                {
                    var slotRow = slots[j];
                    var td1 = document.createElement("td");
                    td1.innerHTML = slotRow.tokenId;
                    tr.appendChild(td1);
                    var td2 = document.createElement("td");
                    td2.innerHTML = slotRow.slotDateTime;
                    tr.appendChild(td2);
                    var td3 = document.createElement("td");
                    td3.innerHTML = slotRow.custBank;
                    tr.appendChild(td3);
                    var td4 = document.createElement("td");
                    td4.innerHTML = slotRow.custBankBranch;
                    tr.appendChild(td4);
                    table.appendChild(tr);
                }

            }
        }

    });

}