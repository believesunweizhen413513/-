<?php
header('Content-type:text/html;charset=utf-8');//设置编码
// 设置一个数组
    $goodlist=array();//相当于 var arr=[];
    
    $name=array('连衣裙','衬衫','T恤','针织衫','短裙','蓬蓬裙','雪纺衫','围裙','碎花裙','半身裙','卫衣裙','半身裙');
    $price=array(88,35,39,55,59,109,129,29,79,99,109,89);
    $color = array('黑色','绿色','粉红色','金色','骚粉','钢琴黑');
    $size=array('M','L','S');
    for($i = 0; $i <12; $i++) {
        $good=array(
            'gid'=>$i+1,
             //  array_rand() 随机获取索引值
            'name'=>$name[array_rand($name)],
            'price'=>$price[array_rand($price)],
            'color' => $color[array_rand($color)],
            'size' => $size[array_rand($size)]
        );
        $goodlist[] = $good;
    }
     //把对象转成字符串：echo ：1、打印数据到页面；2、把数据传给前端；
    //  json_encode(); 把数组转成字符串
     echo json_encode($goodlist,JSON_UNESCAPED_UNICODE);
   
?>