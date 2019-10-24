
    function sideBar(opt) {

        var defaultOpt = {
            //默认参数
            iw: 200, //宽度 (可选)
            ih: 300,//高度 (可选)
        }

        //有配置用配置，没有配置用默认
        Object.assign(defaultOpt, opt);//用默认参数 ：defaultOpt 

        var box = document.getElementsByClassName(defaultOpt.ele)[0];
        
        box.onmouseover = function () {
            startMove(box, { 'right': 0 });
            box.style.width=defaultOpt.iw+'px';
            box.style.height=defaultOpt.ih+'px';
    
        }
        box.onmouseout = function () {
            startMove(box, { 'right': -defaultOpt.iw });
        }

    }

