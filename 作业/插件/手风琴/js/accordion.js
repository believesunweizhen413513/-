function accordion(opt) {

    let defaultobj = {
        iw: 120,//手风琴的宽
    };

    Object.assign(defaultobj, opt);


    //找元素
    var box = document.getElementById(defaultobj.ele);

    // 循环生成con
    for (let i = 0; i < defaultobj.con.length; i++) {
        var newC = document.createElement('div');
        newC.className = 'con';
        box.appendChild(newC);
    }

    // 循环拼接，渲染数据
    let cons = box.getElementsByClassName('con');
    for (let i = 0; i < defaultobj.con.length; i++) {
        let newH = `<h1>${defaultobj.con[i][0]}</h1>`;
        let newU = '<ul>';
        // 注意循环下标要从1开始，因为0都是h1，
        for (let j = 1; j <= defaultobj.con[i].length - 1; j++) {
            newU += `<li>${defaultobj.con[i][j]}</li>`;
        }
        newU += '</ul>';
        cons[i].innerHTML = newH + newU;
    }

    let btns = box.getElementsByTagName('h1');

    box.style.width = defaultobj.iw + 'px';
    /*
        需求：滑过的版手风琴效果
            * 点击的时候，让对应的ul显示：高度恢复
    */

    for (let i = 0; i < btns.length; i++) {
        btns[i].istrue = true;
        cons[i].onclick = function () {
            if (btns[i].istrue) {
                var now = this.lastElementChild;
                now.style.height = '120px';
            } else {
                var now = this.lastElementChild;
                now.style.height = '0';
            }
            btns[i].istrue = !btns[i].istrue;
           
        }
    }

}