var urlRoot = "https://streetfoo.apphb.com/Handlers/";
//var urlRoot = "http://192.168.1.10/streetfoo/Handlers/";

// we'll store the logon token here for later user...
var logonToken = null;

// store the list view for later use...
var reportsViewModel = null;

function prepareRequest(args) {

	// always need the api...
	args.apiKey = "e5b868c4-8e03-4e8b-84b9-20be67fceaff";

	// if we're logged in, pass up the token...
	if(logonToken != null)
		args.logonToken = logonToken;
	
}

function handleAjaxFailure(err) {
	console.log(JSON.stringify(err));
	alert("The server call failed.");
}

function changePage(name) {
	console.log("Changing page: " + name);
	$.mobile.changePage($("#" + name));
}