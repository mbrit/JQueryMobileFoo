$("#main").live("pageinit", function(event) {
	initialize();
});

function initialize() {
	$("#showbusybutton").click(handleShowBusy);
	$("#showverybusybutton").click(handleShowVeryBusy);
}

function handleShowBusy() {
	
	// show...
	$.mobile.showPageLoadingMsg();	
	
	// hide in a short while...
	lazyHideBusy();
}

function lazyHideBusy() {
	window.setTimeout("hideBusy()", 1500);
}

function hideBusy() {
	$.mobile.hidePageLoadingMsg();
}

function handleShowVeryBusy() {
	
	// show...
	$.mobile.showPageLoadingMsg(null, "I'm very busy!");

	// set...
	lazyHideBusy();
	return false;

}

