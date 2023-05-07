<?php
require $_SERVER["DOCUMENT_ROOT"]."/sites/generator_db/api/core/apiBaseClass.php";

class User extends apiBaseClass{
    public function getAll($args){
        $tokenArray = json_decode($this->verifyToken($args['token']), true);
        $userArray = $this->getStandartInfoOfUser($tokenArray['usrMail']);
        $userArray['password'] = strlen($tokenArray['usrPass']);
        $response['UserInfo'] = $userArray;

        return $response;
    }
}