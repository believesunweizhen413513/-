function jump(opt) {

    let defaultobj = {

    }

    Object.assign(defaultobj, opt);

    //获取节点
    var index = document.getElementById(defaultobj.ele);
    var box = document.getElementById('box');
    var nav = index.getElementsByClassName('nav')[0];
    var con = index.getElementsByClassName('con')[0];
    var arr1 = defaultobj.arr1;

    let html1 = '';
    let html2 = '';
    for(let i = 0; i < arr1.length; i++) {
        html1 += `<li>${i + 1}F</li>`;
        html2 += `<li>${arr1[i]}</li>`;
    }
    nav.innerHTML = html1;
    con.innerHTML = html2;


    var aNav = nav.getElementsByTagName('li');
    var aCon = con.getElementsByTagName('li');

    //判断什么时候出现小火箭和nav列表(要用到onscroll事件，不断的获取scrollY的值)
    //我们还要根据滚轮滚到的距离，来使对应的nav li高亮
    window.onscroll = function () {
        var tall = window.scrollY;
        if (tall >= 200) {
            box.style.display = 'block';
            nav.style.display = 'block';
        } else {
            box.style.display = 'none';
            nav.style.display = 'none';
        }
        for (var i = 0; i < aCon.length; i++) {
            if ((tall + 1) >= aCon[i].offsetTop) {
                delAll(aNav);//排他
                aNav[i].className = 'active';
            }
        }
    }

    //小火箭的点击事件
    box.onclick = function () {
        var speed = 800;
        var top = window.scrollY;
        // 让高度分5步，每次0.5s回到0的位置
        box.style = 'animation: fire .5s steps(5) infinite;';
        var timer1 = setInterval(function () {
            speed -= 10;//速度每次减等10
            if (speed <= 0) {//当速度小于等于0的时候让速度等于200减少循环次数
                speed = 200;
            }
        }, 30);

        var timer2 = setInterval(function () {
            top -= speed;
            if (top <= 0) {
                clearInterval(timer1);
                clearInterval(timer2);
                box.style.animation = '';
            }
            window.scrollTo(0, top);
        }, 100);
    }

    //给aCon每个节点背景颜色和高度
    for (var i = 0; i < aCon.length; i++) {
        aCon[i].style.background = ranCol('rgb');//ranCol是随机生成颜色函数
        aCon[i].style.height = window.innerHeight + 'px';
        aCon[i].style.lineHeight = window.innerHeight + 'px';
    }

    //nav的点击事件
    for (var i = 0; i < aNav.length; i++) {
        aNav[i].index = i;
        aNav[i].onclick = function () {
            var num = this.index;
            delAll(aNav);//排他
            aNav[num].classList.add('active');
            console.log(num);
            console.log(aNav[this.index]);
            window.scrollTo(0, (num * window.innerHeight) + 200);//让对应的con也跳转到相应的楼层，加200是头部header的高度
        }
        aNav[i].onmouseover = function () {
            var num = this.index;
            this.innerHTML = arr1[num];
        }
        aNav[i].onmouseout = function () {
            var num = this.index;
            this.innerHTML = num + 1 + 'F';
        }
    }

    //当鼠标划进nav li
//     for (var i = 0; i < aNav.length; i++) {
//         aNav[i].index = i;
//         aNav[i].onmouseover = function () {
//             var num = this.index;
//             this.innerHTML = arr1[num];
//         }
//         aNav[i].onmouseout = function () {
//             var num = this.index;
//             this.innerHTML = num + 1 + 'F';
//         }
//     }

 }