<?php

include('conexion.php');

$id = $_POST['id'];

if(isset($id)){

    $query = "DELETE FROM task WHERE id = '$id'";
    $result = mysqli_query($connection,$query);
    if(!$result){
        die("Error query");
    }

    echo 'task with id ' .$id.' removed successfully';
}

?>