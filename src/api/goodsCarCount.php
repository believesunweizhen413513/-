<?php
/*
传递用户名，商品id，数量过来，对数量进行修改
*/
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

$username = isset($_REQUEST['username']) ? $_REQUEST['username'] : '';
$gid = isset($_REQUEST['gid']) ? $_REQUEST['gid'] : '';
$goodsCount = isset($_REQUEST['counts']) ? $_REQUEST['counts'] : '';
// 更新对应用户名下商品的数量
$sql = "update goodscar set counts = '$goodsCount' WHERE gid='$gid' AND username= '$username'";
$res = $conn->query($sql);
if ($res) {
    echo '数量更新成功';
} else {
    echo '数量更新失败';
}
$conn->close();
