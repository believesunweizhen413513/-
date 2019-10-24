<?php
    // 建立连接
    $servername='localhost';//主机
    $username='root';//登陆数据库用户名
    $password='root';//登陆数据库密码
    $dbname='goodlist';//登陆数据库名

    // 在php新建的数据库

    $conn=new mysqli( $servername,$username,$password,$dbname);

    // 判断是否连接失败，如果失败，返回连接失败的原因
    if($conn->connect_error){
        die('连接失败:'.$conn->connect_error);
    }
    $conn->set_charset('utf8');//设置编码
?>