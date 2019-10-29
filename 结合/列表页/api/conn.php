<?php
$servername = 'localhost'; //主机
$username = 'root'; //登陆数据库用户名
$password = 'root'; //密码
$dbname = 'myku'; //数据库
// 创建连接
$conn = new mysqli($servername, $username, $password, $dbname);
//php里面获取对象属性和方法：$conn->属性名  $conn->方法名(); js的写法：arr.lenght arr.push()
// 检测连接
if ($conn->connect_error) {
    // die() 函数输出一条消息，并退出当前脚本。
    die("连接失败: " . $conn->connect_error);
} else { };
?>