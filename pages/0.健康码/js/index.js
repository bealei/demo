var name = "刘亦菲"; // 姓名
var encryptedName = "刘*菲"; // 加密姓名
var idCardNumber = "420100198708251234"; // 身份证号码
var encryptedIdCardNumber = "42****************34"; // 加密身份证号码
var healthCodeGreen = "000"; //身份证照片 (可以是图片的 URL 或 Base64 编码)
var idCardPhoto = "000"; //身份证照片 (可以是图片的 URL 或 Base64 编码)
var relativeName = "安少康"; // 亲友姓名
var encryptedRelativeName = "安*康"; // 加密亲友姓名
var relativeIdCardNumber = "350321194408270058"; // 亲友身份证号码
var encryptedRelativeIdCardNumber = "35****************58"; // 加密亲友身份证号码

$(".rx").click(function () {
  $(".sfz").show();
  $(".box").hide();
  $(".lm").css("background", " url(./img/lm1.jpg)");
  $(".lm").css("background-size", "100% 100%");
  $(".rx").css("background", "url(./img/rx2.jpg)");
  $(".rx").css("background-size", "100% 100%");
});

$(".lm").click(function () {
  $(".sfz").hide();
  $(".box").show();
  $(".rx").css("background", "url(./img/rx1.jpg)");
  $(".rx").css("background-size", "100% 100%");
  $(".lm").css("background", "url(./img/lm2.jpg)");
  $(".lm").css("background-size", "100% 100%");
});

// 姓名和身份证号码
$(".xm").text(encryptedName);
$(".sfzhm").text(encryptedIdCardNumber);
// 明文
$(".yj1").click(function () {
  $(".xm").text(name);
  $(".sfzhm").text(idCardNumber);
  $(".yj2").show();
  $(".yj1").hide();
});
// 加密
$(".yj2").click(function () {
  $(".xm").text(encryptedName);
  $(".sfzhm").text(encryptedIdCardNumber);
  $(".yj1").show();
  $(".yj2").hide();
});

// 亲友
$(".xm2").text(encryptedRelativeName);
$(".sfzhm2").text(encryptedIdCardNumber);
$(".yj11").click(function () {
  $(".xm2").text(relativeName);
  $(".sfzhm2").text(relativeIdCardNumber);
  $(".yj22").show();
  $(".yj11").hide();
});

$(".yj22").click(function () {
  $(".xm2").text(encryptedRelativeName);
  $(".sfzhm2").text(encryptedRelativeIdCardNumber);
  $(".yj11").show();
  $(".yj22").hide();
});
