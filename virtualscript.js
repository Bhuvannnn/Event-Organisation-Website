var myApp = angular.module("mymodule", []);



myApp.controller("fcontroller", function($scope){

	

	

});



var vrate, tcharges;
function fn() {
	
	var t = Number(document.getElementById("tm").value);
  var t1 = Number(document.getElementById("tm1").value);
  if (document.getElementById("v1").selected) {
  	
  	document.getElementById("p1").innerText = "Rs "+(t1*500);
  	vrate = 500*t1;

  } else if(document.getElementById("v2").selected){

  	document.getElementById("p1").innerText = "Rs "+(t1*1000);
  	vrate = 1000*t1;

  } else if(document.getElementById("v3").selected){

  	document.getElementById("p1").innerText = "Rs "+(t1*1500);
  	vrate = 1500*t1;

  }

  tcharges = vrate + (t*50);
  document.getElementById("p2").innerText = 'Rs '+tcharges;

}