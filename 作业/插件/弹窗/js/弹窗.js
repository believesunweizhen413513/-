function popup(opt) {

    var defaultOpt = {
        //默认参数
        iw: 200, //宽度 (可选)
        ih: 300,//高度 (可选)
    }

    //有配置用配置，没有配置用默认
    Object.assign(defaultOpt, opt);//用默认参数 ：defaultOpt 

    var popup = document.getElementsByClassName(defaultOpt.ele)[0];

    popup.style.width = defaultOpt.iw + 'px';
    popup.style.height = defaultOpt.ih + 'px';

    function show() {
        var top = (window.innerHeight - popup.offsetHeight) / 2 + "px";
        var left = (window.innerWidth - popup.offsetWidth) / 2 + "px";
        popup.style.left = left;
        popup.style.top = top;
        bg.style.height = window.innerHeight + "px";
    }
    // 点击注册的时候让注册框和背景显示出来，并且让它在可视窗口居中的位置
    btn.onclick = function () {
        popup.style.display = 'block';
        bg.style.display = 'block';
        //js控制窗口在中央，遮罩高度100%
        show();
    }

    // 点击窗口可以关闭窗口
    close.onclick = function () {
        popup.style.display = "none";
        bg.style.display = "none";
    }
    // esc关闭弹窗
    window.onkeydown = function (ev) {
        if (ev.keyCode == 27) {
            popup.style.display = "none";
            bg.style.display = "none";
        }
    }
    // 改变窗口大小保持弹窗在中央
    window.onresize = function () {
        show();
    }

    // // 拖拽效果
    // hh.onmousedown = function (ev) {
    //     ev = ev || window.event;
    //     var x = ev.offsetX;
    //     var y = ev.offsetY;
    //     document.onmousemove = function (ev) {
    //         var ileft = ev.pageX - x;
    //         var itop = ev.pageY - y;
    //         if (ileft < 0) {
    //             ileft = 0;
    //         } else if (ileft > window.innerWidth - popup.offsetWidth) {
    //             ileft = window.innerWidth - popup.offsetWidth;
    //         }
    //         if (itop < 0) {
    //             itop = 0;
    //         } else if (itop > window.innerHeight - popup.offsetHeight) {
    //             itop = window.innerHeight - popup.offsetHeight;
    //         }
    //         popup.style.left = ileft + 'px';
    //         popup.style.top = itop + 'px';
    //     }
    //     document.onmouseup = function () {
    //         document.onmousemove = null;
    //     }
    // }

}




