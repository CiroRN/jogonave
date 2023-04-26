<?php
    header('Access-Control-Allow-Origin: *');

    require("conexao.php");

    $sql = "SELECT * FROM pontos ORDER BY ponto DESC limit 5";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            echo $row['nome'] . "|" . $row['ponto'] . "|";
        }
    } else {
        echo "Não há registros";
    }

    $conn->close();
?>