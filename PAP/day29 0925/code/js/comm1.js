/*
 * @Description: 生成随机颜色,获取随机验证码,获取任意范围里面的随机数,比较任意个数的大小并得到最大值
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
 */

function delAll(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i].className = '';
    }
}

/*
 * @Description: 设置or获取样式
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
 */

function monitor(ele, type, fn) {//ele指对象，type指事件类型（不用加on），fn指回调函数
    if (ele.addEventListener) {
        ele.addEventListener(type, fn, false);//高级浏览器
    } else {
        ele.attachEvent('on' + type, fn);//ie8及以下版本
    }
}

/*
 * @Description: 邮箱、手机、身份证等等等等的正则验证
 */

var checkReg = {
    email: function (str) {//验证邮箱
        var reg = /^[\w#%&!\^*\-]+@[\w#%&!\^*\-]+\.[a-zA-Z]+$/;
        return reg.test(str);
    },
    tel: function (str) {//验证手机号
        var reg = /^1[3-9]\d{9}$/;
        return reg.test(str);
    },
    url: function (str) {//验证网址
        var reg = /^(https?:\/\/)?\w+\.\w+\.\w+$/;
        return reg.test(str);
    },
    date: function (str) {//验证日期
        var reg = /^\d{4}-\d{1,2}-\d{1,2}$|^\d{4}\/\d{1,2}\/\d{1,2}$|^\d{4}\d{1,2}\d{1,2}$/;
        return reg.test(str);
    },
    username: function (str) {//验证中文
        var reg = /^[\u2E80-\u9FFF]+$/;
        return reg.test(str);
    },
    password: function (str) {//输入密码，最低级的
        var reg = /^\S{6,20}$/;
        return reg.test(str);
    },
    surepass: function (str) {//验证确认密码里是否与pass里输入的密码一样
        if (str) {
            return str == pass.value;
        }
    },
    idcard: function (str) {//身份证验证
        var reg = /^(\d{17}|\d{14})[\dx]$/;
        return reg.test(str);
    },
    delspace: function (str) {//能兼容全部浏览器的去除前后空格（trim() ES5方法不兼容低版本IE 8-）
        var reg = /^\s+|\s+$/g;
        return str.replace(reg, '');
    },
    getarr: function (str) {//能把类似'a b,c，d, e， f%g-h'字符串转换成[a,b,c,d,e,f,g,h]的数组
        var reg = /[\s,，%\-]\s?/;
        return str.split(reg);
    }
};

/*
 * @Description: 判断输入表单的值是否符合要求
 */

function checkInp(ele, reg, tip, inf) {
    ele.onblur = function () {
        var str = ele.value.trim();
        if (str) {
            //非空                       //法3：通过eval()方法，eval可以把字符串转为js代码
            var res = checkReg[reg](str);//法1：通过对象键名为变量时如何取键值来做;法2：用回调函数，把参数传到外面去处理
            if (res) {
                //验证通过
                tip.innerHTML = `${inf}验证通过`;
                tip.style.color = '#58bc58';
                ele.istrue = true;
            } else {
                //验证不通过
                tip.innerHTML = `请输入正确的${inf}!`;
                tip.style.color = 'red';
                ele.istrue = false;
            }
        } else {
            tip.innerHTML = `${inf}不能为空!`;
            tip.style.color = 'red';
            ele.istrue = false;
        }
    }
}

/*
 * @Description: 深度拷贝一个对象或者数组(json对象方法)
 */

function copyArr(obj) {
    var str = JSON.stringify(obj);
    return JSON.parse(str);
}

/*
	运动框架封装：startMove()过渡    jq animate()
	最终版：多对象，多属性，链式运动框架(运动队列)
	参数一：对象名
	参数二：属性，目标值  键名：属性名，键值：目标值    {'width':200,'heigth':400}  实现：宽度和高度一起改变，宽度变成200，高度变成400
	参数三：回调函数(可选参数)
 */

function startMove(obj, json, fnend) {

    clearInterval(obj.timer); //防止定时器叠加
    obj.timer = setInterval(function () {

        var istrue = true;

        //1.获取属性名，获取键名：属性名->初始值
        for (var key in json) { //key:键名   json[key] :键值
            //			console.log(key); //width heigth opacity
            var cur = 0; //存初始值

            if (key == 'opacity') { //初始值
                cur = css(obj, key) * 100; //透明度
            } else {
                cur = parseInt(css(obj, key)); // 300px  300  width heigth borderwidth px为单位的

            }

            //2.根据初始值和目标值，进行判断确定speed方向，变形：缓冲运动
            //距离越大，速度越大,下面的公式具备方向
            var speed = (json[key] - cur) / 6; //出现小数
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed); //不要小数部分，没有这句话或晃动

            //保证上一个属性全部都达到目标值了
            if (cur != json[key]) { //width 200 heigth 400
                istrue = false; //如果没有达到目标值，开关false
            } else {
                istrue = true; //true true
            }

            //3、运动
            if (key == 'opacity') {
                obj.style.opacity = (cur + speed) / 100; //0-1
                obj.style.filter = 'alpha(opacity:' + (cur + speed) + ')'; //0-100
            } else {
                obj.style[key] = cur + speed + 'px'; //针对普通属性 left  top height 
            }

        }

        //4.回调函数:准备一个开关,确保以上json所有的属性都已经达到目标值,才能调用这个回调函数
        if (istrue) { //如果为true,证明以上属性都达到目标值了
            clearInterval(obj.timer);
            if (fnend) { //可选参数的由来
                fnend();
            }
        }

    }, 30); //obj.timer 每个对象都有自己定时器

}

/*
    创建ajax封装，判断是get 还是post方式传输
*/

function ajax(opt) {
    //默认参数
    let defaultOpt = {
        data: '',
        asyn: true,
        error: null
    }

    //替补方案
    Object.assign(defaultOpt, opt);//用defaultOpt

    //1.创建对象
    let xhr = new XMLHttpRequest();

    //2.写好参数，准备工作  open()
    //防止缓存
    if (defaultOpt.type.toLowerCase() == 'get') {
        //get请求
        if (defaultOpt.data) {
            //有数据，把数据拼接在url
            defaultOpt.url = defaultOpt.url + '?time=' + new Date() + '&' + objToStr(defaultOpt.data);
        }
        xhr.open('get', defaultOpt.url, defaultOpt.asyn);
        xhr.send(null);
    } else {
        //post请求
        xhr.open('post', defaultOpt.url + '?time=' + new Date(), defaultOpt.asyn);
        let data = objToStr(defaultOpt.data);
        xhr.setRequestHeader('content-type', "application/x-www-form-urlencoded");//请求头
        xhr.send(data);
    }

    //4.接收数据
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4) {
            if (xhr.status == 200 || xhr.status == 304) {
                //成功  
                defaultOpt.success(xhr.responseText);//实参
            } else {
                //失败
                if (defaultOpt.error) {
                    defaultOpt.error(xhr.status);//实参：http状态码
                }
            }
        }
    }

}

//获取cookie
function getcookie(key) {
    let str = document.cookie;//username=admin; age=18
    let arr = str.split('; ');
    for (let item of arr) {
        let arr2 = item.split('=');
        if (key == arr2[0]) {
            return arr2[1];
        }
    }
}

//设置cookie
function setcookie(key, val, iday) {
    let now = new Date();
    now.setDate(now.getDate() + iday);
    document.cookie = key + '=' + val + ';expires=' + now + ';path=/';
}

//删除
function removeCookie(key) {
    setcookie(key, '', -1);
}

function getTimeSec(secs) {
    let time = new Date(secs * 1000);
    // console.log(time);
    let year = time.getFullYear();
    let mon = time.getMonth() + 1;
    let date = time.getDate();
    let hours = time.getHours();
    let mins = time.getMinutes();
    let sec = time.getSeconds();
    return {
        year,
        mon,
        date,
        hours,
        mins,
        sec
    }
}