<?php

    include('conexion.php');

    $id = $_POST['id'];

    if(isset($id)){
        $query = "SELECT * FROM task WHERE id = '$id'";
        $result = mysqli_query($connection,$query);
        if(!$result){
            die("Error the query");
        }
        $json = array();
        while($row = mysqli_fetch_array($result)){
            $json[] = array(
                'id'=> $row['id'],
                'name'=> $row['name_task'],
                'description'=> $row['description_task'],
            );

        }
        $jsonStr = json_encode($json);
        echo $jsonStr;
      
    }

?>