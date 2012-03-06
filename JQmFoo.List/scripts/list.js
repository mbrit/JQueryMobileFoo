$("#list").live("pageinit", function(event) {
	initializeList();
});

function initializeList() {
	
	console.log("Initialize list page...");
	refreshList();
		
}

function refreshList() {

	// show...
	var args = ko.toJS(logonArgs);
	prepareRequest(args);
	
	//  make the call with jQuery...
	console.log("Calling HandleGetReportsByUser...");
    $.ajax({
        type: "POST",
        data: JSON.stringify(args),
        url: urlRoot + "HandleGetReportsByUser.ashx",
		success: function (data) {

			if(typeof data == "string")
				data = JSON.parse(data);
			if(data.isOk) {
				
				// bind the form...
				reportsViewModel = { 
					reports: JSON.parse(data.reports)
				}
				console.log(reportsViewModel.reports.length + " reports returned from server.");
				 if(reportsViewModel.reports.length > 0) {
				 		console.log("Example:");
				 		console.log(reportsViewModel.reports[0]);
					}
				
				var theList = $("#thelist");
				ko.applyBindings(reportsViewModel, theList[0]);
				
				// bind up the links...
				theList.find(".detaillink").click(function() {
					
					// store the selected item as data on the list...
					theList.data("selectedId", $(this).data("id"));
					
					// set...
					changePage("detail");
					
				});
				
			}
			else
				alert("Error: " + data.error);
		
        },
        error: handleAjaxFailure
    });

}


