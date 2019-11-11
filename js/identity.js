
/*eslint-env browser*/ 
/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function(){


	
	
	if (window.location.pathname == "sadzineweb/m1.html") {
		$(".content").removeClass("hidden");
		setTimeout(function() {
          	$(".do, .happened, .done").removeClass("lefthid");
			$(".box1, .box2, .box3").removeClass("boxhid");
			$(".dash1, .dash2, .dash3").removeClass("dashhid");
         },500);
	}
	
	$(".box3a").click(function(){
		console.log("3");
		$(".box1").addClass("boxm1").removeClass("box1a");
		$(".box2").addClass("boxm2").removeClass("box2a");
		$(".box3").addClass("boxm3").removeClass("box3a");
		$(".tanxious ,.tdepressed, .ttrauma").removeClass("hidden");
		$(".do, .happened, .done").addClass("byetext");
		$(".dash1").addClass("dasha");
		$(".dash2").addClass("dashd");
		$(".dash3").addClass("dasht");
	});
	
	$(document).on('click', '.boxm1', function(){
		console.log("box");
		$(".dash2").removeClass("dashd");
		$(".dash1").removeClass("dasha").addClass("dashi1");
		$(".dash3").removeClass("dasht").addClass("dashi4");
		$(".dash4").removeClass("hidden").addClass("dashi3");
		$(".student, .leader, .member, .runner").removeClass("hidden");
		$(".tanxious ,.tdepressed, .ttrauma").addClass("byetext");
		$(".box1").addClass("boxi1").removeClass("boxm1");
		$(".box2").addClass("boxi3").removeClass("boxm2");
		$(".box3").addClass("boxi4 noaction").removeClass("boxm3");
		$(".box4").removeClass("hidden").addClass("boxi2");
	});

		
	
	$(".box4").click(function(){
		$(".box3").addClass("boxdown3");
		$(".box2").addClass("boxdown2");
		$(".box1").addClass("boxdown1");
		$(".box4").addClass("boxdown4").removeClass("box4h");
		setTimeout(function() {
			$(".box4").addClass("boxy");
		 }, 200);
		$(".dash1, .dash4, .dash2").addClass("dashhid2");
		$(".dash3").addClass("dashgurl");
		$(".student, .leader, .member, .runner").addClass("byetext");
		$(".smallgurl").removeClass("hidden");
		$(".identitymain").addClass("identitydown");
	});
	

	$(document).on('click', '.boxy', function(){
		$("#meh1, .smallgurl, .identitymain").addClass("byetext");
		$(".dash3").addClass("dashhid2");
		$(".boxy").removeClass("boxdown4");
		$(".box, .boxy").addClass("boxid");
		$("#meh2").removeClass("byetext");
		setTimeout(function() {
			$(".box").addClass("byetext");
			$(".boxy").addClass("rounding rounder");
		 }, 1100);
	});
	
	$(document).on('click', '.rounding', function(){
		setTimeout(function() {
			$(".rounder").removeClass("rounding boxy box4").addClass("circlebox");
		 }, 1200);
		$("#meh3").removeClass("byetext");
		$("#meh2").addClass("byetext");
	});	
	
	
});