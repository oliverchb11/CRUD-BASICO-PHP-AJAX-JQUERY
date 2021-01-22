<?php
$host = 'localhost';
$user = 'root';
$pw = '';
$db = 'task-app';

$connection = mysqli_connect($host, $user, $pw, $db);

// if(!$connection){
//     echo "Error: No se pudo conectar a MySQL." . PHP_EOL;
//     echo "errno de depuración: " . mysqli_connect_errno() . PHP_EOL;
//     echo "error de depuración: " . mysqli_connect_error() . PHP_EOL;
//     exit;
// }

// echo "Éxito: Se realizó una conexión apropiada a MySQL! La base de datos ".$db." es genial." . PHP_EOL;
// echo "Información del host: " . mysqli_get_host_info($connection) . PHP_EOL;



?>