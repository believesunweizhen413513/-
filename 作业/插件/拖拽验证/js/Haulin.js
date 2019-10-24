function dropver(opt) {

    let defaultobj = {
        iw:400,//验证区域的宽高
        ih:200
    }

    Object.assign(defaultobj, opt);

    //获取节点
    let box = getid(defaultobj.ele);
    let bg = box.getElementsByClassName('bg')[0];
    let pic = bg.getElementsByClassName('pic')[0];
    let hole = bg.getElementsByClassName('hole')[0];
    let prog = box.getElementsByClassName('prog')[0];
    let pcon = prog.getElementsByTagName('p')[0];
    let bar = prog.getElementsByClassName('bar')[0];
    let tuo = bar.getElementsByClassName('tuo')[0];

    bg.style = `width: ${defaultobj.iw}px;height: ${defaultobj.ih}px;`;
    prog.style.width = defaultobj.iw + 'px';

    //top、left的值
    function ranT() {
        let top = parseInt(Math.random() * (bg.offsetHeight + 1 - hole.offsetHeight));
        let left = parseInt(Math.random() * (bg.offsetWidth + 1 - hole.offsetWidth));
        hole.style.top = pic.style.top = top + 'px';
        if (left <= 120) {
            left = 120
        }
        hole.style.left = left + 'px';
    }
    ranT();


    //按下tuo
    tuo.onmousedown = function () {
        pcon.innerHTML = '';
        pic.style.transition = '';
        tuo.style.transition = '';
        bar.style.transition = '';

        //滑动滑块，改变pic的位置
        document.onmousemove = function (ev) {
            var left = ev.pageX - prog.offsetLeft - tuo.offsetWidth / 2;
            if (left <= 0) {
                left = 0;
            } else if (left >= prog.offsetWidth - pic.offsetWidth) {
                left = prog.offsetWidth - pic.offsetWidth;
            }
            tuo.style.left = pic.style.left = left + 'px';
            bar.style.width = left + 'px';
            bar.style.backgroundColor = '#58bc58';
            if (left >= (hole.offsetLeft - 5) && left <= (hole.offsetLeft + 5)) {
                tuo.innerHTML = '√';
                pcon.innerHTML = '验证通过';
                pcon.style.color = '#58bc58';
                tuo.style.color = '#58bc58';
                document.onmousemove = null;
            } else {
                tuo.innerHTML = '→';
                tuo.style.color = '#000';
            }
        }

        //松开鼠标，要查看是否通过验证
        document.onmouseup = function () {
            if (tuo.offsetLeft < (hole.offsetLeft - 5) || tuo.offsetLeft > (hole.offsetLeft + 5)) {
                tuo.style.left = pic.style.left = 0 + 'px';
                pcon.innerHTML = '验证失败';
                pcon.style.color = 'red';
                bar.style.width = 0;
                bar.style.transition = `all 1.5s`;
                pic.style.transition = `all 1.5s`;
                tuo.style.transition = `all 1.5s`;
                document.onmousemove = null;
            }
        }
    }
}