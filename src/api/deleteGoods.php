<?php
/*
1、传递用户名，商品id，删除对应的商品
2、删除全部商品
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
$type = isset($_REQUEST['type']) ? $_REQUEST['type'] : '';
// 更新对应用户名下商品的数量
if ($type == 'delgoods') {
    $sql = "DELETE FROM goodscar  WHERE gid='$gid' AND username= '$username'";
} else if ($type == 'delallgoods') {
    $sql = "DELETE FROM goodscar  WHERE username= '$username'";
};
$res = $conn->query($sql);
if ($res) {
    echo '删除成功';
} else {
    echo '删除失败';
}
$conn->close();
