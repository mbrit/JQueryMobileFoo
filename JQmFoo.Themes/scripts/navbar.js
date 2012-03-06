$(".page").live("pagebeforeshow", function(e) {

	// find the navbar...
	var navbar = $("#navbar");
	
	// find the new footer...
	var newFooter = null;
	$.each($(this).find("div"), function() {
		if($(this).data("role") == "footer") {
			newFooter = $(this);
		}
	});
	
	// detach from one...
	navbar.detach();
	
	// ...attach to the other...
	navbar.appendTo(newFooter);

});