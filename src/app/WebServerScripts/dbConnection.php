<?php

header("Access-Control-Allow-Origin: *");

header("Access-Control-Allow-Headers: Content-Type");

header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

header("Content-Type: application/json; charset=UTF-8");

getUsers();

function getUsers(){
     //$conn = mysqli_connect('bemsaudavel.mysql.dbaas.com.br', 'bemsaudavel', 'admindb', 'bemsaudavel') or print (mysqli_error());
     $host="localhost";
     $port=3306;
     $socket="";
     $user="root";
     $password="root";
     $dbname="bemsaudavel";
 
     $conn = new mysqli($host, $user, $password, $dbname, $port, $socket)
         or die ('Could not connect to the database server' . mysqli_connect_error());
         $result = $conn->query("SELECT * FROM userlogin");

         $user = array();
     
         while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
     
             array_push($user,array(
     
             'id'=>$rs["id"],
     
             'nome'=>$rs["nome"],
             'email'=>$rs["email"],
             'senha'=>$rs["senha"]));
     
         }
     
         $conn->close();
     
         $json = json_encode($user);
     
         if ($json === false) {
     
             // Avoid echo of empty string (which is invalid JSON), and
     
             // JSONify the error message instead:
     
             $json = json_encode(array("jsonError", json_last_error_msg()));
     
             if ($json === false) {
     
                 // This should not happen, but we go all the way now:
     
                 $json = '{"jsonError": "unknown"}';
     
             }
     
             // Set HTTP response status code to: 500 - Internal Server Error
     
             http_response_code(500);
     
         }
     
         echo $json;
     
     }
     
     ?>