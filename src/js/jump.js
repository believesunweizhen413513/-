var flag = true //设置标识。防止出现跑马灯 

$(".floor li").click(function () {
    flag = false
    $(this).addClass("active").siblings().removeClass("active")
    var index = $(this).index();//获取当前点击元素的索引  
    var top = $(".goods-foorl").eq(index).offset().top;//获取每个banner到顶部的距离  
    $("html,body").stop(true).animate({ "scrollTop": top }, function () { flag = true })
})

// 滚轮滑动切换楼层  
$(window).scroll(function () {
    if (flag) {
        //浏览器可视窗口的一半，也可以根据自己需求设定  
        var winH = $(window).innerHeight() / 2;
        var scrollT = $(window).scrollTop();
        var len = $(".goods-foorl").size();

        for (var i = 0; i < len; i++) {
            //注意这里banner对象加了i之后变成了js对象,所以用offsetTop  
            var bannerGap = $(".goods-foorl")[i].offsetTop - scrollT
            if (bannerGap < winH) {
                $(".floor li").eq(i).addClass("active").siblings().removeClass("active")
            }
        }
    }


})
// function show() {
//     let name = $(".floor li a").html();
//     console.log(name);
//     if (name == '1F') {
//         $(".v").html('帮您');
//     } if (name == '2F') {
//         $(".b").html('白酒');
//     } if (name == '3F') {
//         $(".c").html('葡萄');
//     }
//     name = '';
// }
// show();

