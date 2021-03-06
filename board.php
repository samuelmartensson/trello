<?php 

require 'db.php';

$id = $_GET['id'];

try {

    $sql = "SELECT * FROM boards WHERE id = :id";
    $stmt = $db->prepare($sql);
    
    $stmt->execute([':id' => $id]);
    
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        $name = $row['name'];
    }
    if (empty($name)) {
        header('Location: 404.php');
    }
}
catch(PDOException $e) {
    echo $e->getMessage();
}


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/main.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <title>Board - <?= $name ?></title>
</head>
<body class="board">
    <?php require_once 'header.php'?>
    <div class="board__wrap">
    <h1 class="board__title">Working on: <input class="board__title-input" type="text" value="<?= $name ?>"></h1>
    <div class="board__input-wrap">
        <span class="board__input-wrap-title">Create new category</span>
        <input class="task-input" onkeydown="createNewCategory(event)" id="input-value" type="text" />
        <button class="board__cat-add" onclick="createNewCategory(event)">Create</button>
        <input id="board-id" type="hidden" value="<?= $id ?>" />
    </div>

    <section class="board__category">
        <ul class="board__category-list" id="categories"></ul>
    </section>
    </div>


    <script src="./js/templates.js"></script>
    <script src="./js/CRUD.js"></script>
    <script src="./js/renderBoard.js"></script>
    <script src="./js/modal.js"></script>
    <script src="./js/background.js"></script>
</body>
</html>