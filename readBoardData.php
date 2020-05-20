<?php 

require 'db.php';

header('Content-Type: application/json; charset=UTF-8');

$id = $_GET['id'];

$sql = "SELECT * FROM boards WHERE id = :id";
$stmt = $db->prepare($sql);

$stmt->execute([':id' => $id]);

while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
    $data = $row['cate_task'];
}


$dataObj = json_decode($data, true);
$json = json_encode($dataObj, JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT);
echo $json;

?>