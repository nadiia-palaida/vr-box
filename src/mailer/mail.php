<?php

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$project = $_POST['project_name'];
$form_subject = $_POST['form_subject'];
$bluetoth = $_POST['order-vrbox'];

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;  

require './Exception.php';
require './PHPMailer.php';
require './SMTP.php';

$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = 0;                                       // Enable verbose debug output
    $mail->isSMTP();                                            // Set mailer to use SMTP
    $mail->Host       = 'smtp.ukr.net';  // Specify main and backup SMTP servers
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'n.palaida@ukr.net';                     // SMTP username
    $mail->Password   = '45nadiia45';                               // SMTP password
    $mail->SMTPSecure = 'ssl';                                  // Enable TLS encryption, `ssl` also accepted
    $mail->Port       = 465;                                    // TCP port to connect to

    //Recipients
    $mail->setFrom('n.palaida@ukr.net', 'vrbox');
    $mail->addAddress('n.palaida@gmail.com');     // Add a recipient
/*    $mail->addAddress('ellen@example.com');               // Name is optional
    $mail->addReplyTo('info@example.com', 'Information');
    $mail->addCC('cc@example.com');
    $mail->addBCC('bcc@example.com');*/

    // Attachments
/*    $mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
    $mail->addAttachment('/tmp/image.jpg', 'new.jpg'); */   // Optional name

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = $project_name;
    $mail->Body    = '
    Користувач залишив свої дані, щоб '.$form_subject.' <br>
	Ім\'я: '.$name.' <br>
	Номер телефону: '.$phone.' <br>
    Комплектація: '.$bluetoth.'
    ';
    //$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mail->send();
   
} catch (Exception $e) {
       echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
 echo '<script type="text/javascript">
           window.location = "/thanks.html"
      </script>';

?>