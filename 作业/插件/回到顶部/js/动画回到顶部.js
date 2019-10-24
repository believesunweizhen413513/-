
// 设置滚动事件
function Jump(opt) {
    var defaultOpt = {
        //默认参数
        iw: 150, //宽度 (可选)
        ih: 200,//高度 (可选)
        scrollY : 200,
        speed:200,
        // imgs:'../img/honor7.jpg',
    }
    
    
    Object.assign(defaultOpt, opt);//用默认参数 ：defaultOpt

    var totop = document.getElementsByClassName(defaultOpt.ele)[0];
    var img = totop.getElementsByTagName(defaultOpt.imgs)[0];
  
    
    window.onscroll = function () {
        // 获取高度
        var scrollY = window.scrollY;
        if (scrollY >= defaultOpt.scrollY) {
            totop.style.display = "block";
        }
        else {
            // totop.style.display = "none"
        }

        // 点击按钮的时候让它缓慢的回到顶部
        // 样式一，右边的滚动条动

        // totop.onclick = function () {
        //     // 缓慢回到，就要想到设置定时器
        //     var scrollY = window.scrollY;
        //     var timer1 = setInterval(function () {
        //         var speed = defaultOpt.speed;
        //         scrollY -= window.scrollY;
        //         speed -= 10;
        //         if (speed <= 0) {
        //             speed = 200;
        //             clearInterval(timer1);
        //         }
        //         // console.log(speed, scrollY);
        //         window.scrollTo(0, speed);

        //     }, 30);
           
        //     var timer2 = setInterval(function () {
        //         scrollY -=defaultOpt.speed;
        //         if (scrollY <= 10) {
        //             clearInterval(timer1);
        //             clearInterval(timer2);
        //         }
        //         window.scrollTo(0, top);
        //     }, 100);

        // }

        // 样式二
        totop.onclick = function () {
            // 缓慢回到，就要想到设置定时器
            var scrollY = window.scrollY;
            var timer1 = setInterval(function () {
                var speed = defaultOpt.speed/5;
                scrollY -= speed;
                // scrollY-=40;
                if (speed <= 10) {
                    scrollY = 0;
                    clearInterval(timer1);
                }
                // console.log(speed, scrollY);
                window.scrollTo(0, speed);

            }, 30);

            var height =0;
            var timer2 = setInterval(function () {
                if (scrollY > 0) {
                    height += 20;
                    totop.style.bottom = height + 'px';
                    totop.style.opacity = 0.5;
                } else if (scrollY <=0) {
                    totop.style.display = "none";
                    totop.style.bottom = 20 + 'px';
                    clearInterval(timer1);
                    clearInterval(timer2);
                }

            }, 30);
        }
    }
    setTimeout(function () {
        window.scroll(0, 0);
    }, 0);
    
}
