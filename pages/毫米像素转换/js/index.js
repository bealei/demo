


var btn = document.getElementById('btn');

btn.onclick = function () {


	var mm = parseFloat(document.getElementById('mm').value);
	var ppi = parseFloat(document.getElementById('ppi').value);
	console.log(mm)
	console.log(ppi)




	var res = document.getElementById('res');
	res.innerHTML = (mm / 25.4 * ppi).toFixed(2) + ' px'
	console.log('ppi=' + ppi)

}

