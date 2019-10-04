/*eslint-env browser*/ 
/*jslint browser: true*/
/*global $, jQuery, alert*/


$(document).ready(function(){

var ea = document.getElementById("eat");

	
dragElement(document.getElementById("sface"));

function dragElement(elmnt) {
  
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
	ea.style.top = elmnt.offsetTop + 129 + "px";
	ea.style.left = elmnt.offsetLeft + 87 + "px";
  }
	

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
	
	
	
	

}

	 $("smalll").click(function(){
        counter++;
		if (counter == 1){
			$(".scirc1").removeClass("none");
		} else if (counter == 2) {
			$(".scirc2").removeClass("none");
		}  else if (counter == 3) {
			$(".scirc3").removeClass("none");
		}  else if (counter == 4) {
			$(".scirc4").removeClass("none");
		}  else if (counter == 5) {
			$(".scirc4, .scirc1, .scirc2, .scirc3").addClass("none");
			$(".st3, .spinnytext").removeClass("none");
			$(".st2").addClass("none");
			$(".sadface").addClass("spinnn");
			setTimeout(function() {
				$(".spinnytext2").removeClass("none");
         	 },3000);
			setTimeout(function() {
				$(".spinnytext3").removeClass("none");
         	 },3700);
			setTimeout(function() {
				$(".spinnytext4").removeClass("none");
         	 },4300);
			setTimeout(function() {
				$(".spinnytext5").removeClass("none");
         	 },4800);
			setTimeout(function() {
				$(".spinnytext6").removeClass("none");
				$("thinkin").removeClass("noaction");
         	 },5200);
		}
	 });
	
	$("thinkin").click(function(){
		$(".sadface").removeClass("spinnn");
		$(".st3").addClass("none");
		$(".st4, .mouth, #eat").removeClass("none");
		$("#sface").addClass("noaction");
		$(".spinnytext6").addClass("none");	
		$(".spinnytext5").addClass("none");
	
		setTimeout(function(){
			$(".spinnytext4").addClass("none");
			$(".spinnytext3").addClass("none");
		},200);
		setTimeout(function(){
			$(".spinnytext2").addClass("none");
			$(".spinnytext").addClass("none");
		},400);
	});
	
	// EAT EAT EAT
	
	var et = $('li');
    for (var i = 0; i < 100; i++) {
      et.clone().insertAfter(et);
    }
	
	$("control").click(function(){
		$('li').text("FAT");	
		$(".st4").addClass("none");
		$(".st5, .justface").removeClass("none");
		$(".sadface").addClass("yellow");
		setTimeout(function(){
			$(".justface").addClass("bigger");
			$(".st5").addClass("lighttext");
		}, 1000);
		setTimeout(function(){
			$("#eat").addClass("none");
		}, 2000);
	});
	
	$("controll").click(function(){
		$(".st5").addClass("none");
		$(".sadface, .mouth").addClass("none");
		$(".st6, .whiteface, .sadtype2").removeClass("none");
	});
	
	$("depressed").click(function(){
		$(".st6, .whiteface, .sadtype2").addClass("none");
		$(".sadface").removeClass("none");
		$(".sadface").removeClass("yellow nomouth");
		$(".st7").removeClass("none");
		$(".justface").addClass("hidden");
		$("#sface").removeClass("noaction");		
	});
	
	
	
});