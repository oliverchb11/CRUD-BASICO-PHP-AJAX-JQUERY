 <?php
 
 include('conexion.php');

 $name = $_POST['name'];
 $description = $_POST['description'];

 if(isset($name)){
    $query = "INSERT INTO task (name_task,description_task) VALUES ('$name', '$description')";
    $results = mysqli_query($connection,$query);
    if(!$results){
        die('Query failed');
    }
    echo "Task added successfully";
 }

    // $query = "INSERT INTO task VALUES name_task, description_task"


?> 