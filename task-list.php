<?php 
 
 include('conexion.php');


 $query = "SELECT * FROM task";
 $results = mysqli_query($connection, $query);
 if(!$results){
     die("Query faild");
 }

 $json = array();

 while($row = mysqli_fetch_array($results)){
     $json[] = array(
         'id' => $row['id'],
         'name'=> $row['name_task'],
         'description'=> $row['description_task'],
     );
 }

 $jsonStr = json_encode($json);

 echo $jsonStr;

?>