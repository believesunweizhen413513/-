<?php
//引入外部链接数据库文件
include('conn.php');
//编写sql语句
$uids =  isset($_REQUEST['ids']) ? $_REQUEST['ids'] : '';

$sql = "SELECT * FROM goods WHERE uid=$uids";
//获取查询结果集
$res = $conn->query($sql);
// var_dump($res);
$row = $res->fetch_all(MYSQLI_ASSOC);

$conn->set_charset('utf8'); //设置编码
echo json_encode($row, JSON_UNESCAPED_UNICODE);
//释放查询结果集，避免资源浪费
$res->close();
// 关闭数据库，避免资源浪费
$conn->close();
?>