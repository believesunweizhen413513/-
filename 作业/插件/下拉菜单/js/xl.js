function dropDownList(opt) {

    let defaultobj = {
        //以后想到了有什么要做成默认参数的就添加进去
    }

    Object.assign(defaultobj, opt);

    //找节点
    let box = getid(defaultobj.ele);
    let btn = box.getElementsByClassName('btn')[0];
    let con = box.getElementsByClassName('con')[0];

    //绑定点击事件
    // btn.onclick = (ev) => {
    //     con.classList.toggle('disa');
    //     ev.stopPropagation();//阻止事件冒泡
    // }

    // document.onclick = () => {
    //     con.classList.add('disa');
    // }

    //鼠标移入移出
    btn.onmouseover = () => {
        con.classList.remove('disa');
    }

    btn.onmouseout = () => {
        con.classList.add('disa');
    }
}