function accordion(opt) {

    let defaultobj = {
        iw: 120,//手风琴的宽
        con: [
            ['体育', '体育1', '体育2', '体育3'],
            ['新闻', '新闻1', '新闻2', '新闻3'],
            ['娱乐', '娱乐1', '娱乐2', '娱乐3'],
            ['试试', '试试1', '试试2', '试试3']
        ],
    };

    Object.assign(defaultobj, opt);


    //找元素
    var box = document.getElementById(defaultobj.ele);
      // // 循环生成div
    for(var i=0;i<defaultobj.con.length;i++){
        var newC=document.createElement('div');
        newC.className='con';
        box.appendChild(newC);
    }
    // 循环生成con
    for (let i = 0; i < defaultobj.con.length; i++) {
        var newC = document.createElement('div');
        newC.className = 'con';
        box.appendChild(newC);
    }

    // 循环拼接，渲染数据,这里所有数据都必须用defaultobj.con来循环，
    // 如果只用一次生成cons，后面用cons的话，就拿不到defaultobj的数据
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

    box.style.width = defaultobj.iw + 'px';
    /*
        需求：滑过的版手风琴效果
            * 滑过的时候，让对应的ul显示：高度恢复
    */

    for (var i = 0; i < cons.length; i++) {
        // 滑过div的时候，让ul显示出来，
        cons[i].onmouseover = function (ev) {
            var iH = this.children[1].children.length * this.children[1].children[0].offsetHeight;
            startMove(this.children[1], { 'height': iH });
            if (ev.target.tagName == 'LI') {
                for (var i = 0; i < ev.target.parentNode.children.length; i++) {
                    ev.target.parentNode.children[i].className = '';
                }
                ev.target.className = 'active';
            }
        }
        cons[i].onmouseout = function (ev) {
            startMove(this.children[1], { 'height': 0 });
        }
    }
}