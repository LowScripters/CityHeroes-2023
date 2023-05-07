<?php 
require $_SERVER["DOCUMENT_ROOT"]."/sites/generator_db/api/core/apiBaseClass.php";

class SignIn extends apiBaseClass{
    public function registration($args){
        $response=[];

        if($args['userType'] == "applicant"){
            if(!empty($args['phone']) && !empty($args['mail']) && !empty($args['password']) && !empty($args['name']) && !empty($args['lastName']) && !empty($args['secondName'])){
                $response['answer'] = $this->registr($args['lastName'],$args['name'],$args['secondName'],"-","-","-",$args['password'],$args['mail'],$args['phone'],$args['userType'],);
                $response['token']=$this->getToken($args['mail'],$args['password']);
            }
            else{
                $response['error'] = "Не введён один из параметров!";
            }
        }
        elseif($args['userType'] == "employer"){
            if(!empty($args['companyAdress']) && !empty($args['phone']) && !empty($args['mail']) && !empty($args['password']) && !empty($args['organisationName']) && !empty($args['contactManName'])){
                $response['answer'] = $this->registr("-","-","-",$args['organisationName'],$args['contactManName'], $args['companyAdress'],$args['password'],$args['mail'],$args['phone'],$args['userType'],);
                $response['token']=$this->getToken($args['mail'],$args['password']);
            }
            else{
                $response['error'] = "Не введён один из параметров!";
            }
        }
        else{
            $response['error']="Тип пользователя не определён!";
        }
        
        
        return $response;
    }
    public function logIn($args){
        $response=[];
        if(!empty($args['mail']) && !empty(['password'])){
            $userArray=$this->getStandartInfoOfUser($args['mail']);
            if(password_verify($args['password'],$userArray['password'])){
                $response['answer']="GOOD";
                $response['token']=$this->getToken($userArray['mail'],$args['password']);
                $response['userType']=$userArray['userType'];
            }
            else{
                $response['error']="Пароль введён неправильно!";
            }
            
        }
        else{
            $response['error']="Не получен один или несколько параметров!";
        }
        return $response;
    }
}