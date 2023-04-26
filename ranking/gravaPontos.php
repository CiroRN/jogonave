<?php
    header('Access-Control-Allow-Origin: *');

    require("conexao.php");

    if(isset($_GET['n']) && isset($_GET['p']))
    {
        $stmt = $conn->prepare("INSERT INTO pontos (nome, ponto) VALUES (?, ?)");
        $stmt->bind_param("si",$_GET['n'], $_GET['p']);
        $stmt->execute();
    }
    
    $conn->close();
?>