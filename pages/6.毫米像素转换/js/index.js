var btn = document.getElementById('btn');

btn.onclick = function () {
  var w = parseFloat(document.getElementById('width').value);
  var h = parseFloat(document.getElementById('height').value);
  var ppi = parseFloat(document.getElementById('ppi').value);
  // console.log(mm);
  console.log(ppi);

  var res = document.getElementById('res');
  res.innerHTML =
    '宽度：' +
    ((w / 25.4) * ppi).toFixed(2) +
    ' px' +
    `<br>` +
    '高度：' +
    ((h / 25.4) * ppi).toFixed(2) +
    ' px';
  console.log('ppi=' + ppi);
};
