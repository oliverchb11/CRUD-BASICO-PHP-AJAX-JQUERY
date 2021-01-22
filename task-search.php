<?php
include('conexion.php');
$search = $_POST['search'];
    if(!empty($search)){
        $query = "SELECT * FROM task WHERE name_task LIKE '$search%'";
       $result = mysqli_query($connection,$query);
       if(!$result){
           die('Query failed');
       }
       $json = array();
       while($row = mysqli_fetch_array($result)){
           $json[] = array(
               'id'=> $row['id'],
               'name'=> $row['name_task'],
               'description'=> $row['description_task'],
           );
       }
       $jsonString = json_encode($json);
       echo $jsonString;
    }
?>