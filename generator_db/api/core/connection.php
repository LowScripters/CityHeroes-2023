﻿	<?php
	class Connection{
		static function getConnection(){
			$servername="localhost";
			$username = 'root';
			$password = 'root';
			$db_name = "adm_expert";
			$opt = array(
				PDO::ATTR_ERRMODE  => PDO::ERRMODE_EXCEPTION,
				PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
			);
			$connection = new PDO("mysql:host=$servername; dbname=$db_name; charset=utf8", $username, $password, $opt);
			return $connection;
		}
	}
	
	?>