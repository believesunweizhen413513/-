<?php
/*11.购物车数据渲染

12.点击加减、手动修改数量，更新数据库

13.删除当行、删除多行

14.计算总价和总数量，存起来(选做) */
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

$username = isset($_REQUEST['username']) ? $_REQUEST['username'] : ''; //用户名
$sql = "SELECT * FROM goodscar WHERE username='$username'";
$res = $conn->query($sql);
if ($res->num_rows) { //购物车中有商品
    $data = $res->fetch_all(MYSQLI_ASSOC);
    $conn->set_charset('utf8'); //设置编码
    echo json_encode($data, JSON_UNESCAPED_UNICODE); //防止中文转义
} else {
    echo '您的购物车空空如也';
};
$res->close();
$conn->close();
