//js库文件：仿jq，这里提供一些方法，以后可以反复调用，提高我们开发效率

/*
 * @Description: 封装一个函数可以实现下拉菜单的显示隐藏(点击版)
 * @Author: 大哲
 * @Date: 2019-07-23 15:21:00
 * @LastEditTime: 2019-07-23 16:10:27
 * @LastEditors: Please set LastEditors
 */

function hideShow(btn, ele) {//要参数：参数一：点击的对象；参数二：显示隐藏的对象
    btn.onclick = function () {
        if (ele.style.display == 'block') {//null == 'block'  'block'== 'block' 'none'=='block'
            ele.style.display = 'none';
        } else {
            //第一次：显示
            ele.style.display = 'block';
        }
    }
}

function ranNum(min, max) {
    //得到一个min到max之间的随机数：极限的时候,Math.random()为零的时候，最小的时候;Math.random()是1的时候是最大的时候
    return parseInt(Math.random() * (max - min + 1)) + min;
};
	//封装生成有倾斜的随机数
	   function yanzheng(n) {
            var str = 'zxcvbnmlkjhgfdsaqwertyuiopZXCVBNMLKJHGFDSAQWERTYUIOP1234567890';//0 - lenght
            var html = '';
            for (var i = 0; i < n; i++) {
                var index = parseInt(Math.random() * str.length);//0 - str.length-1
                var r = parseInt(Math.random() * 90 - 45);
                var f = parseInt(Math.random() * 30 + 16);
                var num = '<span style="display:inline-block;transform:rotate(' + r + 'deg' + ');font-size="' + f + 'px' + '">' + str[index] + '</span>';
                html += num;
            }
            return html;//拼接好的四位随机数
        }

		
		//封装时间
		 function showtime() {
        var time = new Date();//时间戳 获取时间
        var year = time.getFullYear();//年
        var month = time.getMonth() + 1;//月
        var day = time.getDate();//日
        var hours = time.getHours();//时
        var mins = time.getMinutes();//分
        var secs = time.getSeconds();//秒
        var week = time.getDay();//从0-6 星期天-星期六
         }
        function toDb(num) {
            if (num < 10) {
                return '0' + num;
            } else {
                return '' + num;
            }
    }

    function timeset(num){
        var sec = num%60;
        var min = toDb(Math.floor(num/60)%60);
        var hour = toDb(Math.floor(num/60/60)%24);
        var days = toDb(Math.floor(num/60/60/24));
        return{
            'secs':sec,
            'mins':min,
            'hours':hour,
            'days':days
        }
    }