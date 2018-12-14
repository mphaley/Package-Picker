var TEAMS_INVOLVED_WEIGHT = 10;
var DEMOTRIAL_WEIGHT = 10;
var REGULATED_WEIGHT = 10;


function Calculation(){

	var package_score = 0;

//question 1
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

//question 2
var demo = document.getElementById("demotrial");
var demo = demo.value;

if (demo == "Yes")
	package_score += DEMOTRIAL_WEIGHT;

//question 3
var reg = document.getElementById("regulated");
var reg = reg.value;

if (reg == "Yes")
	package_score += REGULATED_WEIGHT;

//question 4
var time = document.getElementById("timeline");
var time = time.value;


//question 5
var divisions = document.getElementById("regions");
var divisions = divisions.value;

//question 6
var pieces = document.getElementById("piecesofcontent");
var pieces = pieces.value;

//question 7
var sso = document.getElementById("SSO");
var sso = sso.value;

//question 8
var mdm = document.getElementById("MDM");
var mdm = mdm.value;

//question 9
var crm = document.getElementById("CRM");
var crm = crm.value;

//question 10
var integrations = document.getElementById("otherints");
var integrations = integrations.value;

//question 11
var customint = document.getElementById("custom");
var customint = customint.value;

// if (teams == "2-3") {
// 	document.getElementById('display').innerHTML = "Plus";
// }
// else{
// document.getElementById('display').innerHTML = "Essential";
// }

document.getElementById('display').innerHTML = package_score;

}