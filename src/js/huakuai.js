function slidingValidation(opt) {
    //默认参数
    var defaultOpt = {
        // iw: 350,
        // ih: 40,
        // ele: 'texting',
    }
    //有配置用配置，没有配置用默认
    Object.assign(defaultOpt, opt);//用默认参数 ：defaultOpt
    var huakuai = document.querySelector('.huakuai');
    var texting = document.querySelector('#texting');
    var box = document.querySelector('.box');
    var sp1 = document.querySelector('.sp1');
    var sp2 = document.querySelector('.sp2');
    var bt1 = document.querySelector('.bt1');
    //设置尺寸
    texting.style.width = defaultOpt.iw + 'px';
    texting.style.height = defaultOpt.ih + 'px';
    //滑块的left值
    var num = huakuai.offsetLeft;

    sp2.innerHTML = '&gt;&gt;';
    sp2.onmousedown = function (ev) {
        var isok = false; //检查是否成功
        var ix = ev.offsetX;//按下鼠标的时候获取相对距离
        // console.log(ix);
        document.onmousemove = function (ev) {
            // ev.stopPropagation();
            var l = ev.clientX - texting.offsetLeft - huakuai.offsetWidth + ix;//ev.clientX 光标相对于浏览器可视区域的位置，也就是浏览器坐标
            // console.log(huakuai.offsetLeft);
            if (l >= huakuai.offsetWidth - box.offsetWidth) {
                l = huakuai.offsetWidth - box.offsetWidth;
                sp1.innerHTML = '验证通过';
                sp2.innerHTML = '√';
                isok = true;
            }
            else if (l <= num) {
                l = num;
            }
            huakuai.style.left = l + 'px';
        }
        document.onmouseup = function (ev) {
            ev.stopPropagation();
            document.onmousemove = null;
            if (isok) return;
            huakuai.style.left = num + 'px';
            sp2.innerHTML = '&gt;&gt;';
        }
    }
}