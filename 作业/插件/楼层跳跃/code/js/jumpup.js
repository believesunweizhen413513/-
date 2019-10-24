function jumpup(opt) {
    let defaultobj = {

    }
    Object.assign(defaultobj, opt);
    // 获取节点
    var box = document.getElementById(defaultobj.ele);
    var nav = box.getElementsByClassName('nav')[0];
    var con = box.getElementsByClassName('con')[0];
    var arr = defaultobj.arr;
    // 拼接渲染数据

    let html1 = '';
    let html2 = '';
    for (let i = 0; i < arr.length; i++) {
        html1 += `<li>${i + 1}F</li>`;
        html2 += `<li>${arr[i]}</li>`;
    }
    nav.innerHTML = html1;
    con.innerHTML = html2;


    var aNav = nav.getElementsByTagName('li');
    var aCon = con.getElementsByTagName('li');

    // 给每个con一个随机的背景颜色
    for (let i = 0; i < aCon.length; i++) {
        aCon[i].style.background = ranCol('rgb');
        aCon[i].style.height = window.innerHeight + 'px';
        aCon[i].style.lineHeight = window.innerHeight + 'px'; // 让文字居中
    }
    // 让nav一开始隐藏，当滑动距离大于头部的时候让它显示
    window.onscroll = function () {
        var top = window.scrollY;
        if (top >= 200) {
            nav.style.display = 'block';
        } else {
            nav.style.display = 'none';
        }
        for (let i = 0; i < aCon.length; i++) {
            if (top + 1 >= aCon[i].offsetTop) {
                delAll(aNav);
                aNav[i].className = 'active'
            }
        }
    }

    // 点击nav的时候，跳转到相应的楼层
    for (let i = 0; i < aNav.length; i++) {
        aNav[i].index = i;
        aNav[i].onclick = function (ev) {
            delAll(aNav);//排他
            ev.target.className == 'active';
            window.scrollTo(0, (i * window.innerHeight) + 200);
        }
        // 鼠标滑入的时候，让nav的内容等于arr对应的内容
        aNav[i].onmouseover = function (ev) {
            delAll(aNav);//排他
            ev.target.innerHTML = arr[i];
        }
        aNav[i].onmouseout = function (ev) {
            delAll(aNav);//排他
            ev.target.innerHTML = i + 1 + "F";
        }
    }
}