<?php
// 引入建立的连接
    include 'conn.php';
    // 写入语句，执行语句

    $sql='SELECT * FROM mytext';//写入，字符串形式；
    // 执行语句
   

    $res=$conn->query($sql);//res是一个结果集

//    var_dump($res);

     //提取结果集里面的数据部分
     $arr = $res->fetch_all(MYSQLI_ASSOC);

    //把数据传给前端：对象->字符串;因为一个接口只能有一个打印输出
    echo json_encode($arr,JSON_UNESCAPED_UNICODE);
    $conn->set_charset('utf8');//设置编码
    //3.关闭数据库
    $res->close();
    $conn->close();
?>