<?php 

class Logger{
    public static function log($string, $bool = true){
        if(!file_exists("logs.txt")){
            file_put_contents("logs.txt", "Мы заметили, что это первая запись логов вашего сервера. Так как файла logs.txt не было обнаружено, он был создан автоматически
");
        }
        $logsArr = file("logs.txt");
        if(count($logsArr) > 500){
            array_splice($logsArr,0,1);
        }
        file_put_contents("logs.txt",($bool ? $_SERVER['SERVER_ADDR'].":".$_SERVER['SERVER_PORT']." - " : "").$string,FILE_APPEND);
    }
}