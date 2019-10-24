/*

    配置参数：requirejs.config()/require.config() 因为两个方法功能相同，我取后面的演示
        * require.config() 设置配置参数
            * 参数：对象
                * baseUrl ： 配置基础路径，不写就是默认以主模块main所在文件夹为基础路径
                * paths:配置短路径
                    基础路径：baseUrl
                        * 写模块的时候，不加后缀，就是以main主入口文件所在路径为基础路径；
                        * 加后缀：以主模块引入的页面为基础路径
                * shim:配置依赖关系的
    加载模块：requirejs()/require() 因为两个方法功能相同，我取后面的演示
        * require() 引入子模块开发
            * 参数一：数组，子模块名
            * 参数二：回调函数，子模块都到达了才能运行总模块
    定义模块：define() 定义子模块
*/
require.config({
    'paths': {//配置短路径：默认基础路径，是require.js所在目录
        // main : 'index' 重命名
        'jquery': '../lib/jquery-1.10.1.min',
        // 'lunbo': '../lib/lunbo'
    },
    'shim': {//配置依赖关系  jq、common、index、lunbo
        // 'index': ['jquery', 'common', 'lunbo'],
        // 'lunbo': ['jquery']
    }
});

//引入外部js文件：但是引入之前，要配置好依赖关系
require(['index', 'jquery'], function () {
    $(document).click(function () {
        alert(666);
    });
});
