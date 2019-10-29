<?php
//1.建立连接
//2.写语句，执行语句
//提取结果集里面的数据部分
//把数据传给前端：对象->字符串;因为一个接口只能有一个打印输出
//3.关闭数据库
// header('Content-type:text/html;charset=utf-8');
$servername = 'localhost'; //主机
$username = 'root'; //登陆数据库用户名
$password = 'root'; //密码
$dbname = 'myku'; //数据库
// 创建连接
$conn = new mysqli($servername, $username, $password, $dbname);
// var_dump($connet);

//php里面获取对象属性和方法：$conn->属性名  $conn->方法名(); js的写法：arr.lenght arr.push()
// 检测连接
if ($conn->connect_error) {
    // die() 函数输出一条消息，并退出当前脚本。
    die("连接失败: " . $conn->connect_error);
} else { };
$sheet = isset($_REQUEST['sheet']) ? $_REQUEST['sheet'] : ''; //数据库表格名
$ipage = isset($_REQUEST['ipage']) ? $_REQUEST['ipage'] : ''; //页数
$num = isset($_REQUEST['num']) ? $_REQUEST['num'] : ''; //每页显示的数据数
$paixu = isset($_REQUEST['paixu']) ? $_REQUEST['paixu'] : ''; //排序方式
$price1 = isset($_REQUEST['price11']) ? $_REQUEST['price11'] : ''; //查询起始价格
$price2 = isset($_REQUEST['price22']) ? $_REQUEST['price22'] : ''; //价格2
$ser = isset($_REQUEST['ser']) ? $_REQUEST['ser'] : ''; //模糊查询
$type;
// 计算调取数据的起始下标
$index = ($ipage - 1) * $num;
// 计算页数
//编写sql语句
$sql2 = "SELECT * FROM $sheet";
$res2 = $conn->query($sql2);
// 符合那种条件走的分支
if ($ser && $paixu && $price1) {
    // 搜索、价格区间、排序都有时
    // 根据要求渲染每页几条数据
    $sql =  "SELECT * FROM  $sheet   WHERE title LIKE '%$ser%' AND price  BETWEEN $price1 AND $price2  ORDER BY price $paixu LIMIT $index,$num";
    // 符合条件的总数据量
    $sql2 =  "SELECT * FROM $sheet   WHERE title LIKE '%$ser%' AND price  BETWEEN $price1 AND $price2";
    // 返回符合条件的数量，重新渲染分页用
    $res2 = $conn->query($sql2);
    $type = '查询、排序、价格区间功能';
} else if ($ser && $paixu) {
    // 搜索、排序时
    $sql =  "SELECT * FROM $sheet   WHERE title LIKE '%$ser%' ORDER BY price $paixu LIMIT $index,$num";
    $sql2 =  "SELECT * FROM $sheet   WHERE title LIKE '%$ser%' ORDER BY price $paixu ";
    $res2 = $conn->query($sql2);
    $type = '查询、排序、功能';
} else if ($ser && $price1) {
    // 搜索、价格区间时
    $sql =  "SELECT * FROM $sheet   WHERE title LIKE '%$ser%' AND price  BETWEEN $price1 AND $price2 LIMIT $index,$num";
    $sql2 =  "SELECT * FROM $sheet   WHERE title LIKE '%$ser%' AND price  BETWEEN $price1 AND $price2 ";
    $res2 = $conn->query($sql2);
    $type = '查询、价格区间功能';
} else if ($paixu && $price1) {
    // 价格区间、排序时
    $sql = "SELECT * FROM $sheet  WHERE  price  BETWEEN $price1 AND $price2 ORDER BY price $paixu LIMIT $index,$num";
    $sql2 = "SELECT * FROM $sheet  WHERE  price  BETWEEN $price1 AND $price2 ORDER BY price $paixu ";
    $res2 = $conn->query($sql2);
    $type = '排序、价格区间功能';
} else if ($ser) {
    // 搜索时
    $sql =  "SELECT * FROM $sheet   WHERE title LIKE '%$ser%' LIMIT $index,$num";
    $sql2 =  "SELECT * FROM $sheet   WHERE title LIKE '%$ser%'";
    $res2 = $conn->query($sql2);
    $type = '查询功能';
} else if ($paixu) {
    // 排序时
    $sql = "SELECT * FROM $sheet  ORDER BY price $paixu LIMIT $index,$num ";
    $type = '排序功能';
} else if ($price1) {
    //价格区间时
    $sql = "SELECT * FROM $sheet  WHERE  price  BETWEEN $price1 AND $price2 LIMIT $index,$num";
    $sql2 = "SELECT * FROM $sheet  WHERE  price  BETWEEN $price1 AND $price2 ";
    $res2 = $conn->query($sql2);
    $type = '价格区间功能';
} else {
    $sql = "SELECT * FROM $sheet  LIMIT $index,$num";
    $type = '默认';
}


//获取查询结果集
$res = $conn->query($sql);
// var_dump($res);
// 查询所有获取总的数据数
// 执行语句
$row = $res->fetch_all(MYSQLI_ASSOC);
// var_dump($row);

$conn->set_charset('utf8'); //设置编码
//把数据传给前端：对象->字符串;因为一个接口只能有一个打印输出
$data = array(
    'total' => $res2->num_rows, // 查询数据库返回的数据条数
    'list' => $row,
    'pr1' => $price1,
    'pr2' => $price2,
    'px' => $paixu,
    'ser' => $ser,
    'type' => $type,
);
echo json_encode($data, JSON_UNESCAPED_UNICODE);
//释放查询结果集，避免资源浪费
$res->close();
// 关闭数据库，避免资源浪费
$conn->close();
