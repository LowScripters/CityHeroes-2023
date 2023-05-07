<?php
define("API_KEY", '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');
class GPTConnector{
    public static function browseAnswer($module, $color){
        // Установите данные для отправки запроса
        $data = array(
            'model' => 'text-davinci-003',
            'prompt' => "Сгенерируй дизайн $module с использованием цвета $color css в JSON формате",
            'temperature' => 0.5,
            'max_tokens' => 3000
        );


        // Создайте экземпляр cURL
        $ch = curl_init();

        // Установите параметры запроса
        curl_setopt($ch, CURLOPT_URL, 'https://api.openai.com/v1/completions');
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
            'Content-Type: application/json',
            'Authorization: Bearer ' . API_KEY
        ));


        // Выполните запрос на API OpenAI и получите ответ
        $result = curl_exec($ch);
        // Закройте сеанс cURL
        curl_close($ch);

        // Выведите ответ на экран
        return json_decode($result,true)["choices"][0]["text"];
        //return json_decode($result, true)["choices"][0]["text"];
    }
}

