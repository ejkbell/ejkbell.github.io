/*Content*/

var pages = [
	["My Eportfolio", "<span style='text-align: center'><i>Welcome</i></span><br><br>This “eportfolio” is a school-prescribed collation of both personal and collaborative work that reflects my individual academic strengths and interests. It additionally contains work produced outside of school that I have deemed of a high enough quality to be publicised – such as my foray into reportative journalism.<br><br>This eportfolio is a representation of my capabilities as a 21st century learner – which, per the definition of Glenunga International High School, is possessing a degree of ability beyond repetition of the teacher and/or textbooks – so almost every student in the developed world.<br><br>However, it does preach the importance of the so-called “4Cs” – collaboration, creativity, communication, and critical thinking – which are the cornerstones of academic prosperity and success in secondary education.<br><br>Each work in this eportfolio is displayed as my best demonstration of the application of these skills, including the medium of the eportfolio itself – yes, this website was hard-coded, however questionably well."],
	["History", "Hello this is history"],
	["English", "<i>The Tsardom for the People</i> - Collaboration<br><br><iframe src='https://drive.google.com/file/d/10joi56FLc62X44HlM4rpW_Ch76I4DzBZ/preview' width='800' height='600'></iframe><br><br>As serious collaborative projects in the IB program are few and far between, this transformative task from Year 10 is perhaps the best (and most recent) example of effective collaboration. <br><br>Our group, having studied <i>War and Peace</i> for the past term, produced a transformative piece on Tolstoy's work - a fictional copy of a local, loyalist Russian newspaper, offering insight and critiques into current affairs (in essence and unintended predecessor to the Daily Mail then). <br><br>While the content itself is, for the most part, devoid of any critical analysis of <i>War and Peace</i>, it was the collaborative efficiency of the task, and our ability to quickly and effectively cooperate during the idea generation, drafting and formatting/styling phases that grants this specific piece its relevance to the eportfolio.<br><br><br><br><i>Maus Global Issues Multimodal - Communication</i><br><br><iframe src='https://drive.google.com/file/d/1OsTbn5u64FHPrzFedR4RntPjVBundKmJ/preview' width='800' height='450'></iframe><br><br>This task was produced under the context of practice for the Global Issues Oral - a mandated summative IB English assessment, whereby two texts (with at least one in translation) are compared and contrasted with respect to a defined 'global issue'. For this specific task the oral was limited to a two-page extract from Art Spiegelman's <i>Maus</i>, analysed with respect to a self-conceived global issue over the course of five minutes.<br><br>As I believe I was able to fully analyse the extract under the context of my selected global issue, I have chosen to place this piece under communication, as it is a prime example of an ability to convey complex arguments and analysis in a concise and legible manner."],
	["Journalism", "Hello this is journalism"],
]

/*Initialisation*/

var page = 0;
var prevPage = $(pages).length-1;
var nextPage = 1;

$(".topNavCenter").css({left: (($(".topNav").width()/2)-($(".topNavCenter").width()/2)), right: (($(".topNav").width()/2)-($(".topNavCenter").width()/2))});
$(".scrollDownContainer").css({left: (($(window).innerWidth()/2)-100), right: (($(window).innerWidth()/2)-100)});
$(".content-container").css({left: (($(window).width()/2)-(($(".content-container").width()/2)+100)), right: (($(window).width()/2)-(($(".content-container").width()/2)+100))});
$(".content-container").css({top: (($("main").outerHeight()/2)-(($(".content-container").outerHeight()/2))), bottom: (($("main").outerHeight()/2)-(($(".content-container").outerHeight()/2)))});

function refreshCategory() {
	$(document).find(".category").text(pages[page][0]);
	$(document).find(".prevCat").text(pages[prevPage][0]);
	$(document).find(".nextCat").text(pages[nextPage][0]);
	$(document).find(".content").html(pages[page][1]);
	$(".category").css({left: (($(".topNavCenter").width()/2)-($(".category").width()/2)), right: (($(".topNavCenter").width()/2)-($(".category").width()/2))});
};
refreshCategory();
window.onresize = function() {
	$(".topNavCenter").css({left: (($(".topNav").width()/2)-($(".topNavCenter").width()/2)), right: (($(".topNav").width()/2)-($(".topNavCenter").width()/2))});
	$(".category").css({left: (($(".topNavCenter").width()/2)-($(".category").width()/2)), right: (($(".topNavCenter").width()/2)-($(".category").width()/2))});
	$(".scrollDownContainer").css({left: (($(window).innerWidth()/2)-100), right: (($(window).innerWidth()/2)-100)});
	$(".content-container").css({left: (($(window).width()/2)-(($(".content-container").width()/2)+100)), right: (($(window).width()/2)-(($(".content-container").width()/2)+100))});
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

$(window).scroll(function() {
	if ($(document).scrollTop() < $(window).innerHeight()) {
		$(document).scrollTop() = $(window).innerHeight();
	}
});