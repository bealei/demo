function random() {


	var a1 = [101, 102, 103, 104, 105, 106, "1B"];
	var a2 = [201, 202, 203, 204, 205, 206, 207, 208, 209];
	var a3 = [301, 302, 303, 304, 305, 306, 307, 308, 309]
	var a4 = [401, 402, 403, 404, 405, 406, 407, 408, 409]



	var res1 = a1[Math.round(Math.random() * (a1.length - 1))]
	var res2 = a2[Math.round(Math.random() * (a2.length - 1))]
	var res3 = a3[Math.round(Math.random() * (a3.length - 1))]
	var res4 = a4[Math.round(Math.random() * (a4.length - 1))]


	document.getElementById('a1').innerHTML = res1;
	document.getElementById('a2').innerHTML = res2;
	document.getElementById('a3').innerHTML = res3;
	document.getElementById('a4').innerHTML = res4;

}
