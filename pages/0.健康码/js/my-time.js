setInterval(function() {
	var date = new Date();
	var year = date.getFullYear(); //获取当前年份
	var mon = (date.getMonth() + 1).toString().padStart(2, '0'); //获取当前月份    
	// var da = date.getDate(); //获取当前日
	var da = date.getDate().toString().padStart(2, '0') //获取当前日;
	var days = date.getDay(); //获取当前星期几
	var h = date.getHours().toString().padStart(2, '0'); //获取小时
	var m = date.getMinutes().toString().padStart(2, '0'); //获取分钟
	var s = date.getSeconds().toString().padStart(2, '0'); //获取秒
	switch (days) {
		case 1:
			days = '星期一';
			break;
		case 2:
			days = '星期二';
			break;
		case 3:
			days = '星期三';
			break;
		case 4:
			days = '星期四';
			break;
		case 5:
			days = '星期五';
			break;
		case 6:
			days = '星期六';
			break;
		case 0:
			days = '星期日';
			break;
	}
	var d = document.getElementById('Date');
	d.innerHTML =

		year +
		'-' +
		mon +
		'-' +
		da +
		'&nbsp;&nbsp;&nbsp;&nbsp;' +
		h +
		':' +
		m +
		':' +
		s
}, 1000);


function hesuan() {
	var date = new Date();
	var year = date.getFullYear(); //获取当前年份
	var mon = (date.getMonth() + 1).toString().padStart(2, '0'); //获取当前月份    
	var da = date.getDate().toString().padStart(2, '0') //获取当前日;
	var da2 = (date.getDate() - 2).toString().padStart(2, '0') //获取当前日;
	var c1 = document.getElementById('caiyang1');
	var b1 = document.getElementById('baogao1');
	var c2 = document.getElementById('caiyang2');
	var b2 = document.getElementById('baogao2');
	b1.innerHTML =year +'-' +mon +'-' +da2 +'&nbsp;' +'21:51:08'
	c1.innerHTML =year +'-' +mon +'-' +da2 +'&nbsp;' +'13:34:01'
}
hesuan();