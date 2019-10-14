// 菜单 店铺 商品切换
$('.search_form .label222').click(function (e) {
  event.stopPropagation();
  $(this).parent().find('ul').show();
});
$('.search_form ul li').click(function (e) {
  event.stopPropagation();
  var str = $('.label222').text();
  var str1 = $(this).text();
  $(this).text(str);
  $('.label222').text(str1);
  $('.search_form ul').hide();

});
$('body').click(() => {
  $('.search_form ul').hide();

})
$('.goods_Categ').mouseover(() => {
  $('.Categ_all').css('display', 'block')
})
$('.goods_Categ').mouseout(() => {
  $('.Categ_all').css('display', 'none')
})
$('.Categ_all').mouseover(() => {
  $('.Categ_all').css('display', 'block')
})
$('.Categ_all').mouseout(() => {
  $('.Categ_all').css('display', 'none')
})
//   二级导航出现
$('.item span').mouseover(function (e) {
  $(this).parent().find('.categ_detl').show();
});

$('.item span').mouseout(function (e) {
  $(this).parent().find('.categ_detl').hide();
})
$('.item .categ_detl').mouseover(function (e) {
  $(this).show();
});
$('.item .categ_detl').mouseout(function (e) {
  $(this).show();
});



// OrderNow.onclick=function(){
//   location.href = 'goodcar.html?';
// }


function tabs(opt) {

  let defaultobj = {
    start: 1//选项卡一开始的位置就是一开始active是哪个
  };

  Object.assign(defaultobj, opt);

  //获取节点
  let box = document.getElementById(defaultobj.ele);
  let list = box.getElementsByClassName('list')[0];
  let con = box.getElementsByClassName('con')[0];


  //渲染选项卡的数量
  let newLi = '';
  for (let i = 0; i < defaultobj.liName.length; i++) {
    newLi += `<li>${defaultobj.liName[i]}</li>`;
  }
  list.innerHTML = newLi;
  con.innerHTML = newLi;



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

(function () {
  var gid = decodeURI(location.search).split('?')[1];
  // console.log(gid);
  let product = document.getElementById('product-intro')
  let magnifier2 = document.getElementById('magnifier2')
  // console.log(contentcenter);

  function init() {
    // console.log(gid);

    ajax({
      type: 'get',
      url: '../api/xiangqin.php',
      data: {
        gid,
      },
      success: str => {
        creatdata(str);//字符串形式
        // console.log(str);
      }
    });
    function creatdata(str) {
      let html = '';
      let arr = JSON.parse(str);
      // console.log(arr);
      html += `
      <div class="magnifier" id="magnifier1">
                <div class="magnifier-container">
                    <div class="images-cover">
                    ${arr[0].url}
                    </div>
                  
                    <div class="move-view"></div>
                  
                </div>
                <div class="magnifier-assembly">
                   
                    <div class="magnifier-line">
                        <ul class="clearfix animation03">
                            <li>
                                <div class="small-img">
                                    <img src="${arr[0].imglist}" />
                                </div>
                            </li>
                            <li>
                                <div class="small-img">
                                    <img src="../img/lafei_files/2_50(1).png" />
                                </div>
                            </li>
                            <li>
                                <div class="small-img">
                                    <img src="../img/lafei_files/3_50(1).png" />
                                </div>
                            </li>
                            <li>
                                <div class="small-img">
                                    <img src="../img/lafei_files/4_50(1).png" />
                                </div>
                            </li>
                            <li>
                                <div class="small-img">
                                    <img src="../img/lafei_files/5_50(1).png" />
                                </div>
                            </li>
                        </ul>
                    </div>
                  
                </div>
                <div class="magnifier-view"></div>
               
            </div>
            
            <div class="attent-good">
                <img src="../img/fx.png" alt="" style="margin-left:-20px">
            </div>
            <div id="product-intro">
      <div id="name">
          <h1>${arr[0].title}</h1>
          <strong>${arr[0].tiname}</strong>
      </div>
      <div class="cl">
          <ul id="summary">
              <li id="summary-price">
                  <div class="t position-r">
                      <div class="dt dt01">价格</div>
                      <strong class="p-price brnone dt">￥ <b id="jd-price">${arr[0].price}</b></strong>
                      <div id="vipPrice">
                          <a href=""
                              style="font-size:13px;color:#f18918;margin-top:2px;width:200px;text-align:left;">登录后查看会员价</a>
                      </div>

                  </div>
                  <div class="b">
                      <div class="b-01 dt">销量 &nbsp;&nbsp;<a id="saleCounts">${arr[0].num}瓶</a></div>
                      <div class="b-01 dt">评价 &nbsp;&nbsp;<a id="Comments" href="#comment">${arr[0].pingjia}</a></div>
                      <div class="dt b-02">评分：${arr[0].pingfen}</div>
                      <div class="dt summary-grade" style="margin-right:10px">
                          <span class="star sa5"></span>
                      </div>
                  </div>
              </li>
              <li id="productFeight" style="display: block;">
                  <div class="dt">运费：</div>
                  <div class="dt">
                      <div id="feightPrice">￥ ${arr[0].free}</div>
                  </div>
              </li>
              <li id="summary-promotion" style="display:block;">
                  <div class="dt l l01">促销</div>
                  <div class="promotion-l" style="float:left;width:440px;">
                      <div style="margin-bottom:5px; "><em class="hl_red_bg">满免</em><em
                              class="hl_red">满<span>${arr[0].yfree}.00</span>免运费</em></div>
                      <div id="buygift"></div>
                      <div id="fullgift"></div>
                      <div id="FullSubtraction"></div>
                      <div id="shopbonus"></div>
                  </div>
              </li>
              <li id="summary-service">
                  <div class="dt l">库存</div>
                  <div class="dd d03">
                      <span id="stockProductImage" style="float:left;">有货</span>
                      <b id="stockProduct" style=" display:none;">4.000</b>
                  </div>
              </li>
              <li id="summary-service" style="width: 540px;">
                  <div class="dt l" style="line-height: 26px;">物流</div>
                  <div class="dd special">
                      <span>配送至</span> &nbsp; <a class="address-choose" id="addressChoose"
                          data-select="2111,2126,2129">广西省 柳州市 柳南区</a><span id="isCashOnDelivery"
                          style="display: none;"></span>
                  </div>
              </li>
              <li id="service">
                  <div class="dt l">服务</div>
                  <div class="dd d03">
                      <span>由 <a href="" target="_blank">中酒自营</a> 从北京发货，并提供售后服务</span>
                  </div>
              </li>
          </ul>
      </div>
      <div id="brand-bar-pop">
          <dl id="seller" style="border-top:3px solid #ff4d50; padding-left:0; text-align:center;"><a
                  href="/brand/697.htm" target="_blank"> <img alt="拉菲" title="拉菲" width="100" height="100%"
                      src="http://img6.zhongjiu.cn/resourceb2b2c//Storage/Plat/Brand/logo_697.jpg"
                      onerror="javascript: this.src = '/Images/onerror.jpg'; ">
                  <p style="font-size:12px;">拉菲</p>
              </a></dl>
          <dl
              style="padding:15px 0 15px 10px;border-bottom: 1px dashed #ccc8c8;border-top: 1px solid #ccc8c8;">
              <dt style="color:#fff;background-color:#ff4d50; padding:2px 10px;font-size:14px;">自营</dt><span
                  style="font-size:16px;margin-left:40px;"><a href="/shop/home/1">中酒自营店</a></span>
          </dl>
          <dl id="hotline">
              <dd><a target="_blank"
                      href="http://wpa.qq.com/msgrd?v=3&amp;uin=3060023943&amp;site=qq&amp;menu=yes"
                      title="欣欣">
                      <img border="0" src="../img/button_old_41.gif">&nbsp;在线客服
                  </a></dd>
          </dl>
          <h3>服务支持：</h3>
          <dl class="pop-ensure">
              <dt><img src="../img/newTimelyDelivery.png"> 及时发货</dt>
          </dl>
          <dl class="pop-ensure">
              <dt><img src="../img/genuine-product.png"> 正品保证</dt>
          </dl>
          <dl class="pop-ensure">
              <dt><img src="../img/professional-services.png"> 专业一对一服务</dt>
          </dl>
          <dl class="pop-ensure">
              <dt><img src="../img/change-a-purchase.png">七天无理由退换</dt>
          </dl>
      </div>
      <ul id="choose" class="choose">
          <li id="choose-amount" style="line-height: 26px;">
              <div class="dt l">数量</div>
              <div class="dd">
                  <div class="wrap-input">
                      <a class="btn-reduce" href="javascript:;">-</a>
                      <a class="btn-add" href="javascript:;">+</a>
                      <input class="text quantity-text" id="buy-num" value="1"
                          onblur="(this.v=function(){this.value=this.value.replace(/[^0-9-]+/,'1'); if(this.value==''){this.value='1'}}).call(this)">
                  </div>
              </div>
          </li>
          <li id="choose-result">
              <div class="dt"></div>
              <div class="dd"><strong></strong><strong></strong></div>
          </li>
          <li id="choose-btns">
              <div id="choose-btn-buy" class="btn"><a class="btn-append btn-order-now" name="OrderNow"
                      id="OrderNow"><img src="../img/lijig.png" style="margin-right:5px">立即购买</a></div>
              <div id="choose-btn-append" data-id="${arr[0].id}"  class="btn"><a class="btn-append" id="InitCartUrl"
                      name="InitCartUrl" style="margin-left:40px;"> <img src="../img/gou.png"
                          style="width:25px;height:25px;margin-right:5px;">加入购物车</a></div>
          </li>
      </ul> `
      magnifier2.innerHTML = html;


      $(function () {

        var magnifierConfig = {
            magnifier: "#magnifier1",//最外层的大容器
            width: 350,//承载容器宽
            height: 350,//承载容器高
            moveWidth: null,//如果设置了移动盒子的宽度，则不计算缩放比例
            zoom: 2//缩放比例
        };

        var _magnifier = magnifier(magnifierConfig);

        /*magnifier的内置函数调用*/
        /*
            //设置magnifier函数的index属性
            _magnifier.setIndex(1);
    
            //重新载入主图,根据magnifier函数的index属性
            _magnifier.eqImg();
        */
    });

    (function () {
        let chearck = document.getElementById('chearck');
        let xuanx = document.getElementById('xuanx');
        let list = chearck.getElementsByClassName('list')[0];
        // console.log(list);
        let con = chearck.getElementsByClassName('con')[0];
        let oldData = ['11111', '22222', '33333'];
        let data = [];
        oldData.forEach(function (item) {
            data.push(cnm(item));
        });

        tabs({
            ele: 'xuanx',
            start: 0,
            liName: ['店铺信息', '商品详情', '累计评价', '查看更多', '测试']
        });

        // var lTop = list.offsetTop;
        // var aa=chearck.offsetTop
        var lTop=xuanx.offsetTop

        //滚动事件
        window.onscroll = function () {
            var tall = window.scrollY;
            // console.log(tall);
            
            if (tall >= lTop) {
                list.className = 'list pos';
            } else {
                list.className = 'list';
            }
        }

        let aLis2 = con.getElementsByTagName('li');
        // aLis2[0].innerHTML = `<img src="../img/list1.gif" alt="">`;

        // aLis2[1].innerHTML = `<img src="../img/list2.gif" alt="">`;

        aLis2[2].innerHTML = `  <div class="listbox">
                        <h4>最新消息(只展示最多5条消息)</h4>
                            <ul id="news">
                            </ul>
                        </div>
                        <form action="">
                            <input type="text" id="tex">
                            <input type="button" value="点击添加" id="btn">
                        </form>`;

        aLis2[3].innerHTML = `查看更多`;



        let tex = getid('tex');
        let btn = getid('btn');
        let news = getid('news');

        inti();
        function inti() {//初始状态
            var html = '';
            var num = 1;//计数器
            for (var i = 0; i < data.length; i++) {
                num++;
                html += '<li>' + (i + 1) + '、' + data[i] + '</li>';//拼接内容
                if (num > 5) {//数据超过5条时，删掉最后一条
                    data.pop();
                }
            }
            news.innerHTML = html;
        }


        function yanz() {
            var tex1 = tex.value;
            if (tex1) {//非空判断
                tex1 = cnm(tex1);
                data.unshift(tex1);
                inti();
            } else {
                alert('不要输入为空')
            }
            tex.value = '';
            tex.focus();//聚焦
        }


        //点击事件
        btn.onclick = function () {
            yanz();
        }

        //实现回车上交
        tex.onkeydown = function (ev) {
            console.log(ev.keyCode);
            if (ev.keyCode == 13) {
                yanz();
                ev.preventDefault();
            }
        }
    })();

   
      var add = document.getElementsByClassName('btn-add')[0];
      var wrapinput = document.getElementsByClassName('wrap-input')[0];
      var reduce = document.getElementsByClassName('btn-reduce')[0];
      var buynum = document.getElementById('buy-num');
      var OrderNow = document.getElementById('OrderNow');
      var chooseappend = document.getElementById('choose-btn-append');
    
      add.onclick = function () {
        var num = buynum.value;
        num++;
        buynum.value = num;
      }
      reduce.onclick = function () {//减数量
        var num = buynum.value;
    
        if (num <= 1) {
          num = 1;
        } else {
          num--;
          buynum.value = num;
        }

    
      }
      chooseappend.onclick = () => {
        let user =getcookie('username');
        console.log(user);
        
        let count = buynum.value.trim();
        console.log(count);
        let id=chooseappend.dataset.id;
        ajax({
            type: 'post',
            url: '../api/addTogoodsCar.php',
            data: {
                'gid': id,//商品id
                'username': user,//用户名
                'count': count,//购买数量
            },
            success: str => {
                // console.log(str);
            },
        });
        window.open('goodscar.html?');

    }


    }

    
    

  }
  init();
})();


