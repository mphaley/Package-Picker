
////////// PICKER WEIGHTINGS /////////
var PLATFORM_WEIGHT;
var TEAMS_INVOLVED_WEIGHT;
var DEMOTRIAL_WEIGHT;
var REGULATED_WEIGHT;
var TIMELINE_WEIGHT;
var DIVISION_WEIGHT;
var PIECES_WEIGHT;
var LICENCES_WEIGHT;
var CRM_WEIGHT;
var SSO_WEIGHT;
var MDM_WEIGHT;
var INTEGRATIONS_WEIGHT;
var CUSTOM_WEIGHT;
var TEST_WEIGHT;
////////// LIMITS /////////////
var ESSENTIAL_LIMIT;
var PLUS_LIMIT;
var ULTIMATE_LIMIT;
////////// DETAIL PAGES /////////
var ESSENTIAL_PAGE = "";
var PLUS_PAGE = "";
var ULTIMATE_PAGE = "";
var CUSTOM_SOW_WEIGHT = "";


//////////////////////////////////////

window.onShowpadLibLoaded = function () {
  initApp();
};

function initApp() {
  var queryParams = readQueryParams(window.location.search);
  var configUrl = decodeURIComponent(queryParams['configUrl']);

  var xhr = new XMLHttpRequest();
  xhr.addEventListener("load", function() {
    if (xhr.readyState === xhr.DONE && xhr.status === 200) {
      var config = JSON.parse(xhr.responseText);
      //var titleEl = document.getElementById('title');
     // titleEl.innerHTML = config.labels.homepage.title.value;


	PLATFORM_WEIGHT = Number(config.labels.weights.platform_weight.value);

	TEAMS_INVOLVED_WEIGHT = Number(config.labels.weights.Teams_Involved_Weight.value);

	DEMOTRIAL_WEIGHT = Number(config.labels.weights.Trial_Weight.value);

	REGULATED_WEIGHT = Number(config.labels.weights.Regulated_Weight.value);

	TIMELINE_WEIGHT = Number(config.labels.weights.Timeline_Weight.value);

	DIVISION_WEIGHT = Number(config.labels.weights.Division_Weight.value);

	PIECES_WEIGHT = Number(config.labels.weights.Pieces_of_Content_Weight.value);

	LICENCES_WEIGHT = Number(config.labels.weights.License_Count_Weight.value);

	CRM_WEIGHT = Number(config.labels.weights.CRM_Weight.value);

	SSO_WEIGHT = Number(config.labels.weights.SSO_Weight.value);

	MDM_WEIGHT = Number(config.labels.weights.MDM_Weight.value);

	INTEGRATIONS_WEIGHT = Number(config.labels.weights.Integrations_Weight.value);

	CUSTOM_WEIGHT = Number(config.labels.weights.Custom_Stuff_Weight.value);

	ESSENTIAL_LIMIT = Number(config.labels.limits.Essential_Limit.value);
	PLUS_LIMIT = Number(config.labels.limits.Plus_Limit.value);
	ULTIMATE_LIMIT = Number(config.labels.limits.Ultimate_Limit.value);



    ESSENTIAL_PAGE = config.contents.Essential.value[0];
    PLUS_PAGE = config.contents.Plus.value[0];
    ULTIMATE_PAGE = config.contents.Ultimate.value[0];
    CUSTOM_SOW_PAGE = config.contents.CustomSOW.value[0];
    
   	ESSENTIAL_PAGE = config.assets[ESSENTIAL_PAGE].slug;
    PLUS_PAGE = config.assets[PLUS_PAGE].slug;
    ULTIMATE_PAGE = config.assets[ULTIMATE_PAGE].slug;
    CUSTOM_SOW_PAGE = config.assets[CUSTOM_SOW_PAGE].slug;


	//document.getElementById('test').innerHTML = ESSENTIAL_PAGE;

    }
  });
  xhr.open("GET", configUrl);
  xhr.send();
}

function readQueryParams(params) {
  return params.substr(1).split("&").reduce(function(acc, pair) {
    if (!pair) {
      return acc;
    }
    var parts = pair.split("=");
    acc[parts[0]] = parts[1];
    return acc;
  }, {})
}

// function initApp() {
// 	var xmlhttp = new XMLHttpRequest();
// 	var url = "config.json"
	
// 	xmlhttp.onreadystatechange = function() {
// 		 if (this.readyState == 4 && this.status == 200) {
// 		 	var myArr = JSON.parse(this.responseText);
		 	 
// 		 	 TEST_WEIGHT = myArr.labels.testweight.value;
// 		 	 document.getElementById('test').innerHTML = TEST_WEIGHT;

// 		 }
// 	};

// 	xmlhttp.open("GET", url, true);
// 	xmlhttp.send();

// }



function Calculation(){

	var package_score = 0;

//question 1
var plat = document.getElementById("platform");
var plat = plat.value;

switch (plat){
	case "Content":
	//	package_score += PLATFORM_WEIGHT;
	break;
	case "Training & Coaching":
	//	package_score += PLATFORM_WEIGHT;
	break;
	case "Both":
		package_score += PLATFORM_WEIGHT;
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
	var pageurl = "";
	if (package_score < ESSENTIAL_LIMIT){
		// working line ->document.getElementById('display').innerHTML = "Essential";
		document.getElementById('display').innerHTML = "Essential";
		var finalpage = document.getElementById("thepage")
		pageurl = "showpad://file/" + ESSENTIAL_PAGE;
		finalpage.setAttribute('href', pageurl);

	}	
	if (package_score >= ESSENTIAL_LIMIT && package_score < PLUS_LIMIT) {
		document.getElementById('display').innerHTML = "Plus";
		var finalpage = document.getElementById("thepage")
		 pageurl = "showpad://file/" + PLUS_PAGE;
		 finalpage.setAttribute('href', pageurl);
	}
	if (package_score >= PLUS_LIMIT && package_score < ULTIMATE_LIMIT) {
		document.getElementById('display').innerHTML = "Ultimate";
		var finalpage = document.getElementById("thepage")
		 pageurl = "showpad://file/" + ULTIMATE_PAGE;
		 finalpage.setAttribute('href', pageurl);
	}
	if (package_score >= ULTIMATE_LIMIT) {
		document.getElementById('display').innerHTML = "Custom SOW";
		var finalpage = document.getElementById("thepage")
		 pageurl = "showpad://file/" + CUSTOM_SOW_PAGE;
		 finalpage.setAttribute('href', pageurl);
		}
 

 //var finalpage = document.getElementById("thepage")
 //finalpage.setAttribute('href', "showpad://file/1b7936c1cf3ed1952701821813bfcfed")

	//document.getElementById('display').innerHTML = TEAMS_INVOLVED_WEIGHT;


}


function pagesoutput() {

window.open("showpad://file/1b7936c1cf3ed1952701821813bfcfed", "_blank");

}