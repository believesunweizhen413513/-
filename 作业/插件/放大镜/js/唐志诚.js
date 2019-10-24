(function () {

    function magnifier(obj) {
        // 默认配置
        var curParameter = {
            el: '.magnifier',
            width: 200,
            height: 200,
            multiple: 3
        }

        // 合并配置
        for (var key in obj) {
            curParameter[key] = obj[key];
        }

        // 数据初始化
        var magbox = document.querySelector(curParameter.el);
        var boxw = getStyle(magbox, 'width');
        var boxh = getStyle(magbox, 'height');
        var offsetLeft = magbox.offsetLeft;
        var offsetTop = magbox.offsetTop;

        // 渲染组件
        var img = document.createElement('img');
        var slider = document.createElement('div');
        var big = document.createElement('div');
        img.src = curParameter.imgURL;
        slider.className = 'slider';
        slider.style.cssText = `width:${curParameter.width}px;height:${curParameter.height}px;`;
        big.className = 'big-image';
        big.style.cssText = `width:${curParameter.width * curParameter.multiple}px;
                            height:${curParameter.height * curParameter.multiple}px;
                             background-image:url(${curParameter.imgURL});
                             background-size:${boxw * curParameter.multiple}px  ${boxh * curParameter.multiple}px`;

        magbox.appendChild(img);
        magbox.appendChild(slider);
        magbox.appendChild(big);



        // 侦听事件
        magbox.addEventListener('mouseenter', function (e) {
            slider.style.display = 'block';
            big.style.display = 'block';
            slider.style.left = `${e.pageX - offsetLeft - curParameter.width / 2}px`;
            slider.style.top = `${e.pageY - offsetTop - curParameter.height / 2}px`;
            magbox.addEventListener('mousemove', move);
            slider.addEventListener('mouseleave', function () {
                slider.style.display = 'none';
                big.style.display = 'none';
                magbox.removeEventListener('mousemove', move);
            });
        });

        // 运动函数 
        function move(e) {
            var leftNum = e.pageX - offsetLeft - curParameter.width / 2;
            var topNum = e.pageY - offsetTop - curParameter.height / 2;
            if (leftNum <= 0) {
                leftNum = 0;
            } else if (leftNum > boxw - curParameter.width) {
                leftNum = boxw - curParameter.width;
            }
            if (topNum <= 0) {
                topNum = 0;
            } else if (topNum > boxh - curParameter.height) {
                topNum = boxh - curParameter.height;
            }
            slider.style.left = `${leftNum}px`;
            slider.style.top = `${topNum}px`;
            big.style.left = `${leftNum + curParameter.width + 20}px`;
            big.style.top = `${topNum}px`;
            big.style.backgroundPosition = `${-leftNum * curParameter.multiple}px ${-topNum * curParameter.multiple}px`;
        }


    }

    function getStyle(dom, prop) {
        return parseFloat(window.getComputedStyle(dom)[prop]);
    }


    window.magnifier = magnifier;

}())