function tabs(opt) {

    let defaultobj = {
        start:1//选项卡一开始的位置就是一开始active是哪个
    };

    Object.assign(defaultobj,opt);

    //获取节点
    let box = getid(defaultobj.ele);
    let list = box.getElementsByClassName('list')[0];
    let con = box.getElementsByClassName('con')[0];


    //渲染选项卡的数量
    let newLi = '';
    for(let i = 0;i < defaultobj.liName.length; i++) {
        newLi += `<li>${defaultobj.liName[i]}</li>`;
    }
    list.innerHTML = newLi;
    con.innerHTML = newLi;

console.log( newLi);
console.log( list);
console.log( con);

    let aLis = list.getElementsByTagName('li');
    let aLis2 = con.getElementsByTagName('li');

    // for(let i = 0; i < aLis.length; i++) {
    //     aLis[i].innerHTML = defaultobj.liName[i];
    // }


    function sta() {
        for (let j = 0; j < aLis2.length; j++) {
            aLis2[j].style.display = 'none';
        }
    }

    sta();
    aLis[defaultobj.start].className = 'active';
    aLis2[defaultobj.start].style.display = 'block';//让active对应下标的内容显示



    //点击事件
    for (let i = 0; i < aLis.length; i++) {
        aLis[i].onclick = function () {
            delAll(aLis);//排他
            aLis[i].className = 'active';
            sta();//排他
            aLis2[i].style.display = 'block';
        }
    }
}