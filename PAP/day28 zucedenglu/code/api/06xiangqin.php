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

    // 查询语句
    $gid = isset($_REQUEST['gid']) ? $_REQUEST['gid'] : '1';

      
      $sql2 = "SELECT * FROM goodslist WHERE id=$gid";
    //   写入

      $res = $conn->query($sql2);

      // var_dump ($res);
    // 提取结果集的参数部分
      $arr = $res->fetch_all(MYSQLI_ASSOC);
      // var_dump $arr;
      echo json_encode($arr);

      //5.关闭数据库
      $res->close();
      $conn->close();
?>