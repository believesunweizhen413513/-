<?php
     include 'conn.php';

    // 查询语句
    $gid = isset($_REQUEST['gid']) ? $_REQUEST['gid'] : '1';

      
      $sql2 = "SELECT * FROM text where id=$gid";
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