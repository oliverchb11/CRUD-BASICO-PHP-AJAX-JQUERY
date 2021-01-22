<?php


include('conexion.php');

$id = $_POST['id'];
$name = $_POST['name'];
$description = $_POST['description'];

if(isset($id)){
    $query = "UPDATE task SET name_task = '$name' , description_task = '$description' WHERE id = '$id'; ";
    $result = mysqli_query($connection,$query);
    if(!$result){
        die("Error Query");
    }

    echo 'Task con id ' . $id. ' update successfully';
}

?>