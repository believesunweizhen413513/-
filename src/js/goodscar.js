(function () {
    let productlist=document.getElementsByClassName('product-list')[0]
    let itemselected=document.getElementById('product-1-6652');
    // console.log(itemselected);
    
    let username = getcookie('username');
    function init() {
        ajax({
            type: 'get',
            url: '../api/goodsCar.php',
            data: {
                'username': username,
            },
            success: str => {
                create(str);
                // console.log(str); 
            }
            
        });
        function create(str) {
            if (str != '您的购物车空空如也') {
                let goodsList = JSON.parse(str);
                // console.log(goodsList); 
                var html = goodsList.map(function (item) {
                    return ` <div class="item item_selected sigel" id="66528557657">
                    <section class="mj" id="manjian-6652"></section>
                    <div class="item_form cl" data-id="${item.gid}">
                        <div class="cell p-checkbox">
                            <input class="checkbox" type="checkbox" data-cartid="29393" name="checkItem"
                                 value="1" sku="6652_0_0_0" data-productid="6652">
                            <input type="hidden" data-disamount="0.00" name="disAmount">
                        </div>


                        <div class="cell p-goods">
                            <div class="p-img"><a href="/productdetail/6652.htm" target="_blank"><img
                                        src="${item.imgurl}"
                                        alt=""></a></div>
                            <div class="p-name">
                                <a href="/productdetail/6652.htm" target="_blank">
                                    ${item.title}<br>

                                </a><br>

                            </div>


                            <div class="p-code">商品货号：66528557657${item.gid}</div>

                        </div>

                        <div class="cell p-price">
                            ￥<span class="price singel">${item.price}</span>
                        </div>
                        <div class="cell p-price ">
                        ￥<span class="price xiaoji">${((item.price)*(item.counts)).toFixed(2)}</span>
                    </div>
                        <div class="cell p-quantity"data-id=${item.gid}>
                            <div class="quantity-form" data-id=${item.gid}>
                                <a href="javascript:void(0);" class="decrement" sku="6652_0_0_0">-</a>
                                <input type="text" class="quantity-text quantity-1" value="${item.counts}" data-kucun="20"
                                    onkeyup="(this.v=function(){this.value=this.value.replace(/[^0-9-]+/,'');}).call(this)"
                                    onblur="this.v()" name="count" sku="6652_0_0_0">
                                <a href="javascript:void(0);" class="increment" sku="6652_0_0_0">+</a>
                            </div>
                        </div>
                        <div class="cell p-remove">
                            <a class="cart-remove" href="javascript:removeFromCart('6652_0_0_0')">删除</a>
                        </div>


                    </div>
                </div>`
                }).join('');
                itemselected.innerHTML = html;
                show();
            };
        };
    }
    init();

    function show() {
        var cut = document.getElementsByClassName('decrement');
        var goodsCount = document.getElementsByClassName('quantity-1');
        var add = document.getElementsByClassName('increment');
        var singlePrice = document.getElementsByClassName('singel');
        var singleTotal = document.getElementsByClassName('xiaoji');

        var itemDelete = document.getElementsByClassName('cart-remove');

        
        var panelBody = document.getElementsByClassName('item_form');

        var checkbox = document.getElementsByClassName('checkbox');

        var checkAllBottom = document.querySelector('.jdcheckbox');
        // console.log(checkAllBottom);
        

        var zongjia = document.querySelector('#finalPrice');

        var zongshu = document.querySelector('#selectedCount');

        var jiesuan = document.querySelector('.jdcheckbox');

        var deleteAll = document.querySelector('#remove-batch');

        var productss = document.querySelectorAll('.sigel');
     
        console.log(Lline);
      
        // var shopCheck = document.querySelector('#check-goods-all');
        // var shopname = document.querySelector('.car-menu');
        index();
        let gid;

        function count(num, now) {
            var kucun = goodsCount[now].dataset.kucun;
            if (num < 1) {
                num = 1;
                singleTotal[now]=singlePrice[now];
            }
            if (num >= kucun) {
                num = kucun;
                singleTotal[now]=singlePrice[now]*num;
            }
         
            changGoodsCount(username, gid, num);
            goodsCount[now].value = num;
            singleTotal[now].innerHTML = (singlePrice[now].innerHTML * num).toFixed(2);
            total();//数量变化，总价和总数量要跟着变
        }
        // 单独绑定索引，每次删除项目后要重新获取索引
        function index(){
            for (var i = 0; i <panelBody.length; i++) {
                cut[i].index = i;
                add[i].index = i;
                checkbox[i].index = i;
                itemDelete[i].index = i;
                // console.log(goodsCount[i].index);
                goodsCount[i].index = i;
            }
        }


        for (var i = 0; i < cut.length; i++) {
            index();
            // 点击数量减一
            cut[i].onclick = function () {
                var num = goodsCount[this.index].value * 1;
                num--;
                gid = this.parentNode.parentNode.dataset.id;
                count(num, this.index);
            }
            // 点击数量加一
            add[i].onclick = function () {
                var num = goodsCount[this.index].value * 1;
                num++;
                gid = this.parentNode.parentNode.dataset.id;
              
                
                count(num, this.index);
            }
            // 点击删除
            itemDelete[i].onclick = function () {
                itemDel(this.index);
                gid = this.parentNode.parentNode.dataset.id;
                console.log(gid);
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
                index();
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
                    // console.log(str);
                }
            })
        }

        //3、全选
        checkAllBottom.onclick = function () {
            for (var j = 0; j <checkbox.length; j++) {
                // console.log(checkbox);
                checkbox[j].checked = checkAllBottom.checked;
                if (checkbox[j].checked) {
                    panelBody[j].style.background = 'pink';
                } else {
                    panelBody[j].style.background = '';
                }
               
            }
            total();
        }
       
        // 全删
        deleteAll.onclick = function () {
            var arr2 = ischeckall().reverse();
            var res = confirm('确定要删除选中的商品吗？')
            if (res) {
                arr2.forEach(function (item) {
                    itemselected.removeChild(productss[item]);
                    ajax({
                        type: 'post',
                        url: '../api/deleteGoods.php',
                        data: {
                            'type': 'delallgoods',//删除类型
                            username,//用户名
                            gid,//商品id
                        },
                        success: str => {
                            // console.log(str);
                        }
                    })
                })
                if (productss.children.length == 1) {
                    itemselected.removeChild(productss[item]);
                }
                total();
                index();
            }

        }
        // 删除单行
        function itemDel(now) {
            var res = confirm('老板，确定要删除此商品吗？');
            if (res) {
                itemselected.removeChild(productss[now]);
            }
            total();
            index();
        }

        function ischeckall() {
            var num1 = 0;
            var arr = [];
            for (var j = 0; j <checkbox.length; j++) {
            //   console.log(checkbox);
                if (checkbox[j].checked) {
                    num1++;
                    arr.push(j); 
                }  
            }
            if (num1 == checkbox.length) {
                checkAllBottom.checked = true;
                checkbox.checked = true;
            } else {
                checkAllBottom.checked = false;
                checkbox.checked = false;
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
            // if (arr.length) {
            //     //肯定有被勾选的产品，可以让结算高亮显示(可以点击了)
            //     jiesuan.className = 'active submitData';
            // } else {
            //     jiesuan.className = 'submitData';
            // }

        }
    }
    var Lline = document.querySelector('.L-line a');
    var Logout = document.getElementById('Logout');
    let usernow =getcookie('username');
    Lline.innerHTML=usernow;
    Logout.onclick=ev=>{
        location.href="login.html?"
    }
})();