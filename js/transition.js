/*eslint-env browser*/ 
/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function(){
    
	
	//// idle??
	
	idleTime_inactive = 0;
	var idleInterval = setInterval(timerIncrements, 1000);
	var idleTime_inactivetemp = false;
	function timerIncrements()
	{
		console.log(idleTime_inactive);
		if(idleTime_inactivetemp == false) {
			idleTime_inactive++;
			if (idleTime_inactive >= 30){
				window.location = 'https://rosalindjchang.github.io/zine-index/';
			}
		}
	}
	function get_pagescroll_per(){
		var wintop = $(window).scrollTop(), docheight = $(document).height(), winheight = $(window).height();
		var  scrolltrigger = 0.95;
		return (wintop/(docheight-winheight))*100;
	}

	$(document).bind('mouseover click keydown scroll', function () {
		idleTime_inactive = 0;
	});

	document.addEventListener("visibilitychange", function() {
	  if(document.hidden == true) {
		idleTime_inactivetemp = true;
	  } else {
		idleTime_inactivetemp = false;
	  }
	}, false);
	
	

	
	//////////////////////////////////
    
	
	//back to index
	
	$(".zineindex").click(function(){
		window.location = 'https://rosalindjchang.github.io/zine-index/';
	});
	
	
	
	// preload images
	
	function preload(arrayOfImages) {
    $(arrayOfImages).each(function(){
        $('<img/>')[0].src = this;
    });
	}	

		preload([
			'img/1_drown.png',
			'img/1_nodrown.png',
			'img/2_face.png',
			'img/2_face2.png',
			'img/3_happy.png',
			'img/3_sad.png',
			'img/4_img.png',
			'img/4_img2.png',
			'img/5_simle2.png',
			'img/5_smile.png',
			'img/comic-49.png',
			'img/comic-50.png',
			'img/comic-52.png',
			'img/comic-53.png',
			'img/comic-56.png',
			'img/comic-57.png',
			'img/comic-58.png',
			'img/comic-59.png',
			'img/comic-62.png',
			'img/cursor-15.png',
			'img/cursor-16.png',
			'img/night-51.png',
			'img/night-62.png',
			'img/night-64.png',
			'img/nightt-61.png',
			'img/zine-55.png',
			'img/s_face.png',
			'img/s_face_face-32',
			'img/s_face_w-40.png',
			'img/s_face_yellow.png',
			'img/s_face-nomouth.png',
			'img/s_face-squig.gif',
			'img/end-60.png',
			'img/end-61.png',
			'img/end-62.png',
			'img/end-63.png'
		]);

	
	// index
	
	if (window.location.pathname == "/sadzineweb/index.html") {
		$(".content").removeClass("hidden");
      } 
	
	 $(".hometype").mouseover(function(){
            $("not").removeClass("byetext");
    });
    $(".hometype").mouseout(function(){
            $("not").addClass("byetext");
    });
	
	
	// film
	
	if (window.location.pathname == "/sadzineweb/f1.html") {
		$(".content").removeClass("hidden");
		
      } 
	
	$(".filmtext").click(function(){
		$(".filmtext").addClass("byetext");
		$(".windowf").addClass("clickw");
	});
	
	var counter = 0;
	
	 $(document).on('click', '.clickw', function(){
        counter++;
		if (counter == 1){
			$(".windowf").addClass("sun1");
		} else if (counter == 2) {
			$(".windowf").removeClass("sun1").addClass("sun2");
		}  else if (counter == 3) {
			$(".windowf").removeClass("sun2").addClass("sun3");
		}  else if (counter == 4) {
			$(".windowf").removeClass("sun3");
		}  else if (counter == 5) {
			$(".windowf").addClass("dude1");
		} else if (counter == 6) {
			$(".windowf").removeClass("dude1").addClass("dude2");
		} else if (counter == 7) {
			$(".windowf").removeClass("dude2").addClass("dude3");
		} else if (counter == 8) {
			$(".windowf").removeClass("dude3").addClass("dude2");
		} else if (counter == 9) {
			$(".windowf").removeClass("dude2").addClass("dude4");
		} else if (counter == 10) {
			$(".windowf").removeClass("dude4");
		} else if (counter == 11) {
			$(".windowf").addClass("night");
			$("body").addClass("dark");
			$(".depdude").addClass("depdudenight");
		} else if (counter == 12) {
			$(".windowf").addClass("night1");
		} else if (counter == 13) {
			$(".windowf").removeClass("night1").addClass("night2");
		} else if (counter == 14) {
			$(".windowf").removeClass("night2").addClass("night3");
		} else if (counter == 15) {
			$(".windowf").removeClass("night3");
		} else if (counter == 16) {
			$(".windowf").removeClass("night");
			$("body").removeClass("dark");
			$(".depdude").removeClass("depdudenight");
			counter = 0;
		}
	 });
	
	// page 1 load
	
	if (window.location.pathname == "/sadzineweb/1.html") {
		$(".content").removeClass("hidden");
      } 
	
    // from page 1 to page 2
	
	
    
    $("#click1").click(function(){ 
		$("p").addClass("hidden slide");
		$(".img1").addClass("noaction expand1");
        setTimeout(function() {
           window.location = "2.html";
         },1000);
     });
	
	
	if (window.location.pathname == "/sadzineweb/2.html" ) {
		$(".img2, p").removeClass("hidden");
		$(".img2").removeClass("slide2");
        $("happy").mouseover(function(){
            $(".img2").addClass("openeyes");
        });
        $("happy").mouseout(function(){
            $(".img2").removeClass("openeyes");
        });
      } 
    
	
	$("happy").mouseover(function(){
         $(".img1").addClass("img11");
     });
   	$("happy").mouseout(function(){
         $(".img1").removeClass("img11");
    });
	
    
    // from page 2 to 3
        
      $("#click2").click(function(){ 
		$(".img2").addClass("slide2 hidden");
		$("p").addClass("hidden");
        setTimeout(function() {
           window.location = "3.html";
         },500);
       });
          
        if (window.location.pathname == "/sadzineweb/3.html" ) {
			$(".img3, p").removeClass("hidden");
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
            $("noone").addClass("cut");
            $(".textsomeone2").addClass("blacktext");
        });
        $("someone").mouseout(function(){
            $(".img3").removeClass("sad3");
            $("noone").removeClass("cut");
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
	
    	if (window.location.pathname == "/sadzineweb/4.html" ) {
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
	
	if (window.location.pathname == "/sadzineweb/5.html") {
		$("svg").removeClass("hidden").addClass("noaction darkline");
		$(".content").removeClass("hidden");
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
	
	if (window.location.pathname == "/sadzineweb/6.html") {
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
	
	
	///////////////////////////////////////////////////////// SAD PAGE
	
	if (window.location.pathname == "/sadzineweb/s1.html") {
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
	
	//////////////////////////////////////////////////////////// END PAGE
	
	if (window.location.pathname == "/sadzineweb/e1.html") {
		$(".content").removeClass("hidden");
      } 
	
	$("numb").click(function(){
		$(".endimg").addClass("endimg2");
		$(".endtext1").addClass("none");
		$(".endtext2").removeClass("none");
	})
	
	$("lonely").click(function(){
		$(".endimg").addClass("endimg3").removeClass("endimg2");
		$(".endtext2").addClass("none");
		$(".endtext3").removeClass("none");
	})
	
	$("people").click(function(){
		$(".endimg").addClass("endimg4").removeClass("endimg3");
		$(".endtext3").addClass("none");
		$(".endtext4").removeClass("none");
	})
	

});