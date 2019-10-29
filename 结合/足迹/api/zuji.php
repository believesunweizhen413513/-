<?php
include('connet.php');
$tit = isset($_REQUEST['uid']) ? $_REQUEST['uid'] : '';

if ($tit) {
    //编写sql语句
    $spl = "SELECT * FROM list WHERE uid=$tit";
} else {
    $spl = "SELECT * FROM list";
}
// 执行语句
$res = $connet->query($spl);
//获取查询结果集
$rows = $res->fetch_all(MYSQLI_ASSOC);

$connet->set_charset('utf8'); //设置编码

echo json_encode($rows, JSON_UNESCAPED_UNICODE);
// 关闭结果集，关闭数据库，释放内存
$res->close();
$connet->close();
?>