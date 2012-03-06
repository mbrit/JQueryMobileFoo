var maxId = 3;

$("#main").live("pageinit", function(event) {
	initialize();
});

function initialize() {
	
	console.log("Initializing...");
		
	// subscribe...
	$("#photo").live("swiperight", function(e) { 
		alert("Right!");
	});
	$("#photo").live("swipeleft", function(e) { 
		alert("Left!");
	});
	
	// show a picture...
	showPicture(0);
		
}

function swipe(direction) {

	var current = getCurrentId();
	if(direction < 0) {
		current--;
		if(current < 0)
			current = maxId;	
	} else {
		current++;
		if(current == maxId)
			current = 0;
	}
	
	// show...
	showPicture(current);
	
}

function getCurrentId() {
	return $("#photo").data("selectedId");
}

function showPicture(id) {
	
	// get...
	var image = $("#photo");
	
	image.fadeOut(null, function() {
	
		image.attr("src", "dogs/dog" + id + ".jpg");
		image.data("selectedId", id);
	
		image.fadeIn();
	
	});
	
}


