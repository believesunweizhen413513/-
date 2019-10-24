/*
          给move添加onmousedown事件，当按下鼠标左键的瞬间，获取offsetX
        然后，添加onmouseover事件，不断的计算出的left值，从而让他移动
        而且还要在tu移动的同时算出home的left，让他跟着一起移动
        在移动的过程中，还要改变box的颜色
        当移动的距离等于目标范围时（允许有误差），让p显示验证通过
    */
    (function () {
        var box = document.querySelector('#box');
        var bigpic = box.getElementsByClassName('bigpic')[0];
        var pictrue = box.getElementsByClassName('pictrue')[0];
        var home = box.getElementsByClassName('home')[0];
        var tuozhuai = box.getElementsByClassName('tuozhuai')[0];
        var move = box.getElementsByClassName('move')[0];
        var btn = document.getElementById('btn');
        var s1 = box.getElementsByClassName('s1')[0];
        var p1 = box.getElementsByClassName('p1')[0];
        // 设置最大距离 大盒子宽度（高度）-随机生成那个盒子的宽度（高度）
        var maxw = bigpic.offsetWidth - home.offsetWidth;
        var maxH = bigpic.offsetHeight - home.offsetHeight;
        //  在最大距离和最小距离之间生成随机位置
        var X = parseInt(Math.random() * (maxw - 200) + 200);//让水平方向生成时就有一定的距离
        var Y = parseInt(Math.random() * maxH);

        home.style.left = X + 'px';
        home.style.top = Y + 'px';
        pictrue.style.top = Y + 'px';

        move.onmousedown = function (ev) {
            move.innerHTML = '';
            var disX = ev.offsetX;
            document.onmousemove = function (ev) {
                // 获取可滑动的距离
                var iLeft = ev.pageX - disX - tuozhuai.offsetLeft;
                if (iLeft <= 0) {
                    iLeft = 0;
                } else if (iLeft > tuozhuai.offsetWidth - move.offsetWidth) {//避免超过框的宽度
                    iLeft = tuozhuai.offsetWidth - move.offsetWidth;
                }
                // 让滑动的块和验证的盒子的移动距离相等
                move.style.left = iLeft + 'px';
                pictrue.style.left = iLeft + 'px';
                p1.style.width = iLeft + 'px';
            }

        }
        document.onmouseup = function (ev) {
            document.onmousemove = null;
            //验证是否通过的判断，允许有一定的误差
            if (Math.abs(home.offsetLeft - move.offsetLeft) < 10) {
                move.style.background = 'blue';
                move.innerHTML = '验证通过';

            } else {
                move.style.background = 'red';
                move.innerHTML = '验证失败';
                re();
            }

        }
        function re(){
            p1.style.width = 0 + 'px';
            move.style.left = 0;
            pictrue.style.left = 0;
            // move.style.background = '';
        }
        re();
        btn.onclick = function () {
            move.style.background = '';
            re();
        }
    })();
