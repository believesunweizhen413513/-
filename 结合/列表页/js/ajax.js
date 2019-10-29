function ajax(opt) {
    // 默认参数
    let defaultOpt = {
        data: '',//是否向数据库传参，默认无
        asyn: true,//同步或异步，默认异步
        error: null//错误http码页面跳转，默认无
    }
    //替补方案
    Object.assign(defaultOpt, opt);
    //1.创建对象,告诉ajax你要的接口
    let xhr = new XMLHttpRequest();
    // 判断是用get还是用post请求
    if (defaultOpt.type.toLowerCase == 'get') {
        if (defaultOpt.data) { //有数据，把数据拼接在url
            defaultOpt.url = defaultOpt.url + '?' + objToStr(defaultOpt.data);
        }
        xhr.open('get', defaultOpt.url, defaultOpt.asyn);
        //2.发送请求
        xhr.send(null);
    } else {
        // 发送请求: 如果用post方式，记得要加请求头
        xhr.open('post', defaultOpt.url, defaultOpt.asyn);
        let data = objToStr(defaultOpt.data);//将对象转为字符串,封装的方法
        xhr.setRequestHeader('content-type', "application/x-www-form-urlencoded");//请求头
        xhr.send(data);
    }

    //4.接收数据
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4) {//响应已经完成,但比一定正确
            //完成并成功了，可以在network里面查看响应，是否接收成功
            // xhr.status == 304  表示数据与服务器相同，不需要重服务器请求（直接使用缓存的数据）
            if (xhr.status == 200 || xhr.status == 304) {
                //成功
                //后端返回的数据，默认是存在responseText属性里面
                defaultOpt.success(xhr.responseText);//把后端返回的数据作为实参传给success函数，去外面处理
            } else {
                if (defaultOpt.error) {
                    //失败
                    defaultOpt.error(xhr.status);//实参：http状态码
                }
            }
        }
    }


}