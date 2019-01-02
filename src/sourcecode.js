
////////// PICKER WEIGHTINGS /////////
var PLATFORM_WEIGHT = 10;
var TEAMS_INVOLVED_WEIGHT = 5;
var DEMOTRIAL_WEIGHT = 5;
var REGULATED_WEIGHT = 4;
var TIMELINE_WEIGHT = 6;
var DIVISION_WEIGHT = 10;
var PIECES_WEIGHT = 7;
var LICENCES_WEIGHT = 7;
var CRM_WEIGHT = 7;
var SSO_WEIGHT = 5;
var MDM_WEIGHT = 5;
var INTEGRATIONS_WEIGHT = 5;
var CUSTOM_WEIGHT = 50;
//////////////////////////////////////

window.onShowpadLibLoaded = function () {
  initApp();
};

// function initApp() {
// 	var xhr = new XMLHttpRequest();
//   xhr.addEventListener("load", function() {
//     if (xhr.readyState === xhr.DONE && xhr.status === 200) {
//       var config = JSON.parse(xhr.responseText);
// 	document.getElementById('page').innerHTML = config.contents.Essential.type;

//     }
//   });

// xhr.open("GET", configUrl);
// xhr.send();


// }

function initApp() {
	var xmlhttp = new XMLHttpRequest();
	var url = "config.json"
	
	xmlhttp.onreadystatechange = function() {
		 if (this.readyState == 4 && this.status == 200) {
		 	var myArr = JSON.parse(this.responseText);
		 	 
		 	 document.getElementById('page').innerHTML = myArr.assets[0].id;

		 }
	};

	xmlhttp.open("GET", url, true);
	xmlhttp.send();
}



function Calculation(){

	var package_score = 0;

//question 1
var plat = document.getElementById("platform");
var plat = plat.value;

switch (plat){
	case "Content":
		package_score += PLATFORM_WEIGHT;
	break;
	case "Training & Coaching":
		package_score += PLATFORM_WEIGHT;
	break;
	case "Both":
		package_score += 2*PLATFORM_WEIGHT;
	break;

}

//question 2
var teams = document.getElementById("teamsinvolved");
var teams = teams.value;

switch (teams){
	case "1":
		break;
	case "2-3":
		package_score += TEAMS_INVOLVED_WEIGHT;
		break;
	case "4+":
		package_score += 2*TEAMS_INVOLVED_WEIGHT;
		break;
}

//question 3
var demo = document.getElementById("demotrial");
var demo = demo.value;

if (demo == "Yes")
	package_score += DEMOTRIAL_WEIGHT;

//question 4
var reg = document.getElementById("regulated");
var reg = reg.value;

if (reg == "Yes")
	package_score += REGULATED_WEIGHT;

//question 5
var time = document.getElementById("timeline");
var time = time.value;

if (time == "Yes")
	package_score += TIMELINE_WEIGHT;

//question 6
var divisions = document.getElementById("regions");
var divisions = divisions.value;

switch (divisions){
	case "One":
		break;
	case "Two-Four":
		package_score += DIVISION_WEIGHT;
		break;
	case "FivePlus":
		package_score += 2*DIVISION_WEIGHT;
		break;
}

//question 7
var pieces = document.getElementById("piecesofcontent");
var pieces = pieces.value;

switch (pieces){
	case "zeroTo1000":
		break;
	case "1000to5000":
		package_score += PIECES_WEIGHT;
		break;
	case "5000plus":
		package_score += 2*PIECES_WEIGHT;
		break;

}

//question 8
var licences = document.getElementById("licensecount");
var licences = licences.value;

switch (licences){
	case "zeroTo200":
		break;
	case "200to1000":
		package_score += LICENCES_WEIGHT;
		break;
	case "1000plus":
		package_score += 2*LICENCES_WEIGHT;
		break;

}

//question 9
var crm = document.getElementById("CRM");
var crm = crm.value;

switch (crm){
	case "Salesforce":
		package_score += CRM_WEIGHT;
		break;
	case "Dynamics":
		package_score += CRM_WEIGHT;
		break;
	case "C4C":
		package_score += CRM_WEIGHT;
		break;
	case "Other":
	package_score += CRM_WEIGHT;
		break;
		case "None":
	break;

}

//question 10
var sso = document.getElementById("SSO");
var sso = sso.value;

if (sso == "Yes")
	package_score += SSO_WEIGHT;

//question 11
var mdm = document.getElementById("MDM");
var mdm = mdm.value;

if (mdm == "Yes")
	package_score += MDM_WEIGHT;

//question 12
var integrations = document.getElementById("otherints");
var integrations = integrations.value;

if (integrations == "Yes")
	package_score += INTEGRATIONS_WEIGHT;

//question 13
var customint = document.getElementById("custom");
var customint = customint.value;

if (customint == "Yes")
	package_score += CUSTOM_WEIGHT;

// if (teams == "2-3") {
// 	document.getElementById('display').innerHTML = "Plus";
// }
// else{
// document.getElementById('display').innerHTML = "Essential";
// }

document.getElementById('display').innerHTML = package_score;


}