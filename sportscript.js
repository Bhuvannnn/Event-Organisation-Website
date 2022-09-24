var myApp = angular.module("mymodule", []);



myApp.controller("fcontroller", function($scope){

	

	

});



var vrate, tcharges;
function fn() {
	
	var t = Number(document.getElementById("tm").value);
  if (document.getElementById("v1").selected) {
  	
  	document.getElementById("p1").innerText = "Rs 1000";
  	vrate = 1000;

  } else if(document.getElementById("v2").selected){

  	document.getElementById("p1").innerText = "Rs 1500";
  	vrate = 1500;

  } else if(document.getElementById("v3").selected){

  	document.getElementById("p1").innerText = "Rs 2000";
  	vrate = 2000;

  }

  tcharges = vrate + (t*1000);
  document.getElementById("p2").innerText = 'Rs '+tcharges;

}