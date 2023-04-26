<?php
    $conn = mysqli_connect("localhost","root","","jogo");

    if ($conn->connect_error) {
        die("Erro na conexão: " . $conn->connect_error);
    }