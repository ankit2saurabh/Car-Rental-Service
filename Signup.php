<?php
    $fname = $_POST['fname'];
    $lname = $_POST['lname'];
    $fth_name = $_POST['fth_name'];
    $gender = $_POST['gender'];
    $cemail = $_POST['cemail'];
    $cpass = $_POST['cpass'];
    $mno = $_POST['mno'];
    $address = $_POST['address'];
    $dist = $_POST['dist'];
    $st = $_POST['st'];
    $pinc = $_POST['pinc'];
    $vill1 = $_POST['vill1'];
    $po1 = $_POST['po1'];
    $ps1 = $_POST['ps1'];
    $dist1 = $_POST['dist1'];
    $st1 = $_POST['st1'];
    $pinc1 = $_POST['pinc1'];
    $nat = $_POST['nat'];
    //Database Connection
    //Database Connection
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "test";
    try {
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        // set the PDO error mode to exception
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $sql = "INSERT INTO registration (Fname,Lname,Father_Name,Gender,Date_of_Birth,Mobile_No,Confirm_Mail,Confirm_Password,Town,Post_Office,Police_Station,District,State_of_user,Pincode,Town1,Post_Office1,Police_Station1,District1,State_of_user1,Pincode1,Nationality) VALUES ('$fname','$lname','$fth_name','$gender','$newDate','$mno','$cemail','$cpass','$vill','$po','$ps','$dist','$st','$pinc','$vill1','$po1','$ps1','$dist1','$st1','$pinc1','$nat')";
        $conn->exec($sql);
        echo "New record created successfully";
    }
    catch(PDOException $e)
        {
        echo $sql . "<br>" . $e->getMessage();
        }
    $conn = null;
?>