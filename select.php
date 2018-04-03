<?php
    /*
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "whackamole";

    try {

        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $statement = $conn->prepare("SELECT name, score FROM players ORDER BY score DESC LIMIT 1");
        $statement->execute();

        $rows = $statement->fetchAll();

        foreach ($rows as $row) {
            echo "<tr>" . $row['name'] . $row['score'] . "</tr>";
        }
    } catch(PDOException $e) {
        echo "<p>" . $e->getMessage() . "</p>";
    }
    */
?>
