function random() {
	var min = parseInt(document.getElementById('min').value);
	var max = parseInt(document.getElementById('max').value);

	var range = max - min;
	var rand = Math.random();
	var num = min + Math.round(rand * range);
	// var nums = min + Math.round(Math.random() * (max-min));
	document.getElementById('result').innerHTML = num;

}


function reset() {
	document.getElementById('min').value = '';
	document.getElementById('max').value = '';
	document.getElementById('result').innerHTML = '结果'
}