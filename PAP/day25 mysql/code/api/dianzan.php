<?php
     //3.接收id。修改json数据里面，对应的id那条数据的点赞数量，在原本基础上加一
    //isset() 是否接收到了参数，返回真假
    $id = isset($_REQUEST['id']) ? $_REQUEST['id'] : '11';

    //文件路径,有中的情况下，要用绝对路径
    $path = 'dianzan.json';

    // 打开文件
    $file=fopen($path,'r');//只读

    // 读取文件 filesize(path)：读取文件字符长度
    $content=fread($file,filesize($path));
   
    $arr=json_decode($content,true);//true:[{},{},{}] false:{{},{},{}}

    // count()获取数组的长度,$arr[$i]['id']得到数组下标为i的id
    for($i=0;$i<count($arr);$i++){
        if($id==$arr[$i]['id']){
            $arr[$i]['good']++;//让数组下标为i的对象里面的good自加；
            echo $arr[$i]['good'];//把点赞后的值返回给前端
            break;
        }
    }


    // 写入文件
    $file = fopen($path,'w');//写入模式
    //把对象转成字符串，再写入json文件
    fwrite($file,json_encode($arr,JSON_UNESCAPED_UNICODE));
    // 写完之后才关闭
    fclose($file);
?>