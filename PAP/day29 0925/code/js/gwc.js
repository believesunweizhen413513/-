(function () {
    var box = document.getElementById('box');
    var head = document.getElementsByClassName('head')[0];
    var main1 = document.querySelector('.main1');
    var main11 = document.querySelector('.main1-1');
    var mainTop = document.getElementsByClassName('main-top')[0];
    var top = document.querySelector('.top');
    ajax({
        type: 'post',
        url: '../api/gwc.php',
        success: str => {
            let data = JSON.parse(str);
            xuran(data);
        }
    });
    function xuran(data) {
        var html = data.map(function (item) {
            return `<ul class="ul1" data-id="${item.id}">
                    <li>
                        <input type="checkbox" name="" id="" class="checkedAll">
                    </li>
                    <li>
                        <img src="${item.url}" alt="">
                        <span>${item.title}</span>
                    </li>
                    <li>
                       ${item.argument}
                    </li>
                    <li>
                    ￥<span class="pri">${item.price}.00</span>
                        <br>
                        ${item.free}期免息
                    </li>
                    <li>
                        <input type="button" value="-" class="btn1">
                        <input type="text" name="" id="" value="${item.num}" class="text">
                        <input type="button" value="+" class="btn2">
                        <p class="ku">库存量:
                                    <span class="kucun" data-kucun="${item.remain}">${item.remain}</span>
                                </p>
                    </li>
                    <li>
                    ￥<span class="tol"> ${item.total}.00</span>
                    </li>
                    <li class="li7">
                        <p class="delete">删除</p>
                        <p>移到我的关注</p>
                    </li>
                    </ul>`}).join('');
        top.innerHTML = html;
        var btn1s = document.getElementsByClassName('btn1');
        var btn2s = document.getElementsByClassName('btn2');
        var texts = document.getElementsByClassName('text');
        var ul1s = document.getElementsByClassName('ul1');
        var tols = document.querySelectorAll('#box .ul1 .tol');
        var pris = document.querySelectorAll('#box .ul1 .pri');
        var kucuns = document.querySelectorAll('#box .ul1 .kucun');
        var dels = document.querySelectorAll('.delete');
        var li7 = document.querySelectorAll('li7');
        //判断是否大于小于库存量
        function changeNum(num, now) {
            var ku = kucuns[now].dataset.kucun;
            // console.log(ku);
            if (num < 1) {
                num = 1;
            } else if (num >= ku) {
                num = ku;
            }
            texts[now].value = num;
            tols[now].innerHTML = num * pris[now].innerHTML;
            total();
            ajax({
                type: 'post',
                url: 'zsgc.php',
                data: {
                    id: 4,
                    num,
                },
                success: str => {
                    console.log(str);
                }
            });
        }
        //封装索引
        function index() {
            for (var i = 0; i < btn1s.length; i++) {
                btn1s[i].index = i;
                btn2s[i].index = i;
                texts[i].index = i;
                ul1s[i].index = i;
            }
        }
        index();
        //点击按钮加一减一
        for (var i = 0; i < btn1s.length; i++) {
            btn1s[i].onclick = function () {
                // var num = texts[this.index].value;
                var num = (this.parentNode.children[1].value * 1).toFixed(2);
                num--;
                changeNum(num, this.index);
            }
            btn2s[i].onclick = function () {
                // var num = texts[this.index].value;
                var num = this.parentNode.children[1].value * 1;
                num++;
                changeNum(num, this.index);
            }
            //手动输入数据
            texts[i].oninput = function () {
                var num = this.value;
                changeNum(num, this.index);
            }
            //删除当行
            dels[i].onclick = function () {
                var ul1s = document.getElementsByClassName('ul1');
                var res = confirm('您确定要删除这行吗？');
                if (res) {
                    top.removeChild(this.parentNode.parentNode);
                    ajax({
                        type: 'post',
                        url: 'delete.php',
                        data: {
                            id: 4,
                            del: 1
                        },
                        success: str => {
                            console.log(str);
                        }
                    });
                }
                index();
                total();
            }

        }
        //全选
        var qx = document.getElementsByClassName('qx')[0];
        var qx2 = document.getElementsByClassName('qx2')[0];
        var checkedAll = document.querySelectorAll('.checkedAll');//每一个ul1s前面的勾选框
        function xu() {
            qx.onclick = function () {
                for (var i = 0; i < ul1s.length; i++) {
                    checkedAll[i].checked = qx.checked;
                    qx2.checked = qx.checked;
                }
                total();
            }
            qx2.onclick = function () {
                for (var i = 0; i < ul1s.length; i++) {
                    checkedAll[i].checked = qx2.checked;
                }
                total();
            }
        }
        xu();
        //反控制全选
        function ischeck() {
            var isok = false;
            var num = 0;
            var arr = [];
            var ul1s = document.getElementsByClassName('ul1');
            for (var i = 0; i < ul1s.length; i++) {
                if (checkedAll[i].checked) {
                    num++;
                    arr.push(i);
                }
            }
            if (num == ul1s.length && num != 0) {
                qx.checked = true;
                qx2.checked = true;
            } else {
                qx.checked = false;
                qx2.checked = false;
            }
            return arr;
        }
        //计算总数量和总价格
        var jian = document.querySelector('.jian');
        var zongji = document.querySelector('.zongji');
        var jiesuan = document.querySelector('.jiesuan');
        var zongdel = document.querySelector('.zongdel');

        //计算总价高亮显示结算
        function total(arr) {
            var arr = ischeck();//拿到了被勾选的那行对应的下标 [0,2,3]
            var sum = 0;//存总数量
            var priceAll = 0;//存总价的
            arr.forEach(function (item) {
                sum += texts[item].value * 1;
                priceAll += tols[item].innerHTML * 1;
            });
            // console.log(sum);
            // console.log(priceAll);
            jian.innerHTML = sum;
            zongji.innerHTML = priceAll.toFixed(2);
            if (arr.length) {
                //肯定有被勾选的产品，可以让结算高亮显示(可以点击了)
                jiesuan.className = 'active';
            } else {
                jiesuan.className = '';
            }
        }
        for (var i = 0; i < ul1s.length; i++) {
            ul1s[i].onclick = function () {
                total();
            }
        }
        //全删
        zongdel.onclick = function () {
            var arr = ischeck().reverse();
            console.log(arr);
            var res = confirm('您确定要删除选中的行吗？');
            if (res) {
                arr.forEach(function (item) {
                    top.removeChild(ul1s[item]);
                });
                if (qx2.checked) {//如果全选删除，店铺也要删除
                    main11.removeChild(mainTop);
                }
                ajax({
                    type: 'post',
                    url: 'delete.php',
                    data: {
                        dels: 1//传参数dels为清空数据库
                    },
                    success: str => {
                        console.log(str);
                    }
                });
            }
            index();
            total();
        }

    }



})();