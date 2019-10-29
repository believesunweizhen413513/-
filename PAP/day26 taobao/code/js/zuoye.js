
var box = document.getElementById('box');
var ul = document.getElementById('ul');
var lis = ul.getElementsByTagName('li');
var shas = document.getElementsByClassName('sha');
(function () {
    var img = document.querySelector('.img');
    // console.log(location.href);//整个完整的网址  
    var str = decodeURI(location.search).slice(1); //去掉第一个问号
    // console.log(str);//id=001&name=iphone7 plugs&imgurl=img/ip7.jpg&price=5899&sale=5888&color=土豪金
    // 将字符串转成对象 

    function strToObj(str) {
        //创建一个空的json
        var json = {};
        //第一步：以&作为切割点
        var arr = str.split('&');
        arr.forEach(function (item) {
            //第二步：以=作为切割点
            var arr2 = item.split('=')//[id,001] [name,iphone7 plugs]
            json[arr2[0]] = arr2[1];//json[键名] = 键值；
        })
        return json;
    }
    var obj = strToObj(str);
    var imgs = obj.imgList.split(',');
    var str1 = '';//用来拼接小图字符串
    for (var j = 0; j < imgs.length; j++) {
        str1 += `<img class="smallPic" src="${imgs[j]}" alt="">`;
    }
    var html = `                   
                <div id="smallimg">
                    <img src="${imgs[0]}">
                    <span id="lay"></span>
                </div>
                <div id="bigimg">
                   <img id="img1" src="${imgs[0]}">
                </div>
                <div class="small">
                    ${str1}
                </div>
                <p>收藏宝贝(435人气)</p>`
    img.innerHTML = html;

})();
// 选项卡
for (var i = 0; i < lis.length; i++) {
    lis[i].index = i;
    lis[i].onclick = function () {
        for (var j = 0; j < lis.length; j++) {
            lis[j].className = '';
            shas[j].style.display = 'none';
        }
        this.className = 'active';
        shas[this.index].style.display = 'block';
    }
}

var small = document.querySelector('.small');
var imgs = small.getElementsByTagName('img');
(function () {
    for (var i = 0; i < imgs.length; i++) {
        imgs[i].index = i;
        imgs[i].onmouseover = function () {
            for (var j = 0; j < imgs.length; j++) {
                imgs[j].className = 'none';
            }
            console.log(imgs.length)
            this.className = 'active1';
            this.parentNode.previousElementSibling.children[0].src = this.src;
            this.parentNode.previousElementSibling.previousElementSibling.children[0].src = this.src;
        }
    }
})();
(function () {
    var top = ul.offsetTop;
    window.onscroll = function () {
        var scolltop = window.scrollY;
        if (scolltop >= top) {
            ul.className = 'fix';
        } else {
            ul.className = '';
        }
    }

})();
window.onload = function () {
    // 小图盒子节点
    var small = document.getElementById('smallimg');
    //大图盒子节点
    var big = document.getElementById('bigimg');
    // 放大镜节点
    var lay = document.getElementById('lay');
    // 大图图片节点
    var bigimg = document.getElementById('img1');
    //    鼠标移入时，将放大镜和大图盒子显示出来
    small.onmouseover = function () {
        big.style.display = 'block';
        lay.style.display = 'block';

    }
    //    鼠标移出时，将放大镜和大图盒子隐藏出来
    small.onmouseout = function () {
        big.style.display = 'none';
        lay.style.display = 'none';

    }

    // 鼠标移入小图时鼠标移动事件
    small.onmousemove = function (e) {
        e = e || event;
        // 图片放大比例
        var scale = 4;
        var a = window.scrollX;
        var b = window.scrollY;

        //将鼠标放到放大镜的中间，clientX获取鼠标x轴的坐标
        var x = e.clientX - small.offsetLeft - lay.offsetWidth / 2 + a;
        var y = e.clientY - small.offsetTop - lay.offsetHeight / 2 + b;

        //将放大镜的宽高与盒子的宽高结合起来按比例放缩
        lay.style.width = parseInt(small.offsetWidth / scale) + 'px';
        lay.style.height = parseInt(small.offsetHeight / scale) + 'px';
        //设置大盒子图片的宽高
        bigimg.style.width = small.offsetWidth * scale + 'px';
        bigimg.style.height = small.offsetHeight * scale + 'px';
        //边界问题
        //左边界的判断，当超出时将x置为0;
        if (x < 0) {
            x = 0;
        }
        //右边界的判断，当超出时将x置为Box的宽度减去放大镜的宽度;
        if (x >= small.offsetWidth - lay.offsetWidth) {
            x = small.offsetWidth - lay.offsetWidth;
        }
        //上边界的判断，当超出时将y置为0;
        if (y < 0) {
            y = 0;
        }
        //下边界的判断，当超出时将y置为Box的高度减去放大镜的高度;
        if (y >= small.offsetHeight - lay.offsetHeight) {
            y = small.offsetHeight - lay.offsetHeight;
        }
        // 将x，y，作为放大镜的定位值

        lay.style.left = x + 'px';
        lay.style.top = y + 'px';
        //同比例放缩，大的盒子图片的放缩比例，
        // 当小盒子向右移动的时候，大盒子向左移动同等的比例的宽高，方向是相反的
        var left = lay.offsetLeft * scale;
        var top = lay.offsetTop * scale;
        // 因为大图被放大四倍，所以对应的偏移量也要放大
        bigimg.style.marginLeft = (left * (-1)) + 'px';
        bigimg.style.marginTop = (top * (-1)) + 'px';

    }
}

var cut = document.getElementById('cut');
var add = document.getElementById('add');
var text = document.getElementById('text');
cut.onclick = function () {
    text.value--;
    if (text.value <= 1) {
        text.value = 1;
    }   
}
add.onclick = function () {
    text.value++;
    if (text.value >= 10) {
        text.value = 10;
    }
}



