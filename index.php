<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="./css/main.css">
    <title>Tre-low</title>
</head>
<body class="home">
<?php require_once 'header.php'?>

<section class="home__wrap">
<h1 class="home__title">What would you like to do?</h1>
    <div class="left-col">
        <a class="home__btn" href="boardCreate.php"><div class="icon"><i class="fa fa-pencil"></i></div></a>
        <span class="home__btn-info">Create new board</span>
    </div>
    <div class="right-col">
        <a class="home__btn" href="boardView.php"><div class="icon"><i class="fa fa-file"></i></div></a>
        <span class="home__btn-info">Open existing board</span>
    </div>
</section>
<?php require_once 'footer.php'?>

    <script src="./js/createBoard.js"></script>
</body>
</html>