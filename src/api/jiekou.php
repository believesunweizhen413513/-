<?php
     $servername='localhost';//主机
     $username='root';//登陆数据库用户名
     $password='root';//登陆数据库密码
     $dbname='goodtext';//登陆数据库名
 
     // 在php新建的数据库
 
     $conn=new mysqli( $servername,$username,$password,$dbname);
 
     // 判断是否连接失败，如果失败，返回连接失败的原因
     if($conn->connect_error){
         die('连接失败:'.$conn->connect_error);
     }
     $conn->set_charset('utf8');//设置编码



     $name = isset($_REQUEST['name']) ? $_REQUEST['name'] : '';
     $password = isset($_REQUEST['password']) ? $_REQUEST['password'] : '';
     $type = isset($_REQUEST['type']) ? $_REQUEST['type'] : '';
    //  $world = isset($_REQUEST['world']) ? $_REQUEST['world'] : '';
 
     if($type == 'checkname' || $type == 'login') {
         if($type == 'checkname') {
             //验证用户名是否存在
             //sql语句
             $sql = "SELECT * FROM userinf WHERE username='$name'";
         }else{
             $sql = "SELECT * FROM userinf WHERE username='$name' AND password='$password'";
         }
         
         //执行语句
         $res = $conn->query($sql);
         // var_dump($res);
         //判断是否可以通过验证
         if($res->num_rows) {
             //查找到，不能注册
             echo 'no';
         }else{
             echo 'yes';
         }
     }
 
     if($type == 'reg') {
         //注册功能
         $sql = "INSERT INTO userinf(username,password) VALUES('$name','$password')";
         //执行语句
         $res = $conn->query($sql);
         if($res) {
             //插入成功
             echo 'yes';
         }else{
             echo 'no';
         }
     }
 
 

?>