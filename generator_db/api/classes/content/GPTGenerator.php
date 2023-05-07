<?php
require $_SERVER["DOCUMENT_ROOT"]."/sites/generator_db/api/core/gptConnector.php";

class GPTGenerator{
    public function GPTgenerate($args){
            return json_decode(GPTConnector::browseAnswer($args['typeItem'],$args['color'])); //!проверить на работоспособность
    }
    public function GPTgenerateAll($args){
        $response = [];
        $respCodes =["text","button","div"];
        for($i=0;$i<3;$i++){
            $response[$respCodes[$i]] = json_decode(GPTConnector::browseAnswer($respCodes[$i],$args['color']));
        }
        return $response;
    }
}