<?php
    // 接收前端传来的数据，判断用户名是否存在
    $name=$_REQUEST['name'];//接收数据，需要校验的时候要在前端校验
    $arr=array('覃柳岚','陈浩彬','谢佳兴','jack','lucy','liming');
    if(in_array($name,$arr)){//in_arr判断数组里是否含有某个值
        echo 'no';
    }else{
        echo 'yes';//分号不能省略，省略不出结果
    }
?>