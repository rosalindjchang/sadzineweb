/*eslint-env browser*/ 
/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function(){
    
	//menu
	
	 $("happypg").click(function(){ 
		$(".content").addClass("hidden");
        setTimeout(function() {
           window.location = "index.html";
         },1000);
     });
        
	
	
	// page 1 load
	

	$(window).on('load', function () {
		$(".content").removeClass("hidden");
	});
	
	
    // from page 1 to page 2
	
	
    
    $("#click1").click(function(){ 
		$("p").addClass("hidden slide");
		$(".img1").addClass("noaction expand1");
        setTimeout(function() {
           window.location = "2.html";
         },1000);
     });
	
	
	if (location.pathname == "/2.html" ) {
		$(".img2").removeClass("slide2");
        $("happy").mouseover(function(){
            $(".img2").addClass("openeyes");
        });
        $("happy").mouseout(function(){
            $(".img2").removeClass("openeyes");
        });
      } 
    
    
    // from page 2 to 3
        
      $("#click2").click(function(){ 
		$(".img2").addClass("slide2 hidden");
		$("p").addClass("hidden");
        setTimeout(function() {
           window.location = "3.html";
         },500);
       });
          
        if (location.pathname == "/3.html" ) {
			$(".img3").removeClass("lower3");
            $(window).click(function(){
                var x = event.clientX;
                var y = event.clientY;
                var stickerface = document.getElementById("sticky");
                $("#sticky").clone().appendTo("body");
                stickerface.style.display = '';
                stickerface.style.position = "absolute";
                stickerface.style.left = x - 10 + "px";
                stickerface.style.top = y - 10 + "px";
            });
        }       
        
        $("someone").mouseover(function(){
            $(".img3").addClass("sad3");
            $("noone").addClass("lighttext");
            $(".textsomeone2").addClass("blacktext");
        });
        $("someone").mouseout(function(){
            $(".img3").removeClass("sad3");
            $("noone").removeClass("lighttext");
            $(".textsomeone2").removeClass("blacktext");
        });
    
    // from page 3 to 4
    
         $("someone").click(function(){ 
			 $(".img3").addClass("expand");
			 $("p").addClass("byetext");
            setTimeout(function() {
                window.location = "4.html";
            },1100);
          });
	
    	if (location.pathname == "/4.html" ) {
			$("svg, p").removeClass("hidden");
		} 	
	
	// from 4 to 5
	
	$("anxiety").click(function(){ 
	    	$("svg").addClass("higher");	
			$("p").addClass("noaction hidden");
        	setTimeout(function() {
                window.location = "5.html";
            },1100);
       });
	
	if (location.pathname == "/5.html") {
		$("svg").removeClass("hidden").addClass("noaction darkline");
		$("body").removeClass("dark");
		$("smile").mouseover(function(){
            $(".img5").addClass("smile2");
        });
        $("smile").mouseout(function(){
            $(".img5").removeClass("smile2");
        });
	}
	
	// from 5 to 6
	
	
    $("smile").click(function(){ 
		$(".img5, p, svg").addClass("hidden");
		$("svg").removeClass("higher");
        setTimeout(function() {
           window.location = "6.html";
         },400);
     });
	
	if (location.pathname == "/6.html") {
		$("p").removeClass("hidden");
        $(".img6").removeClass("hidden lower6");
		setTimeout(function() {
          	$(".img6").addClass("transitionnone");
         },1000);
		$(".imghover6").mouseover(function(){
            $(".img6").addClass("imgchange6");
        });
		
        $(".imghover6").mouseout(function(){
            $(".img6").removeClass("imgchange6");
        });
	}
	
	$(".imghover6").click(function(){
		$("p").addClass("hidden");
        $(".img6").addClass("hidden");
		setTimeout(function() {
			window.location = "s1.html";
        },1000);
	});
	
	///////////////////////////////////////////////////////// SAD PAGE
	
	if (location.pathname == "/s1.html") {
		$(".content").removeClass("hidden");
		setTimeout(function() {
			$("p").removeClass("down");
          	$("text2").removeClass("hidden");
         },5000);
	}
	
	$("sanxiety").mouseover(function(){
            $(".sadface").addClass("nomouth");
			$(".squig").removeClass("none");
    });
    $("sanxiety").mouseout(function(){
            $(".sadface").removeClass("nomouth");
			$(".squig").addClass("none");
    });
	
	$("sanxiety").click(function(){
		$(".st1").addClass("none");
		$(".st2").removeClass("none");
	})
	

});