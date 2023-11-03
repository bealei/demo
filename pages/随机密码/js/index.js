var daxie = document.querySelector('#daxie');
var xiaoxie = document.querySelector('#xiaoxie');
var shuzi = document.querySelector('#shuzi');
var fuhao = document.querySelector('#fuhao');
var num = document.querySelector('#num');
var btn = document.querySelector('#btn');
// ---------------------------------------
var result1 = document.querySelector('#result1');
var result2 = document.querySelector('#result2');
var btn1 = document.querySelector('#btn1');
var btn2 = document.querySelector('#btn2');
var news1 = document.querySelector('#news1');
var news2 = document.querySelector('#news2');
// ---------------------------------------
var a1 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
	'U', 'V', 'W','X','Y','Z'
];
var a2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
	'u', 'v', 'w', 'x', 'y', 'z'
];
var a3 = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var a4 = ['!', '@', '#', '$', '%', '^', '&', '*']
btn.onclick = function() {
	var res1 = '';
	var arr1 = [];
	var len = num.value;
	if (len < 8 || len > 16) {
		alert('请输入8~16之间的数字')
		len = 8
	}
	if (daxie.checked) {
		arr1 = arr1.concat(a1)
	}
	if (xiaoxie.checked) {
		arr1 = arr1.concat(a2)
	}
	if (shuzi.checked) {
		arr1 = arr1.concat(a3)
	}
	if (fuhao.checked) {
		arr1 = arr1.concat(a4)
	}
	
	
	var randomNumber = function() {
		// randomNumber(a,b) 返回的值大于 0 ，则 b 在 a 的前边；
		// randomNumber(a,b) 返回的值等于 0 ，则a 、b 位置保持不变；
		// randomNumber(a,b) 返回的值小于 0 ，则 a 在 b 的前边。
		return 0.5 - Math.random()
	}
	arr1.sort(randomNumber)
	console.log(arr1)
	// 数组总长度
	var arrlen = arr1.length
	for (let i = 0; i < len; i++) {
		let tmp = Math.floor(Math.random() * arrlen); //生成随机数
		res1 = res1 + arr1[tmp]
	}
	result1.value = res1

	// =======第二种=======
	var res2 = '';
	var arr2 = [];

	// 12位是字符
	for (let i = 0; i < 2; i++) {
		let tmp = Math.floor(Math.random() * a4.length); //生成随机数
		res2 = res2 + a4[tmp]

	}

	// *******34位是数字*******
	var pwd3 = Math.floor(Math.random() * 10); //生成0-9随机数
	var pwd4 = Math.floor(Math.random() * 10); //生成0-9随机数
	res2 = res2 + pwd3 + pwd4
	// *******45位是大写*******
	for (let i = 0; i < 2; i++) {
		let tmp = Math.floor(Math.random() * a1.length); //生成随机数		
		res2 = res2 + a1[tmp]
	}
	// *******后面都是小写*******
	// 总长度减去6，剩下小写字母长度
	var a2len = len - 6
	for (var i = 0; i < a2len; i++) {
		let tmp = Math.floor(Math.random() * 26);
		res2 = res2 + String.fromCharCode(97 + tmp);
	}

	result2.value = res2

}

// *******复制按钮1*******
btn1.onclick = function() {
	//重置状态
	news1.style.display = 'inline-block'
	let copy1 = document.querySelector('#result2');
	// 复制内容
	copy1.select();
	// 将内容复制到剪贴板
	document.execCommand('copy');
	// 消息提示
	news1.innerHTML = '复制成功！'
	// setInterval(news1.innerHTML='',2000)
	setTimeout(function() {
		news1.style.display = 'none';
	}, 666)
}

// *******复制按钮2*******
btn2.onclick = function() {
	//重置状态
	news2.style.display = 'inline-block'
	let copy2 = document.querySelector('#result2');
	// 复制内容
	copy2.select();
	// 将内容复制到剪贴板
	document.execCommand('copy');
	// 消息提示
	news2.innerHTML = '复制成功！'

	// setInterval(news2.remove(),2000)
	setTimeout(function() {
		news2.style.display = 'none';
	}, 666)

}
