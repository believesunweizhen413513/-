function shade(opt) {
    // 配置参数
    let defaultobj = {
        width: 100,
        heigth: 100,
        opacity: 50,//选项卡一开始的位置就是一开始active是哪个
    };
    // 合并配置
    Object.assign(defaultobj, opt);
    // 合并配置方法二
    // for (var key in opt) {
    //     defaultobj[key] = opt[key];
    // }

    // 获取节点
    let list1 = document.getElementById('list1');

    var html = ` <li>
                        <p>1</p>
                    </li>
                    <li>
                        <p>2</p>
                    </li>
                    <li>
                        <p>3</p>
                    </li>`
    list1.innerHTML += html;

    list1.onmouseover=function(ev){
        if(ev.target.tagName== 'P'){
            startMove(ev.target,{'opacity':50});
        }
    }
    list1.onmouseout=function(ev){
        if(ev.target.tagName== 'P'){
            startMove(ev.target,{'opacity':0});
        }
    }
}