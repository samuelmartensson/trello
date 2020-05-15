<?php 


require 'db.php';

$template = '';

$sql = "SELECT * FROM boards";
$stmt = $db->prepare($sql);
$stmt->execute();

while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
    $id = $row['id'];
    $name = $row['name'];
    $template .= "<li><a class='view__list-item' href='board.php?id=$id'>$name</a><a class='view__delete' href='boardDelete.php?id=$id'>Delete</a></li>";

}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/main.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <title>All boards</title>
</head>
<body class="view">
<?php require_once 'header.php'?>

    <div class="view__container">
        <div class="view__list-wrap">
            <h1 class="view__title">Select a board</h1>
        <ul class="view__list">
            <?= $template ?>
        </ul>
        </div>
    </div>
    <?php require_once 'footer.php'?>

</body>
</html>