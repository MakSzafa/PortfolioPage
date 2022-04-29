<?php 
if(isset($_POST['submit'])){
    header('Location:error404.html');

    $to = "kontakt@makszafa.pl";
    $from = $_POST['mail'];
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $message = "Mail od: " . $name . "\n\nTreść wiadomości: " . $_POST['message'];
    $headers = "From:" . $from;

    $retval = mail($to,$subject,$message,$headers);

    if( $retval == true ) {
        header('Location:email_sent.html');
        sleep(5);
        header('Location: ' . $_SERVER['HTTP_REFERER']);
     }else {
        header('Location:email_error.html');
        sleep(5);
        header('Location: ' . $_SERVER['HTTP_REFERER']);
     }
    }
?>