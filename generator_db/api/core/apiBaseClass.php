<?php
require_once "connection.php";
define("SECRET_KEY",    '_UwU_Thanks_Master_');
define("SECRET_KEY_ALT", 'YaTvoiG()rl№os$hat@l');

class apiBaseClass{
    public function registr($userLastName, $userName, $userSecondName, $organisationName, $contactManName, $companyAdress, $userPassword, $userMail, $userPhone, $userType){

        $userPassword = password_hash($userPassword,PASSWORD_DEFAULT);

        $connection = Connection::getConnection();
        $getValue = $connection->prepare("SELECT * FROM users WHERE mail = :mail || phone = :phone");
        $getValue->execute([
                ':mail'=>$userMail,
                ':phone'=>$userPhone
        ]);
        if($getValue->fetch(PDO::FETCH_ASSOC)){
           return "Почта или телефон занят!";
        }
        else{
            $addUser = $connection->prepare("INSERT INTO users(lastName, name, secondName, organisationName, contactManName, companyAdress, mail, phone, password, userType) VALUES (:lastName,:userName,:secondName,:orgName,:contactMan, :orgAdress,:mail,:phone,:password,:userType)");
            $addUser->execute([
                ':lastName'=>$userLastName,
                ':userName'=>$userName,
                ':secondName'=>$userSecondName,
                ':orgName'=>$organisationName,
                ':contactMan'=>$contactManName,
                ':orgAdress'=>$companyAdress,
                ':mail'=>$userMail,
                ':phone'=>$userPhone,
                ':password'=>$userPassword,
                ':userType'=>$userType
            ]);
            return "GOOD";
        }
    }
    public function getToken($mail,$password){
        $open_data=["alg"=>"HS256","typ"=>"LS","iss"=>"adm-expert","usrMail"=>$mail,"usrPass"=>$password];
        $open_data = json_encode($open_data);
        $unsignedToken = base64_encode($open_data);
        $signature = hash_hmac("sha256",$unsignedToken,SECRET_KEY);
        $token = $unsignedToken .".". $signature;
        
        return $token;
    }
    public function verifyToken($token){
        $detailsOfToken = explode(".", $token);
        if(hash_hmac("sha256",$detailsOfToken[0],SECRET_KEY) == $detailsOfToken[1]){
            return base64_decode($detailsOfToken[0]);
        }
    }
    public function getStandartInfoOfUser($mail){
        $userArray=[];
        $connection = Connection::getConnection();

        $getValue = $connection->prepare("SELECT * FROM users WHERE mail = :mail");
        $getValue->execute([
                ':mail'=>$mail
        ]);

        foreach($getValue as $row) {
            $userArray=$row;
        }
        return $userArray;
    }
}