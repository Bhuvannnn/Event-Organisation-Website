
var bd = "", td = "", pp = "", hsb = "", tb = "";
var pp_p=100, hsb_p=600, tb_p=450, bd_p=2000, td_p=4000;
var pp_q=0, hsb_q=0, tb_q=0, bd_q=0, td_q=0; 
var hr = "<tr><td><hr></td><td><hr></td><td><hr></td><td><hr></td><td><hr></td></tr>";

function fn1(){
	bd = "<tr><td>Basic Decoration</td><td>2000</td><td>1</td><td>2000</td><td><input type='button' value='Remove' onclick='fn1r()'></td></tr>";
	bd_q=1;
	show();
}

function fn2(){
	td = "<tr><td>Theme Decoration</td><td>4000</td><td>1</td><td>4000</td><td><input type='button' value='Remove' onclick='fn2r()'></td></tr>";
	td_q=1;
	show();
}

function fn3(){
	pp_q = document.getElementById('q1').value;
	if (pp_q == 0) {
		pp = "";
	} else {
		pp = "<tr><td>Party popper</td><td>100</td><td>"+pp_q+"</td><td>"+(pp_q*pp_p)+"</td><td><input type='button' value='Remove' onclick='fn3r()'></td></tr>";
	}
	show();
}

function fn4(){
	hsb_q = document.getElementById('q2').value;
	if (hsb_q == 0) {
		hsb = "";
	} else {
		hsb = "<tr><td>Heart Ballons</td><td>600</td><td>"+hsb_q+"</td><td>"+(hsb_q*hsb_p)+"</td><td><input type='button' value='Remove' onclick='fn4r()'></td></tr>";
	}
	show();
}

function fn5(){
	tb_q = document.getElementById('q3').value;
	if (tb_q == 0) {
		tb = "";
	} else {
		tb = "<tr><td>Thermocol Banner</td><td>450</td><td>"+tb_q+"</td><td>"+(tb_q*tb_p)+"</td><td><input type='button' value='Remove' onclick='fn5r()'></td></tr>";
	}
	show();
}


function fn1r(){
	bd = "";
	bd_q=0;
	show()
}

function fn2r(){
	td = "";
	td_q=0;
	show()
}

function fn3r(){
	pp = "";
	pp_q=0;
	show()
}

function fn4r(){
	hsb = "";
	hsb_q=0;
	show()
}

function fn5r(){
	tb = "";
	tb_q=0;
	show()
}

function show(){
	document.getElementById('cart').innerHTML = bd+td+pp+hsb+tb;
	document.getElementById('cart2').innerHTML = hr+"<tr><td>Total Charges: </td><td>Rs "+(tb_q*tb_p + bd_q*bd_p + pp_q*pp_p + hsb_q*hsb_p + td_q*td_p)+"</td><td></td></tr>";
}