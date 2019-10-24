/*
 * @Description: 生成随机颜色,获取随机验证码,获取任意范围里面的随机数,比较任意个数的大小并得到最大值
 * @Author: 国威
 * @Date: 2019-07-23 17:47:11 （7月23作业）
 * @LastEditTime: 2019-08-05 20:18:57
 * @LastEditors: Please set LastEditors
 */

function ranCol(n) {
    if (n == 16) {
        var html = '123456789abcdef';
        var res = '#';
        for (var i = 0; i < 6; i++) {
            var j = parseInt(Math.random() * (html.length));
            res += html[j];
            // console.log(res);
        }
    } else if (n == 'rgb') {
        var r = parseInt(Math.random() * 256);
        var g = parseInt(Math.random() * 256);
        var b = parseInt(Math.random() * 256);
        var res = 'rgb(' + r + ',' + g + ',' + b + ')';
        // console.log(res);
    } return res;
}


function ranCod() {
    var html = '0123456789zxcvbnmasdfghjklqwertyuiopZXCVBNMASDFGHJKLQWERTYUIOP';
    var res = '';
    for (var i = 0; i < 4; i++) {
        var j = parseInt(Math.random() * (html.length));
        res += html[j];
        // console.log(res);
    } return res;
}

function ranNum(a, b) {
    if (a < b) {
        var res = parseInt(Math.random() * (b - a + 1)) + a;
    } else {
        var res = parseInt(Math.random() * (a - b + 1)) + b;
    }
    // console.log(res);
    return res;
}

function ranCom() {
    var max = arguments[0];
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] >= max) {
            max = arguments[i];
        }
    } return max;
}

/*
 * @Description: has(arr,n)--判断arr里面有无n,
 getid()--获取节点
 * @Author: 国威
 * @Date: 2019-07-24 12:05:51  （7月24作业）
 * @LastEditTime: 2019-07-24 12:05:51 
 * @LastEditors: your name
 */

function has(arr, n) {
    var res = false;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == n) {
            res = true;
        }
    } return res;
}

function getid(id) {
    var id = document.getElementById(id);
    return id;
}

/*
 * @Description:  去重嗷
 * @Author: 国威
 * @Date: 2019-07-24 12:05:51
 * @LastEditTime: 2019-07-24 12:05:51
 * @LastEditors: your name
 */

function norep(arr) {
    var newArr = [];
    arr.forEach(function (item) {
        if (newArr.indexOf(item) == -1) {
            newArr.push(item);
        }
    });
    return newArr;
}

/*
 * @Description: 过滤敏感词汇函数
 * @Author: 国威
 * @Date: 2019-07-27 11:58:51
 * @LastEditTime: 2019-07-27 11:58:51
 * @LastEditors: your name
 */

function cnm(str) {
    var cukou = ['操', 'cnm', '你妈', '死', '暴毙', '死全家', 'fuck', '妈的', '傻逼', 'sb', '他妈', '臭傻逼', 'nmb'];//要屏蔽的敏感词
    for (var i = 0; i < cukou.length; i++) {
        var reg = new RegExp(cukou[i], 'ig');//正则表达式
        str = str.replace(reg, '**');//替换敏感词
    }
    return str;
}

/*
 * @Description: 输入参数转换为对象
 * @Author: 国威
 * @Date: 2019-07-27 11:58:51
 * @LastEditTime: 2019-07-27 11:58:51
 * @LastEditors: your name
 */

function strToObj(str) {
    var obj = {};
    var arr1 = str.split('&');
    arr1.forEach(function (item) {
        var arr2 = item.split('=');
        obj[arr2[0]] = arr2[1];
    });
    return obj;
}

/*
 * @Description: 输入对象转换为参数
 * @Author: 国威
 * @Date: 2019-07-27 11:58:51
 * @LastEditTime: 2019-07-27 11:58:51
 * @LastEditors: your name
 */

function objToStr(obj) {
    var str = '';
    for (var key in obj) {
        str += key + '=' + obj[key] + '&';
    }
    return str.slice(0, -1);
}

/*
 * @Description: 补零嗷
 * @Author: 国威
 * @Date: 2019-07-29 11:57:32
 * @LastEditTime: 2019-07-29 11:57:32
 * @LastEditors: your name
 */

function add0(num) {
    var str = '';
    if (num < 10) {
        str = '0' + num;
    } else {
        str = '' + num;
    }
    return str;
}

/*
 * @Description: 给一个数字n，返回n天之后的日期：年-月-日
 * @Author: 国威
 * @Date: 2019-07-29 11:57:32
 * @LastEditTime: 2019-07-29 11:57:32
 * @LastEditors: your name
 */

function toDat(n) {
    var now = new Date();
    var nowTime = now.getDate();
    var endTime = now.setDate(nowTime + n);
    var obj = {};
    obj.years = now.getFullYear();
    obj.months = now.getMonth() + 1;
    obj.days = now.getDate();
    return obj;
}

/*
 * @Description: 把秒数转成年月日时分秒
 * @Author: 国威
 * @Date: 2019-07-29 11:57:32
 * @LastEditTime: 2019-07-29 11:57:32
 * @LastEditTime: 2019-07-30 10:57:21
 * @LastEditors: Please set LastEditors
*/

function toTim(time) {
    var date = new Date(time);
    var obj = {};
    obj.years = parseInt(time / 60 / 60 / 24 / 365);
    obj.months = parseInt((time / 60 / 60 / 24 / 30) % 12);
    obj.days = parseInt((time / 60 / 60 / 24) % 30);
    obj.hours = parseInt((time / 60 / 60) % 24);
    obj.mins = parseInt((time / 60) % 60);
    obj.secs = parseInt(time % 60);
    return obj;
}

/*
 * @Description: 排他
 * @Author: 国威
 * @Date: 2019-07-30 16:58:15
 * @LastEditTime: 2019-07-30 16:58:15
 * @LastEditors: your name
 */

function delAll(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i].className = '';
    }
}

/*
 * @Description: 设置or获取样式
 * @Author: 国威
 * @Date: 2019-08-02 12:15:09
 * @LastEditTime: 2019-08-02 12:15:09
 * @LastEditors: your name
 */

function css() {
    if (arguments.length == 2) {
        //获取样式
        if (getComputedStyle(arguments[0], false)) {
            return getComputedStyle(arguments[0], false)[arguments[1]];
        } else {
            return arguments[0].currentStyle(arguments[1]);
        }
    } else if (arguments.length == 3) {
        return arguments[0].style[arguments[1]] = arguments[2];
    }
}

/*
 * @Description: 用事件监听器来绑定事件
 * @Author: 国威
 * @Date: 2019-08-05 18:59:50
 * @LastEditTime: 2019-08-05 18:59:50
 * @LastEditors: your name
 */

function bind(ele, type, fn) {//ele指对象，type指事件类型（不用加on），fn指回调函数
    if (ele.addEventListener) {
        ele.addEventListener(type, fn, false);//高级浏览器
    } else {
        ele.attachEvent('on' + type, fn);//ie8及以下版本
    }
}

