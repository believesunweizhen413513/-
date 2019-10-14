var dataitems = document.querySelectorAll('.content_recont .cl li');
var arr = [];
//[{},{}]
for (var ele of dataitems) {
    var obj = {};
    if (ele.querySelector('a')) {
        obj.url = ele.querySelector('a').href;
    }

    if (ele.querySelector('h3 title')) {
        obj.title = ele.querySelector('h3 title').innerHTML;
    }

    if (ele.querySelector('p span')) {
        obj.price = ele.querySelector('p span').innerHTML;
    }
    if (ele.querySelector('.cl .lazyload')) {
        obj.img = ele.querySelector('.cl .lazyload').src;
    }
    arr.push(obj);
}
