(function () {

    // var center= document.querySelector('#shopping-center');
    var shoppingcenter = document.getElementById('shopping-center');
    var goodsList = [{
        shopname: '茶香阁',
        imgUrl: '../img/d1.jpg',
        goodsInfo: '号地块健身房回复的科技示范户快速坚实的看了看大家发快递了很费劲的开始放假',//商品名字
        goodsParams: '四季度后付款的酸辣粉',//参数
        singprice: 199,//商品单价
        goodsCount: 5//库存量

    },
    {

        imgUrl: '../img/d1.jpg',
        goodsInfo: '号地块健身房回复的科技示范户快速坚实的看了看大家发快递了很费劲的开始放假',
        goodsParams: '四季度后付款的酸辣粉',
        singprice: 299,
        goodsCount: 6
    },
    {

        imgUrl: '../img/d1.jpg',
        goodsInfo: '号地块健身房回复的科技示范户快速坚实的看了看大家发快递了很费劲的开始放假',
        goodsParams: '块电费简单来说记录',
        singprice: 399,
        goodsCount: 10
    },
    {

        imgUrl: '../img/d1.jpg',
        goodsInfo: '号地块健身房回复的科技示范户快速坚实的看了看大家发快递了很费劲的开始放假',
        goodsParams: '块电费简单来说记录',
        singprice: 399,
        goodsCount: 12
    }
    ];

    var html = goodsList.map(function (item) {
        return ` <div class="center">
        <ul id="list2">
            <li>
                <label><input type="checkbox" class="list-item" />
            </li>
            <li>
                <img src="${item.imgUrl}" alt="">
                <span class="xinxi">${item.goodsInfo}</span>
            </li>
            <li>${item.goodsParams}</li>
            <li><span>￥</span><span class="single-price">${item.singprice}</span></li>
            <li>
                <input type="button" name="" value="-" class="cut">
                <input type="text" class="num" value="1" data-kucun='${item.goodsCount}'>
                <input type="button" value="+" class="add">
            </li>
            <li><span>￥</span><span class="single-total">199</span></li>
            <li><button type="button" class="item-delete">删除</button></li>
        </ul>
    </div>`
    }).join('');
    shoppingcenter.innerHTML = html;

    //2.点击加减按钮、手动输入控制数量的改变(数量在库存范围内)
    var carcut = document.querySelectorAll('.cut');//减号
    var carAdd = document.querySelectorAll('.add');//加号
    var goodNum = document.querySelectorAll('.num');//数量
    var singleTotal = shoppingcenter.getElementsByClassName('single-total');//小计
    var singlePrice = shoppingcenter.getElementsByClassName('single-price');//单价
    var itemDelete = shoppingcenter.getElementsByClassName('item-delete');
    var center = shoppingcenter.getElementsByClassName('center');//
    var list2 = document.getElementById('list2');//ul
    var li = document.querySelector('#list2 li');//li
    var checkedAll = document.querySelector('.checked-All');//全选
    // var checkshops = document.getElementById('check-shops');
    var listitem = document.getElementsByClassName('list-item');//单个勾选

    var selectCount = document.querySelector('.selectCount');//选择的总数量
    var countmoney = document.querySelector('.count');//总金额
    var jiesuan = document.querySelector('.jiesuan');//结算
    var itemdeleteAll = document.querySelector('.item-deleteAll');//全选
    var fun=document.getElementById("fun");
    index();
    function changeNum(num, now) {//思路2：绑定索引的方式
        var kucun = goodNum[now].dataset.kucun;
        if (num < 1) {//下限：最小一份
            num = 1;
        } else if (num >= kucun) {//上限：不能超过库存量
            num = kucun;
        }
        goodNum[now].value = num;
        console.log(num);
        //小计==数量 * 单价;
        singleTotal[now].innerHTML = num * singlePrice[now].innerHTML;
        total();//数量变化，总价和总数量要跟着变
    }
    function index(){
        for (var i = 0; i < center.length; i++) {
            //绑定索引
            carAdd[i].index = i;
            carcut[i].index = i;
            goodNum[i].index = i;
            itemDelete[i].index = i;
        }
    }
    for (var i = 0; i < carAdd.length; i++) {
        //绑定索引
        index();
        carAdd[i].onclick = function () {
            //加数量
            //思路2：
            var num = goodNum[this.index].value;
            num++;
            changeNum(num, this.index);
        }

        carcut[i].onclick = function () {//减数量
            var num = goodNum[this.index].value;
            num--;
            changeNum(num, this.index);
        }

        goodNum[i].oninput = function () {
            var num = this.value;
            changeNum(num, this.index);
        }

        //删除当行
        itemDelete[i].onclick = function () {
            // console.log(this.index);
            var itemDelete = shoppingcenter.getElementsByClassName('item-delete');
            var res = confirm('您确定要删除这行吗？');
            if (res) {
                //父节点.removeChild(goodsItem[])
                shoppingcenter.removeChild(center[this.index]);
            }
            total();
            index();
        }

    }
    //3、全选
    checkedAll.onclick = function () {
        // 循环listitem的长度，让全选时每个的状态等于全选的状态
        for (var i = 0; i < listitem.length; i++) {
            listitem[i].checked = checkedAll.checked;
        }
        console.log(checkedAll);
        total();
    }

    //反控制全选
    function ischeckall() {
        // var isok = false;
        var num = 0;
        var arr = [];//存放被勾选的下标，方便后期判断第几行被选中
        for (var i = 0; i < listitem.length; i++) {
            if (listitem[i].checked) {
                num++;
                arr.push(i);
            }
        }
        if (num == listitem.length) {//控制全选的勾选状态
            checkedAll.checked = true;
        } else {
            checkedAll.checked = false;
        }
        return arr;
    }

    function total(arr) {
        //计算总数量和总价格
        var arr = ischeckall();//拿到了被勾选的那行对应的下标 [0,2,3]
        var sum = 0;//存总数量
        var priceAll = 0;//存总价的
        arr.forEach(function (item) {
            sum += goodNum[item].value * 1;
            priceAll += singleTotal[item].innerHTML * 1;
        });
        selectCount.innerHTML = sum;
        countmoney.innerHTML = priceAll.toFixed(2);
        if (arr.length) {
            //肯定有被勾选的产品，可以让结算高亮显示(可以点击了)
            fun.className = 'submitDis';
        } else {
            fun.className = 'jiesuan ' ;
        }
    }

    for (var i = 0; i < listitem.length; i++) {
        listitem[i].onclick = function () {
            total();
        }
    }
    // 全删
    itemdeleteAll.onclick = function () {
        var arr = ischeckall().reverse();//拿到被勾选的行数，就知道要删除哪些行了
        var res = confirm('您确定要删除选中的行吗？');
        if (res) {
            arr.forEach(function (item) {
                shoppingcenter.removeChild(center[item]);
            });
            total();
        }
        index();
    }
})();