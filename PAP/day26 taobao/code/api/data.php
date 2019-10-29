<?php
// 引入建立的连接
    include 'conn.php';
    // 写入语句，执行语句

    $page = isset($_REQUEST['ipage']) ? $_REQUEST['ipage'] : '1';
    $num = isset($_REQUEST['num']) ? $_REQUEST['num'] : '5';
    $paixu = isset($_REQUEST['paixu']) ? $_REQUEST['paixu'] : '';

    $price1 = isset($_REQUEST['price1']) ? $_REQUEST['price1'] : '2';
    $price2 = isset($_REQUEST['price2']) ? $_REQUEST['price2'] : '2';
    
    $name1 = isset($_REQUEST['name1']) ? $_REQUEST['name1'] : '2';


     $index = ($page - 1) * $num;
// 价格区间 模拟查询 排序
if($price1 && $price2 && $name1 && $paixu){
    $sql="SELECT * FROM text WHERE NAME LIKE '%$name1%' AND price BETWEEN $price1 AND $price2 ORDER BY price $paixu  LIMIT $index,$num";
    $sql4="SELECT * FROM text WHERE NAME LIKE '%$name1%' AND price BETWEEN $price1 AND $price2 ORDER BY price $paixu";
    $res2 = $conn->query($sql4);
}
// 价格区间 模拟查询 
    else if($price1 && $price2 && $name1){
        $sql="SELECT * FROM text WHERE NAME LIKE '%$name1%' AND price BETWEEN $price1 AND $price2 LIMIT $index,$num";
        $sql3="SELECT * FROM text WHERE NAME LIKE '%$name1%' AND price BETWEEN $price1 AND $price2";
        $res2 = $conn->query($sql3);
    } 
    // 价格区间  排序
    else if($price1 && $price2 && $paixu){
        $sql="SELECT * FROM text WHERE price BETWEEN $price1 AND $price2 ORDER BY price $paixu LIMIT $index,$num";
        $sql4="SELECT * FROM text WHERE price BETWEEN $price1 AND $price2 ORDER BY price $paixu";
        $res2 = $conn->query($sql4);
    }
    // 排序
    else if($paixu) {
        $sql = "SELECT * FROM text ORDER BY price $paixu LIMIT $index,$num ";
        $sql2 = 'SELECT * FROM text';
        $res2 = $conn->query($sql2);
    }
    //  模拟查询 
   else if($name1){
        $sql="SELECT * FROM text WHERE NAME LIKE '%$name1%' LIMIT $index,$num";
        $sql2="SELECT * FROM text WHERE NAME LIKE '%$name1%' ";
        $res2 = $conn->query($sql2);
    }
    // 价格区间 
    else if($price1 && $price2 ){
        $sql="SELECT * FROM text WHERE price BETWEEN $price1 AND $price2 LIMIT $index,$num";
        $sql1="SELECT * FROM text WHERE price BETWEEN $price1 AND $price2";
        $res2 = $conn->query($sql1);
    }
    else{
        $sql = "SELECT * FROM text LIMIT $index,$num";
        $sql2 = 'SELECT * FROM text';
        $res2 = $conn->query($sql2);
    }//写入，字符串形式；
    // 执行语句
    $res=$conn->query($sql);//res是一个结果集


     //提取结果集里面的数据部分
     $arr = $res->fetch_all(MYSQLI_ASSOC);

    //把数据传给前端：对象->字符串;因为一个接口只能有一个打印输出
  $data = array(//制作关联数组，就可以一次性传多个值给前端
        'total' => $res2->num_rows,
        'list' => $arr,
        'page' => $page,
        'num' => $num,
    );

    echo json_encode($data);

    //5.关闭数据库
    $res->close();
    $conn->close();
?>