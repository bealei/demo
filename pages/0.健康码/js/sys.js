// ------------------------------------时间-------------------------------------------
function shijian() {
	var date = new Date();
	var year = date.getFullYear(); //获取当前年份
	var mon = (date.getMonth() + 1).toString().padStart(2, '0'); //获取当前月份    
	// var da = date.getDate(); //获取当前日
	var da = date.getDate().toString().padStart(2, '0') //获取当前日;
	var days = date.getDay(); //获取当前星期几
	var h = date.getHours().toString().padStart(2, '0'); //获取小时
	var m = date.getMinutes().toString().padStart(2, '0'); //获取分钟
	var s = date.getSeconds().toString().padStart(2, '0'); //获取秒
	var d = document.getElementById('date');
	d.innerHTML =
		year + '-' + mon + '-' + da +
		'&nbsp;' +
		h + ':' + m + ':' + s

}
shijian();


// ------------------------------------自动换行-------------------------------------------





var autoTextarea = function(elem, extra, maxHeight) {

	extra = extra || 0;

	var isFirefox = !!document.getBoxObjectFor || 'mozInnerScreenX' in window,

		isOpera = !!window.opera && !!window.opera.toString().indexOf('Opera'),

		addEvent = function(type, callback) {

			elem.addEventListener ?

				elem.addEventListener(type, callback, false) :

				elem.attachEvent('on' + type, callback);

		},

		getStyle = elem.currentStyle ? function(name) {

			var val = elem.currentStyle[name];

			if (name === 'height' && val.search(/px/i) !== 1) {

				var rect = elem.getBoundingClientRect();

				return rect.bottom - rect.top -

					parseFloat(getStyle('paddingTop')) -

					parseFloat(getStyle('paddingBottom')) + 'px';

			};

			return val;

		} : function(name) {

			return getComputedStyle(elem, null)[name];

		},

		minHeight = parseFloat(getStyle('height'));

	elem.style.resize = 'none';

	var change = function() {

		var scrollTop, height,
			padding = 0,
			style = elem.style;
		if (elem._length === elem.value.length) return;
		elem._length = elem.value.length;
		if (!isFirefox && !isOpera) {
			padding = parseInt(getStyle('paddingTop')) + parseInt(getStyle('paddingBottom'));
		};
		scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
		elem.style.height = minHeight + 'px';
		if (elem.scrollHeight > minHeight) {
			if (maxHeight && elem.scrollHeight > maxHeight) {
				height = maxHeight - padding;
				style.overflowY = 'auto';

			} else {

				height = elem.scrollHeight - padding;
				style.overflowY = 'hidden';

			};

			style.height = height + extra + 'px';
			scrollTop += parseInt(style.height) - elem.currHeight;
			document.body.scrollTop = scrollTop;
			document.documentElement.scrollTop = scrollTop;
			elem.currHeight = parseInt(style.height);

		};
	};

	addEvent('propertychange', change);
	addEvent('input', change);
	addEvent('focus', change);
	change();

};





var text1 = document.getElementById("textarea1");
var text2 = document.getElementById("textarea2");

// 调用
autoTextarea(text1);
autoTextarea(text2);
