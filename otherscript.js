var myApp = angular.module("mymodule", []);



myApp.controller("fcontroller", function($scope){

	

	

});



var vrate, tcharges, frate;
function fn() {
	
	var t = Number(document.getElementById("tm").value);
 
  if (document.getElementById("v1").selected) {
  	
  	document.getElementById("p3").innerText = "Rs 1000";
  	vrate = 1000;

  } else if(document.getElementById("v2").selected){

  	document.getElementById("p3").innerText = "Rs 2000";
  	vrate = 2000;

  } else if(document.getElementById("v3").selected){

  	document.getElementById("p3").innerText = "Rs 3000";
  	vrate = 3000;

  }

  if (document.getElementById("f1").selected) {
    
    document.getElementById("p1").innerText = "Rs "+(t*100);
    frate = t*100;

  } else if(document.getElementById("f2").selected){

    document.getElementById("p1").innerText = "Rs "+(t*120);
    frate = t*120;

  } else if(document.getElementById("f3").selected){

    document.getElementById("p1").innerText = "Rs "+(t*150);
    frate = t*150;

  } else if(document.getElementById("f4").selected){

    document.getElementById("p1").innerText = "Rs "+(t*170);
    frate = t*170;

  }

  tcharges = vrate + frate;
  document.getElementById("p2").innerText = 'Rs '+tcharges;

}