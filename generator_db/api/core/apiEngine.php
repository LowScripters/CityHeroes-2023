<?php
require "logger.php";
date_default_timezone_set('Asia/Omsk');

class ApiEngine {
    public static function funcValidate($classRoot, $funcClass, $funcName){
        if(!file_exists("classes/$classRoot/$funcClass.php")){
            Logger::log($_SERVER['REMOTE_ADDR']."[".$_SERVER['REQUEST_TIME']."]".$_SERVER['REQUEST_METHOD']."/".$_SERVER['SERVER_PROTOCOL']."  ".$_SERVER['HTTP_USER_AGENT']." : 'Function verify: File or path not found!';
$classRoot, $funcClass, $funcName
");
            return true;
        }
        else{
            require_once "classes/$classRoot/$funcClass.php";

            $methods = get_class_methods($funcClass);
            for($i=0; $i < count($methods); $i++){
                if($methods[$i] == $funcName){
                    Logger::log($_SERVER['REMOTE_ADDR']."[".date("H:i:s")."]".$_SERVER['REQUEST_METHOD']."/".$_SERVER['SERVER_PROTOCOL']."  ".$_SERVER['HTTP_USER_AGENT']." : 'Function verify: Function geted!';
");
                    return false;
                }
            }
            Logger::log($_SERVER['REMOTE_ADDR']."[".date("H:i:s")."]".$_SERVER['REQUEST_METHOD']."/".$_SERVER['SERVER_PROTOCOL']."  ".$_SERVER['HTTP_USER_AGENT']." : 'Function verify: Function not found!';
");
            return true;
         }
    }
    public static function mkFunction ($funcArray, $funcName){
        require_once "classes/".$funcArray['ClassRoot']."/".$funcArray['ClassName'].".php";
        $object = new $funcArray['ClassName'];

        $funcArrayNum = [];
        $funcArrayKey = [];
        $i=0;
        
        unset($funcArray['FunctionName'],$funcArray['ClassName'],$funcArray['ClassRoot']);

        foreach($funcArray as $name => $value){
            $funcArrayNum[$i] = $value;
            $funcArrayKey[$i] = $name;
            $i++;
        }
        Logger::log($_SERVER['REMOTE_ADDR']."[".date("H:i:s")."]".$_SERVER['REQUEST_METHOD']."/".$_SERVER['SERVER_PROTOCOL']."  ".$_SERVER['HTTP_USER_AGENT']." : 'Function input: ");
        $arrCount = count($funcArrayNum);
        for($i=0;$i<$arrCount;$i++){
            Logger::log('"'.$funcArrayKey[$i].'" =>'.' "'.$funcArrayNum[$i].($i<($arrCount-1) ? '" ,' : '"'." ';
"),false);
        }
        $functionOutput = json_encode($object->$funcName($funcArray),JSON_UNESCAPED_UNICODE);
        Logger::log($_SERVER['REMOTE_ADDR']."[".date("H:i:s")."]".$_SERVER['REQUEST_METHOD']."/".$_SERVER['SERVER_PROTOCOL']."  ".$_SERVER['HTTP_USER_AGENT']." : 'Function outnput: $functionOutput';
***
");
        return $functionOutput ;
    }
}