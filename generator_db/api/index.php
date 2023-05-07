<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

if (empty($_POST)) {
    header("Content-Type: text/text; charset=UTF-8");

    echo "No function";
    //echo json_encode($_POST);
    //echo file_get_contents("php://input");
} else {
    header("Content-Type: application/json; charset=ASCI");
    require "core/apiEngine.php";
    $api = new ApiEngine;

    if ($api->funcValidate($_POST['ClassRoot'], $_POST['ClassName'], $_POST['FunctionName'])) {
        echo '{"Error":"Функция или класс не найдены или недоступны!"}';
    } else {
        echo $api->mkFunction($_POST, $_POST['FunctionName']);
    }

    //var_dump($_POST);
}
