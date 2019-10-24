var dataitems = document.querySelectorAll('.grid-wrapper .grid-item');
var arr = [];
//[{},{}]
for (var ele of dataitems) {
    var obj = {};
    if (ele.querySelector('.img-box img')) {
        obj.url = ele.querySelector('.img-box img').src;
    }

    if (ele.querySelector('.title .product-title')) {
        obj.title = ele.querySelector('.title .product-title').innerHTML;
    }

    if (ele.querySelector('.price .price-num')) {
        obj.price = ele.querySelector('.price .price-num').innerHTML;
    }

    if (ele.querySelector('.feature')) {
        obj.feature = ele.querySelector('.feature').innerHTML;
    }
    arr.push(obj);
}
