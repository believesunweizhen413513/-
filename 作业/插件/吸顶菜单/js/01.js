function ceilbot(opt) {

    let defaultobj = {
        num : 3//要关几次才能关掉底部广告
    }

    Object.assign(defaultobj, opt);

    //找节点
    let box = document.getElementById(defaultobj.ele);
    let bGd = box.getElementsByClassName('bGd')[0];
    let list = box.getElementsByClassName('list')[0];
    let cha = bGd.getElementsByTagName('p')[0];
    let lTop = list.offsetTop;//获取ul到顶部的距离，offsetTop

    //滚动事件
    var pNum = 1;//用来判断是否有点击x(计数器)
    window.onscroll = function () {
        var tall = window.scrollY;
        // 吸顶菜单，当滚动距离大于ul到顶部的距离时，吸顶
        if (tall >= lTop) {
            list.classList.add('pos');
        } else {
            list.classList.remove('pos');
        }
        if (pNum <= defaultobj.num) {
            if (tall >= 300) {
                bGd.style.display = 'block';
                bGd.classList.add('fix');
            }
        }
    }

    //实现x事件，点击x的时候判断
    cha.onclick = function () {
        bGd.style.display = 'none';
        bGd.classList.remove('fix');
        if (pNum <= defaultobj.num) {
            pNum++;
            var timer = setTimeout(function () {
                bGd.style.display = 'block';
                bGd.classList.add('fix');

            }, 1000);
        }
    }
}