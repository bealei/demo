function hesuan() {
	var date = new Date();
	var year = date.getFullYear(); //获取当前年份
	var mon = (date.getMonth() + 1).toString().padStart(2, '0'); //获取当前月份    
	var da = date.getDate().toString().padStart(2, '0') //获取当前日;
	var da2 = (date.getDate() - 2).toString().padStart(2, '0') //获取当前日;
	var da5 = (date.getDate() - 5).toString().padStart(2, '0') //获取当前日;
	var da8 = (date.getDate() - 8).toString().padStart(2, '0') //获取当前日;

	var c1 = document.getElementById('caiyang1');
	var b1 = document.getElementById('baogao1');
	var c2 = document.getElementById('caiyang2');
	var b2 = document.getElementById('baogao2');
	var c3 = document.getElementById('caiyang3');
	var b3 = document.getElementById('baogao3');

	c1.innerHTML = year + '-' + mon + '-' + da2 + '&nbsp;' + '19:10:56'
	b1.innerHTML = year + '-' + mon + '-' + da2 + '&nbsp;' + '23:58:36'
	c2.innerHTML = year + '-' + mon + '-' + da5 + '&nbsp;' + '09:05:02'
	b2.innerHTML = year + '-' + mon + '-' + da5 + '&nbsp;' + '14:40:00'
	c3.innerHTML = year + '-' + mon + '-' + da8 + '&nbsp;' + '15:34:01'
	b3.innerHTML = year + '-' + mon + '-' + da8 + '&nbsp;' + '21:51:08'

}
hesuan();
