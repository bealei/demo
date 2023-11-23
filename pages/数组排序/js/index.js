

function random() {
  var start = parseInt(document.querySelector('#start').value);
  var end = parseInt(document.querySelector('#end').value);
  var num = end - start + 1;
  // console.log(start);
  if (isNaN(start) || isNaN(end)) {
    alert('请输入数字')
  }
  // 生成范围数组
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr[i] = start++;
  }
  // 数组随机排序
  var len = arr.length;
  var map = new Map();
  // console.log('len', len);
  for (var i = 0; i < len; i++) {
    var index = Math.floor(Math.random() * len);
    var temp = arr[index];
    arr[index] = arr[i];
    arr[i] = temp;
    // map.set('第' + (i+1) + '个', arr[i]);//放在这里竟然不行

  }
  // 写入map
  for (var i = 0; i < len; i++) {
    map.set('第' + (i + 1) + '个', arr[i]);
  }
  var maps = "";
  // 遍历map
  for (var [key, value] of map) {
    // console.log('map的值'+key+'='+value);
    maps += '<p>' + key + '：' + value + "，" + '</p>';

  }
  // console.log(arr);
  // console.log('map-->', map);
  // document.querySelector('#result').innerHTML = arr;
  document.querySelector('#result').innerHTML = maps;
}


