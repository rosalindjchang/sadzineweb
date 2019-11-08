/*eslint-env browser*/ 
/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function(){
 	
	
	$(".menu").mouseover(function(){
        $(".menu").removeClass("menuin");
		$(".menuspace").removeClass("none");
		$(".content").addClass("menuout");
    });
    $(".menuspace").mouseout(function(){
        $(".menu").addClass("menuin");
		$(".menuspace").addClass("none");
		$(".content").removeClass("menuout");
    });
	
	$(document).mouseleave(function () {
    	$(".menu").addClass("menuin");
		$(".menuspace").addClass("none");
		$(".content").removeClass("menuout");
    });
	
	// happy page
	
	 $("happypg").click(function(){ 
		$(".content").addClass("hidden");
		 $(".menu").addClass("menuin noaction");
        setTimeout(function() {
           window.location = "1.html";
			$(".menu").removeClass("noaction");
         },1000);
     });
	
	// sad page
	
	 $("sadpg").click(function(){ 
		$(".content").addClass("hidden");
		 $(".menu").addClass("menuin noaction");
        setTimeout(function() {
           window.location = "s1.html";
			$(".menu").removeClass("noaction");
         },1000);
     });
	
	 $("mehpg").click(function(){ 
		$(".content").addClass("hidden");
		 $(".menu").addClass("menuin noaction");
        setTimeout(function() {
           window.location = "m1.html";
			$(".menu").removeClass("noaction");
         },1000);
     });
	
	 $("home").click(function(){ 
		$(".content").addClass("hidden");
		 $(".menu").addClass("menuin noaction hidden");
        setTimeout(function() {
           window.location = "index.html";
			$(".menu").removeClass("noaction");
         },1000);
     });
	
	 $("filmpg").click(function(){ 
		$(".content").addClass("hidden");
		 $(".menu").addClass("menuin noaction");
        setTimeout(function() {
           window.location = "f1.html";
			$(".menu").removeClass("noaction");
         },1000);
     });
	
	
	
});