$("#detail").live("pageinit", function(event) {
	initializeDetail();
});

$("#detail").live("pagebeforeshow", function(event) {
	refreshDetailView();
});

function initializeDetail() {
	
	console.log("Initializing detail page...");

	$("#backbutton").click(function() { 
		changePage("list");
	});
		
}

function refreshDetailView() {

	// find the selected report from the complete list we've stored in memory...
	var selectedId = $("#thelist").data("selectedId");
	console.log("Updating detail view for report " + selectedId);

	// find it...
	var model = null;
	for(var index in reportsViewModel.reports) {
		if(reportsViewModel.reports[index]._id == selectedId) {
			model = reportsViewModel.reports[index];
			break;
		}
	}
	
	// show...
	ko.applyBindings(model, $("#detail")[0]);
	
}

