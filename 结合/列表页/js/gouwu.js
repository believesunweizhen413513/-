(function () {
    /*
       购物车特效实现：参考淘宝的多店铺效果
           - 商品列表渲染(目前是准备假数据)
           - 点击加减按钮、手动输入控制数量的改变(数量在库存范围内)
           - 数量变-小计要跟着变
           - 删除当行
           - 全选：计算总价和总数量(很多地方需要调用该功能)
           - 全删:删除多行
    */
    // 查找渲染的节点
    var goodsContent = document.querySelector('.goods-content');
    var goodsItem = document.querySelector('.goods-item');
    let username = getCookie('username');
    function init() {
        ajax({
            type: 'get',
            url: '../api/goodsCar.php',
            data: {
                'username': username,
            },
            success: str => {
                create(str);

            }
        });
        //1.商品列表渲染
        function create(str) {
            if (str != '您的购物车空空如也') {
                let goodsList = JSON.parse(str);
                var html = ` <div class="car-menu">
                        <input type="checkbox" id="check-goods-all" />
                        <span class="shopname">安踏旗舰店</span>
                    </div>`
                var html2 = goodsList.map(function (item) {
                    return `
                    <div class="panel-body" data-id="${item.gid}">
                        <div class="col-md-1 ">
                            <input type="checkbox" class="goods-list-item">
                        </div>
                        <div class="goods-image-column">
                            <img class="goods-image" src="${item.imgurl}" style="width: 100px; height: 100px;">
                            <span id="goods-info">${item.title}</span>
                        </div>
                        <div class="col-md-3 ">${item.goodsParams}</div>
                        <div class="goods-price">
                            <span>￥</span><span class="single-price">${item.price}</span>
                        </div>
                        <div class="goods-counts">
                            <input type="button" class="cut" value="-">
                            <input type="text" class="form-control goods-count"  value="${item.counts}" data-kucun="30">
                            <input type="button" class="add" value="+">
                        </div>
                        <div class="goods-money-count">
                            <span>￥</span><span class="single-total">${((item.price) * (item.counts)).toFixed(2)}</span>
                        </div>
                        <div class="goods-operate">
                            <button type="button" class="item-delete">删除</button>
                        </div>
                    </div>`
                }).join('');
                goodsItem.innerHTML = html + html2;
                show();
            };
        };

    };
    init();

    function show() {
        var cut = document.getElementsByClassName('cut');
        var goodsCount = document.getElementsByClassName('goods-count');
        var add = document.getElementsByClassName('add');
        var singlePrice = document.getElementsByClassName('single-price');
        var singleTotal = document.getElementsByClassName('single-total');
        var itemDelete = document.getElementsByClassName('item-delete');
        var panelBody = document.getElementsByClassName('panel-body');
        var checkbox = document.getElementsByClassName('goods-list-item');
        var checkAllBottom = document.querySelector('#checked-all-bottom');
        var zongjia = document.querySelector('#selectGoodsMoney');
        var zongshu = document.querySelector('#selectGoodsCount');
        var jiesuan = document.querySelector('#jiesuan');
        var deleteAll = document.querySelector('#deleteMulty');
        var shopCheck = document.querySelector('#check-goods-all');
        var shopname = document.querySelector('.car-menu');
        index();
        let gid;

        function count(num, now) {
            var kucun = goodsCount[now].dataset.kucun;
            if (num < 1) {
                num = 1;
            }
            if (num >= kucun) {
                num = kucun;
            }
            // let username = getCookie('username');
            console.log(username);
            changGoodsCount(username, gid, num);
            goodsCount[now].value = num;
            singleTotal[now].innerHTML = (singlePrice[now].innerHTML * num).toFixed(2);
            total();//数量变化，总价和总数量要跟着变
        }
        // 单独绑定索引，每次删除项目后要重新获取索引
        function index() {
            for (var i = 0; i < panelBody.length; i++) {
                cut[i].index = i;
                add[i].index = i;
                checkbox[i].index = i;
                itemDelete[i].index = i;
                goodsCount[i].index = i;
            }
        }


        for (var i = 0; i < cut.length; i++) {
            index();
            // 点击数量减一
            cut[i].onclick = function () {
                var num = goodsCount[this.index].value * 1;
                num--;
                count(num, this.index);
                gid = this.parentNode.parentNode.dataset.id;
            }
            // 点击数量加一
            add[i].onclick = function () {
                var num = goodsCount[this.index].value * 1;
                num++;
                count(num, this.index);
                gid = this.parentNode.parentNode.dataset.id;
            }
            // 点击删除
            itemDelete[i].onclick = function () {
                itemDel(this.index);
                gid = this.parentNode.parentNode.dataset.id;
                ajax({
                    type: 'post',
                    url: '../api/deleteGoods.php',
                    data: {
                        'type': 'delgoods',//删除类型
                        username,//用户名
                        gid,//商品id

                    },
                    success: str => {
                        console.log(str);
                    }
                })
            }
            // 选中那行高亮
            checkbox[i].onclick = function () {
                total();
                if (this.checked) {
                    panelBody[this.index].style.background = 'pink';
                } else {
                    panelBody[this.index].style.background = '';
                }
            }
            // 修改数量

            goodsCount[i].oninput = function () {
                var num = goodsCount[this.index].value * 1;
                if (isNaN(num)) {
                    alert('请输入正确的数字');
                } else {
                    count(num, this.index);
                    var num = goodsCount[this.index].value * 1;
                    gid = this.parentNode.parentNode.dataset.id;
                }

            }
        }
        function changGoodsCount(username, gid, counts) {
            ajax({
                type: 'post',
                url: '../api/goodsCarCount.php',
                data: {
                    username,//用户名
                    gid,//商品id
                    counts,//对应商品购买量
                },
                success: str => {
                    console.log(str);
                }
            })
        }

        //3、全选
        checkAllBottom.onclick = function () {
            for (var j = 0; j < checkbox.length; j++) {
                checkbox[j].checked = checkAllBottom.checked;
                if (checkbox[j].checked) {
                    panelBody[j].style.background = 'pink';
                } else {
                    panelBody[j].style.background = '';
                }

            }
            total();
        }
        shopCheck.onclick = function () {
            for (var j = 0; j < checkbox.length; j++) {
                checkbox[j].checked = shopCheck.checked;
            }

            total();
        }
        // 全删
        deleteAll.onclick = function () {
            var arr2 = ischeckall().reverse();
            var res = confirm('确定要删除选中的商品吗？')
            if (res) {
                arr2.forEach(function (item) {
                    goodsItem.removeChild(panelBody[item]);
                    ajax({
                        type: 'post',
                        url: '../api/deleteGoods.php',
                        data: {
                            'type': 'delallgoods',//删除类型
                            username,//用户名
                            gid,//商品id
                        },
                        success: str => {
                            console.log(str);
                        }
                    })
                })
                if (goodsItem.children.length == 1) {
                    goodsItem.removeChild(shopname)
                }
                total();
                index();
            }

        }
        function itemDel(now) {
            var res = confirm('老板，确定要删除此商品吗？');
            if (res) {
                goodsItem.removeChild(panelBody[now]);
            }
            total();
            index();
        }
        function ischeckall() {
            var num1 = 0;
            var arr = [];
            for (var j = 0; j < checkbox.length; j++) {
                if (checkbox[j].checked) {
                    num1++;
                    arr.push(j);
                }
            }
            if (num1 == checkbox.length) {
                checkAllBottom.checked = true;
                shopCheck.checked = true;
            } else {
                checkAllBottom.checked = false;
                shopCheck.checked = false;
            }
            return arr;
        }

        function total(arr) {
            var arr = ischeckall();
            var sum = 0;
            var priceAll = 0;
            arr.forEach(function (item) {
                sum += goodsCount[item].value * 1;
                priceAll += singleTotal[item].innerHTML * 1
            })
            zongshu.innerHTML = sum;
            zongjia.innerHTML = priceAll.toFixed(2);
            if (arr.length) {
                //肯定有被勾选的产品，可以让结算高亮显示(可以点击了)
                jiesuan.className = 'active submitData';
            } else {
                jiesuan.className = 'submitData';
            }

        }
    }
})();