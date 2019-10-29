<?php
     $servername='localhost';//主机
     $username='root';//登陆数据库用户名
     $password='root';//登陆数据库密码
     $dbname='guestbook';//登陆数据库名
 
     // 在php新建的数据库
 
     $conn=new mysqli( $servername,$username,$password,$dbname);
 
     // 判断是否连接失败，如果失败，返回连接失败的原因
     if($conn->connect_error){
         die('连接失败:'.$conn->connect_error);
     }
     $conn->set_charset('utf8');//设置编码

     $page = isset($_REQUEST['ipage']) ? $_REQUEST['ipage'] : '';
     $num = isset($_REQUEST['num']) ? $_REQUEST['num'] : '';
    
     $index = ($page - 1) * $num;

     $sql = "SELECT * FROM goodslist LIMIT $index,$num";
    
     $res= $conn->query($sql);

   
     $sql2 = 'SELECT * FROM goodslist';
     $res2= $conn->query($sql2);
    //  var_dump ($res);
     //提取结果集里面的数据部分
     $arr = $res->fetch_all(MYSQLI_ASSOC);

    //把数据传给前端：对象->字符串;因为一个接口只能有一个打印输出
  $data = array(//制作关联数组，就可以一次性传多个值给前端
        'total' => $res2->num_rows,
        'list' => $arr,
        'page' => $page,
        'num' => $num,
    );

    echo json_encode($data);

    //5.关闭数据库
    $res->close();
    $conn->close();
?>