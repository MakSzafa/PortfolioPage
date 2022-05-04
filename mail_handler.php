<?php 
if(isset($_POST['submit'])){
    $to = "kontakt@makszafa.pl";
    $from = $_POST['mail'];
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $message = "Mail od: " . $name . "\n\nTreść wiadomości: " . $_POST['message'];
    $headers = "Content-Type: text/html; charset=UTF-8 \r\n";
    $headers = "From:" . $from;

    $retval = mail($to,$subject,$message,$headers);

    if( $retval == true ) {
        header('Location:email_sent.html');
     }else {
        header('Location:email_error.html');
     }
    }
?>