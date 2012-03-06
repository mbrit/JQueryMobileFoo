$(".page").live("pageshow", function() {
	alert($.mobile.activePage.attr("id"));
});
