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


(function () {
  let list = document.getElementsByClassName('list-h')[0];
  let pages = document.getElementById('pages');
  // console.log(pages);
  let btn = document.getElementById('btn');
  let btn1 = document.getElementById('btn1');

  // console.log(btn);
  let ipage = 1;//获取第一页
  let num = 8;//每页5条数据
  let paixu = '';
  let dind = '';
  function init() {
    ajax({
      type: 'get',
      url: '../api/goods.php',
      data: {
        ipage,
        num,
        paixu,
        dind,
      },
      success: str => {
        // console.log(str);
        creat(str);
      }
    });

    //1、数据渲染
    function creat(str) {
      let arr = JSON.parse(str);
      // console.log(arr);
      let html = arr.list.map(item => {
        return ` <li class="clearfix" ">
            <div class="lh-wrap">
                <div class="p-img" >
                    <a target=" href="">
                        <img  class="lazyload big" src="${item.url}"  data-id="${item.id}" style="width:100%"
                            alt="拉菲珍藏波尔多干红红葡萄酒 750ml" title="${item.title}">
                    </a>
                    <div shop_id="0"></div>
                </div>
                <div class="p-price">
                    <strong>￥${item.price}</strong>
                    <label style="float:right" id="lblOrderCount_2101">成交 <b> ${item.num} </b>笔</label>
                </div>
                <div class="p-name">
                    <a target="" href="###">
                        <font>拉菲</font>${item.title}
                    </a>
                   
                </div>
                <div class="p-shop-N">
                    <label class="SN" id="lblShopName_2101"><a
                            href="/shop/home/1">${item.city}</a></label>

                    <label class="shop-cart" id="addCart_2101" data-id=${item.id}><i
                            class="iconfont icon-gouwuchekong" data-id="${item.id}"></i></label>
                </div>
            </div>
            <div class="scale-img"> <a href="javascript:;">
                    <img class="lazyload small"
                        src="http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/1/Products/2101/2_50.png"
                       
                        alt="拉菲珍藏波尔多干红红葡萄酒 750ml" title="拉菲珍藏波尔多干红红葡萄酒 750ml">
                </a>
                <a href="javascript:;">
                    <img class="lazyload small "
                        src="http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/1/Products/2101/3_50.png"
                      
                        alt="拉菲珍藏波尔多干红红葡萄酒 750ml" title="拉菲珍藏波尔多干红红葡萄酒 750ml">
                </a>
                <a href="javascript:;">
                    <img class="lazyload small"
                        src="http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/1/Products/2101/4_50.png"
                        data-url="http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/1/Products/2101/4_50.png"
                        data-url-max="http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/1/Products/2101/4_220.png"
                      
                        alt="拉菲珍藏波尔多干红红葡萄酒 750ml" title="拉菲珍藏波尔多干红红葡萄酒 750ml">
                </a>
                <a href="javascript:;">
                    <img class="lazyload small"
                        src="http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/1/Products/2101/5_50.png"
                        data-url="http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/1/Products/2101/5_50.png"
                        data-url-max="http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/1/Products/2101/5_220.png"
                       
                        alt="拉菲珍藏波尔多干红红葡萄酒 750ml" title="拉菲珍藏波尔多干红红葡萄酒 750ml">
                </a>
            </div>
        </li>`;
      }).join('');
      list.innerHTML = html;

      let shoppingamount=document.getElementById('shopping-amount')
      // console.log(shoppingamount.innerHTML);
      
      //网页跳转
      list.onclick = ev => {
        console.log(ev.target);
      
        let id = ev.target.dataset.id;
        console.log(id);
        window.open('xiangqin.html?' + id);
       

      }

     

      //2、计算总页码
      let sum = Math.ceil(arr.total / num);
      let aStr = '';
      // console.log(sum);
      for (let i = 0; i < sum; i++) {
        aStr += `<a href="###">${i + 1}</a>`;
      }
      pages.innerHTML = aStr;
      pages.children[ipage - 1].classList.add('active');
      //3.点击跳转到对应的内容
      let ascr = document.querySelectorAll('#pages a');
      for (var i = 0; i < ascr.length; i++) {
        ascr[i].index = i;
        // console.log(ascr[i].index);
        ascr[i].onclick = function () {
          // console.log(676787);
          ipage = this.index + 1;
          init();
        }
      }
      // console.log(ascr);

      pages.onclick = ev => {
        // console.log(222);
        if (ev.target.tagName == 'A') {
          // console.log(ev.target.innerHTML);
          ipage = ev.target.innerHTML;
          // console.log(ipage);
          init();
        }
      }
      let cout = document.getElementById('cout')
      let nownum = document.getElementById('nownum')
      let rescount = document.getElementById('res_count')
      let tolast = document.querySelector('.text .before')



    
      cout.innerText = '/' + sum;
      nownum.innerText = ipage;
      rescount.innerText = arr.total;


      // 小图切换大图
        $('.clearfix').mouseover(function(e){
          if(e.target.className=='lazyload small'){
            let atrs=e.target.src;
            let atrb=this.getElementsByClassName("big")[0];
            atrb.src=atrs;
          }
        })


    }

  }
  init();
  let isok = true;
  btn.onclick = function () {
    ipage = 1;
    if (isok) {
      //升序
      paixu = 'asc';
    } else {
      //降序
      paixu = 'desc';
    }
    init();
    isok = !isok;
  }
  btn1.onclick = function () {
    ipage = 1;
    if (isok) {
      //升序
      dind = 'asc';
    } else {
      //降序
      dind = 'desc';
    }
    init();
    isok = !isok;
  }
})();





