var logonArgs = {
	username: ko.observable(""),
	password: ko.observable(""),
}

$("#logon").live("pageinit", function(event) {
	initializeLogon(this);
});

function initializeLogon(owner) {
	
	console.log("Initializing logon...");
	
	// register...
	$("#logonbutton").click(handleLogon);
		
	// bind the form...
	ko.applyBindings(logonArgs, owner);
		
}

function handleLogon() {

	// retrieve the args from the form...
	var args = ko.toJS(logonArgs);
	prepareRequest(args);
	
	// disable the button...
	$("#logonbutton").attr("disabled", true);

	//  make the call with jQuery...
	console.log("Calling Logon...");
	console.log(JSON.stringify(args));
    $.ajax({
        type: "POST",
        data: JSON.stringify(args),
        url: urlRoot + "HandleLogon.ashx",
		success: function (data) {

			if(typeof data == "string")
				data = JSON.parse(data);
			if(data.isOk) {
				
				// set the token...
				console.log("Storing logon token: " + data.token);
				logonToken = data.token;
				
				// change the page...
				ensureTestReports();
				
			}
			else
				alert("Error: " + data.error);
		
        },
        error: handleAjaxFailure,
        complete: function() {

			// put the button back...
			$("#logonbutton").attr("disabled", false);

        }
    });
	
}

function ensureTestReports() {
	
	// create some (blank) args...
	var args = {};
	prepareRequest(args);
	
	//  make the call with jQuery...
	console.log("Calling EnsureTestReports...");
	console.log(JSON.stringify(args));
    $.ajax({
        type: "POST",
        data: JSON.stringify(args),
        url: urlRoot + "HandleEnsureTestReports.ashx",
		success: function (data) {
			
			// show the list...
			changePage("list");
		
        },
        error: handleAjaxFailure
    });
	
}
