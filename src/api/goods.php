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

    $page = isset($_REQUEST['ipage']) ? $_REQUEST['ipage'] : '1';
    $num = isset($_REQUEST['num']) ? $_REQUEST['num'] : '5';
    $paixu = isset($_REQUEST['paixu']) ? $_REQUEST['paixu'] : '';
    $dind = isset($_REQUEST['dind']) ? $_REQUEST['dind'] : '';
    // echo $page;接收数据记得回到前端检测一下，没问题再往下走

    /*
        * 接收前端数据：ipage 1、num 5
        * 写查询语句：SELECT * FROM goods LIMIT 起始下标,条数;

        page   每页条数num    下标index
        1        10                0
        2        10                10
        3        10                20

        page和num求index
        index=(page-1)*num
    */

    //1.写查询语句
    $index = ($page - 1) * $num;

    if($dind){
        $sql="SELECT * FROM text ORDER BY num $dind LIMIT $index,$num ";
        $sql1="SELECT * FROM text ORDER BY num $dind";
        $res2 = $conn->query($sql1);
    } else if($paixu) {
        $sql = "SELECT * FROM text ORDER BY price $paixu LIMIT $index,$num ";
        $sql2="SELECT * FROM text ORDER BY price $paixu";
        $res2 = $conn->query($sql2);
    }else{
        $sql = "SELECT * FROM text LIMIT $index,$num";
        $sql3 = 'SELECT * FROM text';
        $res2 = $conn->query($sql3);
    }
    
    

    //2.执行语句
    $res = $conn->query($sql);
    // var_dump($res);
    //3.提取数据
    $arr = $res->fetch_all(MYSQLI_ASSOC);
    // var_dump($arr);

    //语句：查询整个表的
    // $sql2 = 'SELECT * FROM text';
    // $res2 = $conn->query($sql2);
    // var_dump($res2);
    // echo $res2->num_rows;

    //4.把数组转成字符串，echo给前端
    // echo json_encode($arr);

    $data = array(//制作关联数组，就可以一次性传多个值给前端
        'total' => $res2->num_rows,
        'list' => $arr,
        'page' => $page,
        'num' => $num
    );

    echo json_encode($data);

    //5.关闭数据库
    $res->close();
    $conn->close();
?>