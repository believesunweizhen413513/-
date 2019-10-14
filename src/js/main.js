(function () {
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
  
  $('.next').click(function (e) {
    var id = $(e.target).parent().find('.brandA-wrap .scroll-A').css('left', -188);
    // console.log(id);
  });
  $('.prev').click(function (e) {
    var id = $(e.target).parent().find('.brandA-wrap .scroll-A').css('left', 0);
    // console.log(id);
  });

  // 选项卡

  $('.foorl-hd ul li').mouseover(function(e){
    $(e.target).parent().parent().siblings().children().eq(0).children().eq(1).children().eq($(this).index()).css('display', 'block').siblings().css('display', 'none');
    $(e.target).parent().parent().siblings().children().eq(0).children().eq(2).children().eq($(this).index()).css('display', 'block').siblings().css('display', 'none');
  });




  $('.qijing .next').click(function (e) {
    var id = $(e.target).parent().find('.BD-wrap .scroll-brand clearfix').css('left', -(".scroll-brand clearfix").width);

  });
 
  
})();