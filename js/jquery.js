/*Content*/

var pages = [
	"My Eportfolio",
	"History",
	"English",
	"Joe Bidenism",
]

/*Initialisation*/

var page = 0;
var prevPage = $(pages).length-1;
var nextPage = 1;

$(".topNavCenter").css({left: (($(".topNav").width()/2)-($(".topNavCenter").width()/2)), right: (($(".topNav").width()/2)-($(".topNavCenter").width()/2))});
$(".scrollDownContainer").css({left: (($(window).innerWidth()/2)-100), right: (($(window).innerWidth()/2)-100)});

function refreshCategory() {
	$(document).find(".category").text(pages[page]);
	$(document).find(".prevCat").text(pages[prevPage]);
	$(document).find(".nextCat").text(pages[nextPage]);
	$(".category").css({left: (($(".topNavCenter").width()/2)-($(".category").width()/2)), right: (($(".topNavCenter").width()/2)-($(".category").width()/2))});
};
refreshCategory();
window.onresize = function() {
	$(".topNavCenter").css({left: (($(".topNav").width()/2)-($(".topNavCenter").width()/2)), right: (($(".topNav").width()/2)-($(".topNavCenter").width()/2))});
	$(".category").css({left: (($(".topNavCenter").width()/2)-($(".category").width()/2)), right: (($(".topNavCenter").width()/2)-($(".category").width()/2))});
	$(".scrollDownContainer").css({left: (($(window).innerWidth()/2)-100), right: (($(window).innerWidth()/2)-100)});
};

/*Body*/

function previousPageFunction() {
	var x = $(pages).length-1;
	if ( page == 0 ) {
		page = x;
		nextPage = 0;
		prevPage = x-1;
	}
	else {
		page --;
		if ( nextPage != 0 ) {
			nextPage --;
		}
		else {
			nextPage = x;
		}
		if ( prevPage != 0 ) {
			prevPage --;
		}
		else {
			prevPage = x;
		}
	}
	refreshCategory();
};
function nextPageFunction() {
	var x = $(pages).length-1;
	if ( page == x ) {
		page = 0;
		nextPage = 1;
		prevPage = x;
	}
	else {
		page ++;
		if ( nextPage != x ) {
			nextPage ++;
		}
		else {
			nextPage = 0;
		}
		if ( prevPage != x ) {
			prevPage ++;
		}
		else {
			prevPage = 0;
		}
	}
	refreshCategory();
};
$(".prevCatContainer").click(previousPageFunction);
$(".nextCatContainer").click(nextPageFunction);
$(document).keyup(function(e) {
	var x = $(pages).length-1;
	switch(e.keyCode || e.which) {
		case 37:
			previousPageFunction();
		break;

		case 39:
			nextPageFunction();
		break;

		default: return;
	}
	e.preventDefault();
});