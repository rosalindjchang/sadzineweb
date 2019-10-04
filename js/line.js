/*eslint-env browser*/ 
/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function(){
	
	let xs = []
	for (var i = 0; i <= 5000; i++) {
	  xs.push(i)
	}

	let t = 0
	
	let w = 250
	
	let h = 10
	
	let anxious = false;
	
	
	function animate() {


	  let points = xs.map(x => {

		let y = 70 + h * Math.sin((x + t) / w)

		return [x, y]
	  })

	  let path = "M" + points.map(p => {
		return p[0] + "," + p[1]
	  }).join(" L")
	  
	  document.querySelector("path").setAttribute("d", path)

		if (anxious==false){
		  t += 0.5
		} else if (anxious == true){
		  t += 140
		}

	  requestAnimationFrame(animate)
	}

	animate()
	
	$("anxiety").mouseover(function(){
	   w = 100
	   h = 40
	   anxious = true;
    });
    $("anxiety").mouseout(function(){
       w = 250
	   h = 10
	   anxious = false;
     });
	
	$("svg").mouseover(function(){
       w = 200
	   h = 20
	   anxious = true;
    });
    $("svg").mouseout(function(){
       w = 250
	   h = 10
	   anxious = false;
     });
	
	$("anxiety").click(function(){ 
	    	anxious = false;
			w = 250
			h = 10
       });
	
	
});