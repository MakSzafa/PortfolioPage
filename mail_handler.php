<?php 
if(isset($_POST['submit'])){
    $to = "kontakt@makszafa.pl";
    $from = $_POST['mail'];
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $message = "hejka to ja:" . $name . "\n\n a to moja wiadomosc:" . $_POST['message'];
    $headers = "From:" . $from;

    $retval = mail($to,$subject,$message,$headers);

    if( $retval == true ) {
        echo "Mail Sent. Thank you " . $name . ", we will contact you shortly.";
     }else {
        echo "Message could not be sent...";
     }
    }
?>