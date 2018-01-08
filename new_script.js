 var ws = new cloudmine.WebService({
             appid: '97e63038b4d8d04c9848d50a3eb072a8',
             apikey: '37c0cea7998e4c5f9486646843baee41'
         });
//connecting to cloudmine app.


function createUser() {

	var userEmail = document.getElementById('userEmail').value;
	console.log(userEmail);
	var userPassword = document.getElementById('userPassword').value;
	console.log(userPassword);
	var userTeam = document.getElementById('userTeam').value;
	console.log(userTeam);

	ws.createUser(userEmail, userPassword, {profile: {team: userTeam}});

	console.log("successfully created user")
  alert("Thank you for signing up!");
}


function loginWithCreds() {

var userLoginUsername = document.getElementById('userLoginEmail').value;
console.log(userLoginUsername);
var userLoginPassword = document.getElementById('userLoginPassword').value;
console.log(userLoginPassword);

ws.login(userLoginUsername, userLoginPassword).on('success', function(data, response) {
	 console.log(data.profile.team);
   var team = data.profile.team;
	 	 // alert("your session token is " + data.session_token);
     document.cookie = "team=" + team;
  localStorage.setItem('cm_session', response.session_token);
  localStorage.setItem('team', team);

 //window.location.href="login.html";         
});
}


// function sendMedication() {
    
//     var medName = document.getElementById('medicationName').value;

//          var medNameValidator = isNaN(medName);
//          console.log(medNameValidator);

//         if (medNameValidator == true) {
//         var lc_medname = medName.toLowerCase();
//         var medAmt = document.getElementById('medicationAmt').value;
//         ws.set(lc_medname, {
//         Medication: lc_medname,
//         Amount: medAmt,
//         }).on('success', function(data, response) {
//         console.log(data);
//         if(!alert('You have successfully logged your Medication!'))
//             {window.location.reload();}
//          })
//         } else {
//             alert ('invalid entry, try again');
//             document.getElementById('medicationName').value = '';
//             document.getElementById('medicationAmt').value = '';
//         }
//     };
    


// function takeMedication() {

//     var takeMedName = document.getElementById('medicationDropdown').value;
//     var takeMedAmt = document.getElementById('takeMedicationAmt').value;
//     // console.log(takeMedName);

//     ws.get(takeMedName).on('success', function(data, response) {
//         var string = JSON.stringify(data);
//         var obj = JSON.parse(string);
//         var oldMedAmount = obj[takeMedName].Amount;
//         var newMedAmount = oldMedAmount - takeMedAmt;
//         console.log(oldMedAmount);
//         console.log(newMedAmount);

//         if (oldMedAmount === 0) {
//             alert('you have 0 pills left!');
//         } else if (newMedAmount < 0) {
//             alert ('You have requested to withdraw too many pills! you asked for ' + takeMedAmt + 
//                 ' but you only have ' + oldMedAmount + ' left!');
//         } else {
//             console.log(newMedAmount);
//             updateMedication(takeMedName, newMedAmount);
//             function updateMedication(x, y) {
//             ws.update(x, {Amount: y}, {extended_responses: true})
//                 .on('success', function(data, response) {
//                     console.log(data);
//                 }).on('error', function(err, response) {
//                     console.log(err);
//                 }).on('complete', function(data, response) {
//                     console.log('finished request', data)

//             alert('You have successfully taken your Medication!');
//             document.getElementById('takeMedicationAmt').value = '';
//             });
//         }
//     };

//         //console.log(newMedAmount);
//         //trigger update medication after doing the math above. pass in name of medication for the search and the new amount.
//         //updateMedication(takeMedName, newMedAmount);


//         //function updateMedication(x, y) {
//             //ws.update(x, {Amount: y}, {extended_responses: true})
//                 //.on('success', function(data, response) {
//                    // console.log(data);
//                 //}).on('error', function(err, response) {
//                     //console.log(err);
//                 //}).on('complete', function(data, response) {
//                     //console.log('finished request', data)

//             //alert('You have successfully taken your Medication!');
        

//             //});
//         //}
//     })
// }

// function deleteSingleMedication() {
//     var medToDelete = document.getElementById('medicationDropdown2').value;
//     ws.destroy(medToDelete).on('success', function(data, response) {
//         console.log(data);
//         if(!alert('successfully deleted ' + medToDelete + '!'))
//             {window.location.reload();}
//     });
// }


// function deleteAllMedications() {
//     var res = prompt("Are you sure you want to continue? Y or N");

//     if (res != null) {
//         if (res === 'Y') {
//             ws.destroy(null, {
//                 all: true
//             }).on('success', function(data, response) {
//                 console.log(data);
//                 alert('transaction complete - all data deleted');
//             });
//         } else if (res === 'N') {
//             alert('transaction aborted - nothing was deleted');
//         } else {
//             alert('invalid entry - please use Y or N');
//         }
//     };
// }

// function buildMedicationListDeleteSection() {
//     ws.get({
//         limit: -1
//     }).on('success', function(data, response) {
//         console.log(data);
//         var medicationList = document.getElementById('medicationDropdown2');
//         const keyNames = Object.keys(data);
//         console.log(keyNames);
//         var i = Object.keys(data).length - 1;
//         console.log(i);
//         while (i >= 0) {
//              medicationList.options[medicationList.options.length] = new Option(keyNames[i], keyNames[i]);
//             i--;
//         }
//     });
// }

// function buildMedicationList() {
//     console.log('triggered2');
//     ws.get({
//         limit: -1
//     }).on('success', function(data, response) {
//         console.log(data);
//         var medicationList = document.getElementById('medicationDropdown');
//         const keyNames = Object.keys(data);
//         console.log(keyNames);
//         var i = Object.keys(data).length - 1;
//         console.log(i);
//         while (i >= 0) {
//              medicationList.options[medicationList.options.length] = new Option(keyNames[i], keyNames[i]);
//             i--;
//         }
//     });
// }

// // function buildTable() {
// //  ws.get({
// //         limit: -1
// //     }).on('success', function(data, response) {
// //         console.log(data);
// //         var r = Object.keys(data);
// //         var rLength = Object.keys(data).length -1;
// //         console.log(r);
// //         console.log(rLength);

// //         while (rLength >= 0) {
// //             console.log("reaching this");
// //             var table = document.getElementById("medicationTable");
// //             var row = table.insertRow(0);
// //             var cell1 = row.insertCell(0);
// //             var cell2 = row.insertCell(1);
// //             cell1.innerHTML = "new value";
// //             cell2.innerHTML = "new value";
// //             var val = Object.keys(data[i]).Amount;
// //             console.log(val);
// //             rLength--;
// //         }

// //     });
// // }

// function buildTable() {
//  ws.get({
//         limit: -1
//     }).on('success', function(data, response) {
//         var listGroup = document.getElementById("medListGroup");
//         while (listGroup.childNodes.length > 2) {
//             listGroup.removeChild(listGroup.lastChild);
//         }
//         for(var med in data) {
//             var medName = data[med].Medication
//             var medCount = data[med].Amount

//             var a = document.createElement("a");
//             a.className = "list-group-item list-group-item-action flex-column align-items-start"
//             var div = document.createElement("div");
//             div.className = "d-flex w-100 justify-content-between"
//             var h2 = document.createElement("h2");
//             h2.className = "mb-1"
//             var p = document.createElement("p");
//             p.className = "mb-1"

//             var headerText = document.createTextNode(medName)
//             var pText = document.createTextNode("Remaining count: " + medCount)

//             h2.appendChild(headerText)
//             p.appendChild(pText)

//             div.appendChild(h2)
//             a.appendChild(div)
//             a.appendChild(p)

//             listGroup.appendChild(a)

//             console.log(medName + " " + medCount)

//         }

        // var r = Object.keys(data);
        // var rLength = Object.keys(data).length -1;
        // console.log(r);
        // console.log(rLength);

        // while (rLength >= 0) {
        //     console.log("reaching this");
        //     var table = document.getElementById("medListGroup");
        //     var medName = 'test name'
        //     var medCount = 10

        //     var val = Object.keys(data[i]).Amount;
        //     console.log(val);
        //     rLength--;
        // }

//     };
// }
