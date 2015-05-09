/**
 * @author ljracm@gmail.com
 *
 * @file 从控机
 */
var WindDescrib = ['低', '中', '高'];

var canvas = document.getElementById('child-condition');
canvas.width = 1200;
canvas.height = 800;

// 空调布局参数配置
var AirConditionBox = {
    x: 0,
    y: 0,
    width: 1200,
    height: 800,
    fillStyle: '#FF0000'
};

var AirConditionScreen = {
    x: 50,
    y: 50,
    width: 900,
    height: 600,
    fillOnStyle: '#66FF66',
    fillShutStyle: '#000000'
};

var TempBox = {
    x: 980,
    y: 200,
    width: 120,
    height: 120,
    PictureWidth: 64,
    PictureHeight: 64
};

var TempWord = {
    x: 65,
    y: 90,
    fillStyle: '#000000',
    font: '40px Arial'
};

var TempUp = {
    x: 1110,
    y: 200,
    width: 64,
    height: 64,
    PictureWidth: 64,
    PictureHeight: 64
};

var TempDown = {
    x: 1110,
    y: 264,
    width: 64,
    height: 64,
    PictureWidth: 64,
    PictureHeight: 64
};

var WindBox = {
    x: 980,
    y: 50,
    width: 120,
    height: 120,
    fillOnStyle: '#66FF66',
    fillShutStyle: '#000000'
};

var WindWord = {
    x: 65,
    y: 140,
    fillStyle: '#000000',
    font: '40px Arial'
};

var WindUp = {
    x: 1110,
    y: 50,
    width: 64,
    height: 64,
    PictureWidth: 64,
    PictureHeight: 64
};

var WindDown = {
    x: 1110,
    y: 114,
    width: 64,
    height: 64,
    PictureWidth: 64,
    PictureHeight: 64
};

var Switch = {
    x: 1000,
    y: 650,
    width: 128,
    height: 128,
    PictureWidth: 128,
    PictureHeight: 128
};

var CheckIn = {
    x: 50,
    y: 670,
    width: 100,
    height: 100,
    PictureWidth: 128,
    PictureHeight: 128
};

// 空调外壳画布
var AirCondition = canvas.getContext('2d');
AirCondition.defaultTemp = 25;
AirCondition.defaultWind = 0;
AirCondition.curTemp;
AirCondition.curWind;
AirCondition.fillStyle = AirConditionBox.fillStyle;
AirCondition.fillRect(AirConditionBox.x, AirConditionBox.y,  AirConditionBox.width, AirConditionBox.height);

// 空调显示屏
AirCondition.fillStyle = AirConditionScreen.fillShutStyle;
AirCondition.fillRect(AirConditionScreen.x, AirConditionScreen.y, AirConditionScreen.width, AirConditionScreen.height);

// 空调风速设置
AirCondition.fillStyle = WindBox.fillShutStyle;
AirCondition.fillRect(WindBox.x, WindBox.y, WindBox.width, WindBox.height);
var WindUpImg = document.createElement('img');
WindUpImg.src = 'asset/up.png';
WindUpImg.onload = function () {
    AirCondition.drawImage(WindUpImg, 0, 0, WindUp.PictureWidth, WindUp.PictureHeight,
                           WindUp.x, WindUp.y, WindUp.width, WindUp.height);
};
var WindDownImg = document.createElement('img');
WindDownImg.src = 'asset/down.png';
WindDownImg.onload = function () {
    AirCondition.drawImage(WindDownImg, 0, 0, WindDown.PictureWidth, WindDown.PictureHeight,
                           WindDown.x, WindDown.y, WindDown.width, WindDown.height);
};

// 温度调节设置
AirCondition.fillStyle = TempBox.fillShutStyle;
AirCondition.fillRect(TempBox.x, TempBox.y, TempBox.width, TempBox.height);
var TempUpImg = document.createElement('img');
TempUpImg.src = 'asset/up.png';
TempUpImg.onload = function () {
    AirCondition.drawImage(TempUpImg, 0, 0, TempUp.PictureWidth, TempUp.PictureHeight,
                           TempUp.x, TempUp.y, TempUp.width, TempUp.height);
};
var TempDownImg = document.createElement('img');
TempDownImg.src = 'asset/down.png';
TempDownImg.onload = function () {
    AirCondition.drawImage(TempDownImg, 0, 0, TempDown.PictureWidth, TempDown.PictureHeight,
                       TempDown.x, TempDown.y, TempDown.width, TempDown.height);
};

// 开关
var SwitchImg = document.createElement('img');
Switch.isOpen = false;
SwitchImg.src = 'asset/switch.png';
SwitchImg.onload = function () {
    AirCondition.drawImage(SwitchImg, 0, 0, Switch.PictureWidth, Switch.PictureHeight,
                           Switch.x, Switch.y, Switch.width, Switch.height);
};

// 费用查询
var CheckInImg = document.createElement('img');
CheckInImg.src = 'asset/checkin.png';
CheckInImg.onload = function () {
    AirCondition.drawImage(CheckInImg, 0, 0, CheckIn.PictureWidth, CheckIn.PictureHeight,
                           CheckIn.x, CheckIn.y, CheckIn.width, CheckIn.height);
};

canvas.onclick = function (event) {
    var x = event.pageX - canvas.offsetLeft;
    var y = event.pageY - canvas.offsetTop;
    // 开关机
    if (x >= Switch.x && y >= Switch.y && x <= Switch.x + Switch.width && y <= Switch.y + Switch.height) {
        if (Switch.isOpen) {
            AirConditionScreen.shut();
            Switch.isOpen = false;
        }
        else {
            AirConditionScreen.show();
            Switch.isOpen = true;
        }
    }
    else if (x >= WindUp.x && y >= WindUp.y && x <= WindUp.x + WindUp.width && y <= WindUp.y + WindUp.height) {
        var t = AirConditionBox.curTemp || AirConditionBox.defaultTemp;
    }
};

AirConditionScreen.show = function () {
    var t = AirCondition.defaultTemp;
    var w = AirCondition.defaultWind;
    AirCondition.fillStyle = AirConditionScreen.fillOnStyle;
    AirCondition.fillRect(AirConditionScreen.x, AirConditionScreen.y,
                          AirConditionScreen.width, AirConditionScreen.height);
    AirCondition.fillRect(WindBox.x, WindBox.y, WindBox.width, WindBox.height);
    AirCondition.fillRect(TempBox.x, TempBox.y, TempBox.width, TempBox.height);

    // 温度显示
    AirCondition.fillStyle = TempWord.fillStyle;
    AirCondition.font = TempWord.font;
    var str = '制冷温度：'
            + t
            + ' ℃      缺省温度：'
            + t
            + '℃';
    AirCondition.fillText(str, TempWord.x, TempWord.y);
    // 风速显示
    AirCondition.fillStyle = WindWord.fillStyle;
    AirCondition.font = WindWord.font;
    str = '风速：'
            + WindDescrib[w]
            + '      缺省风速：'
            + WindDescrib[w];
    AirCondition.fillText(str, WindWord.x, WindWord.y);
    // 调节窗口显示
    AirCondition.fillStyle = WindWord.fillStyle;
    AirCondition.font = WindWord.font;
    AirCondition.fillText(WindDescrib[w], 1020, 125);
    str = t
        + '℃';
    AirCondition.fillText(str, 1000, 270);
};

AirConditionScreen.shut = function () {
    AirCondition.fillStyle = '#000000';
    AirCondition.fillRect(AirConditionScreen.x, AirConditionScreen.y,
                          AirConditionScreen.width, AirConditionScreen.height);
    AirCondition.fillRect(WindBox.x, WindBox.y, WindBox.width, WindBox.height);
    AirCondition.fillRect(TempBox.x, TempBox.y, TempBox.width, TempBox.height);
};

