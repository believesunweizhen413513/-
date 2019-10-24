function magnigroup(opt) {

    var defaultOpt = {
        //默认参数
        iw: 500, //宽度 (可选)
        ih: 300,//高度 (可选)
        imglist: ['../img/list1.gif', '../img/list2.gif', '../img/list3.gif', '../img/lsy.gif'],
        timer1:4,
        btnType:false,
    }

    //有配置用配置，没有配置用默认
    Object.assign(defaultOpt, opt);//用默认参数 ：defaultOpt 

    /*
        需求：轮播图第二种写法，图片是水平平铺，ul运动
            * 渲染数据到页面:li和焦点(分页)
            * 把第一张复制到末尾
            * ul的总宽：图片的个数 * 图片宽度
            * 开启定时器：自动轮播
            * 点击上下按钮可以切换图片
            * 点击焦点切换到对应图片
    */
    var banner = document.getElementById(defaultOpt.ele);
    banner.style.width = defaultOpt.iw + 'px';
    banner.style.height = defaultOpt.ih + 'px';
    var ul = banner.getElementsByTagName('ul')[0];
    var page = banner.getElementsByClassName('page')[0];
    var btnNext = banner.getElementsByClassName('btn-next')[0];
    var btnPrev = banner.getElementsByClassName('btn-prev')[0];
    // let arr = ['../img/lin44.gif', '../img/list1.gif', '../img/list2.gif', '../img/list3.gif', '../img/lsy.gif'];
    var imgArr = [];
    imgArr = defaultOpt.imglist;

    var html = '';//准备用来拼接图片
    var str = '';     //准备用来拼接焦点
    var now = 0;//在可视区中，对应li下标
    //渲染数据到页面:li和焦点(分页)
    imgArr.forEach((item, index) => {
        html += `<li data-index="${index}"><img src="${item}"></li>`
        str += `<span class="">${index + 1}</span>`//下标从1开始

    });
    ul.innerHTML = html;

    page.innerHTML = str;
    // 让第一个焦点颜色高亮
    page.children[0].classList.add('active');
    
   

    //2.把第一张复制到末尾
    let firstLi = ul.children[0].cloneNode(true);
    ul.appendChild(firstLi);

    var img = ul.querySelectorAll('li img');
    // 方法一
    for(var i=0;i<img.length;i++){
        img[i].style.width=defaultOpt.iw + 'px';
        img[i].style.height=defaultOpt.ih + 'px';
    }
    // 方法二
    // for (let a of img) {
    //     css(a, 'width', defaultOpt.iw + 'px');
    //     css(a, 'height', defaultOpt.ih + 'px');
    // }

    //3.ul的总宽：图片的个数 * 图片宽度
    let iw = ul.children[0].offsetWidth;
    // console.log(iw);
    ul.style.width = ul.children.length * iw + 'px';

    //4.开启定时器：自动轮播
    timer = setInterval(next, defaultOpt.timer1*1000);//2秒切换一个图片

   

    function next() {//下一张
        now++;
        tab();
    }

    function prev() {//下一张
        now--;
        tab();
    }

    //切换图片
    function tab() {
        if (now > ul.children.length - 1) {
            now = 1;//回到第二张
            ul.style.left = 0;
        }
        if (now < 0) {
            now = ul.children.length - 2;
            ul.style.left = (ul.children.length - 1) * -iw + 'px';//往右边走
        }
        startMove(ul, { 'left': now * -iw });
        light();
    }

    //焦点跟随
    function light() {
        //排他
        for (let ele of page.children) {
            ele.classList.remove('active');
        }
        let index = ul.children[now].dataset.index;
        page.children[index].classList.add('active');
    }

    //5.点击上下按钮可以切换图片
    //鼠标移入停止，离开就继续运动
    banner.onmouseover = () => {
        clearInterval(timer);
        if (!defaultOpt.btnType) {
            btnNext.style.display = 'block';
            btnPrev.style.display = 'block';
        }
    }

    banner.onmouseout = () => {
        clearInterval(timer);
        timer = setInterval(next, defaultOpt.timer1 * 1000);//每隔两秒切换一个图片
        if (!defaultOpt.btnType) {
            btnNext.style.display = 'none';
            btnPrev.style.display = 'none';
        }
    }

    //判断按钮是否一开始显示隐藏
    if (defaultOpt.btnType) {
        //true
        btnNext.style.display = 'block';
        btnPrev.style.display = 'block';
    } else {
        btnNext.style.display = 'none';
        btnPrev.style.display = 'none';
    }
 
  

    //上一张
    btnPrev.onclick = () => {
        prev();
    }
    //下一张
    btnNext.onclick = () => {
        next();
    }
    //4.点击焦点切换图片
    page.onclick = ev => {
        if (ev.target.tagName == 'SPAN') {
            now = ev.target.innerHTML - 1;
            tab();
        }
    }
};