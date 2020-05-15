<header class="header">
    <a href="index.php">Home</a>
    <a href="boardView.php">Boards</a>
    <a href="boardCreate.php">Create new</a>
    <?php 
    if (strpos($_SERVER['REQUEST_URI'], 'board.php')){
        echo '<button onclick="changeBg()" class="float-right"><img src="cog-solid.svg"/></button>';
    }
    
    ?>
</header>